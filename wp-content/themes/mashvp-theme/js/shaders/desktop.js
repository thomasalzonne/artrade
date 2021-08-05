import {
    Flowmap,
    Geometry,
    Mesh,
    Program,
    Renderer,
    Texture,
    Vec2,
    Vec4,
  } from 'ogl';
  
  import { vert, frag } from '../utils';
  
  export default (target) => {
    const vertexShader = vert`
        attribute vec2 uv;
        attribute vec2 position;
  
        varying vec2 vUv;
  
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;
  
    const fragmentShader = frag`
        precision highp float;
        precision highp int;
  
        varying vec2 vUv;
  
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uUseMouse;
        uniform float uNoiseMultiplier;
        uniform sampler2D uTexture;
        uniform sampler2D uFlow;
        uniform vec4 uRes;
  
        void main() {
          vec3 flow = texture2D(uFlow, vUv).rgb;
          vec2 uv = 0.5 * gl_FragCoord.xy / uRes.xy;
  
          vec2 baseUV = (uv - vec2(0.5)) * uRes.zw + vec2(0.5) - flow.xy / 100.0;
          vec2 rUV = baseUV - flow.xy / 150.0;
          vec2 gUV = baseUV - flow.xy / 100.0;
          vec2 bUV = baseUV - flow.xy / 50.0;
  
          vec3 tex = vec3(
            texture2D(uTexture, rUV).r,
            texture2D(uTexture, gUV).g,
            texture2D(uTexture, bUV).b
          );
  
          gl_FragColor = vec4(tex, 1.0);
        }
      `;
  
    const I = {
      default: target.querySelector('img'),
    };
  
    const S = {
      frameID: -1,
  
      mouse: new Vec2(0.5),
      velocity: new Vec2(),
  
      previousTime: null,
      previousMouse: new Vec2(),
  
      aspect: 1,
      image: {
        url: '',
        size: {
          x: I.default.offsetWidth,
          y: I.default.offsetHeight,
        },
      },
  
      renderer: null,
      gl: null,
      canvas: null,
  
      flowmap: null,
      geometry: null,
      texture: null,
      program: null,
      mesh: null,
    };
  
    const computeAspect = () => {
      const imageAspect = I.default.naturalHeight / I.default.naturalWidth;
      const windowAspect = {
        h: target.offsetHeight / target.offsetWidth,
        v: target.offsetWidth / target.offsetHeight,
      };
  
      if (windowAspect.h < imageAspect) {
        return { ah: 1, av: windowAspect.h / imageAspect };
      }
  
      return { ah: windowAspect.v * imageAspect, av: 1 };
    };
  
    const resize = () => {
      const { ah, av } = computeAspect();
  
      S.mesh.program.uniforms.uRes.value = new Vec4(
        target.offsetWidth,
        target.offsetHeight,
        ah,
        av
      );
  
      S.renderer.setSize(target.offsetWidth, target.offsetHeight);
      S.aspect = target.offsetWidth / target.offsetHeight;
    };
  
    const updateMouse = (event) => {
      const { offsetX, offsetY } = event;
  
      // Do not prevent default as this blocks clicks on links on touch devices
      // event.preventDefault();
  
      const P = {
        x: event.x + window.pageXOffset - target.offsetLeft,
        y: event.y + window.pageYOffset - target.offsetTop,
      };
  
      if (event.x === undefined) {
        P.x = offsetX + window.pageXOffset - target.offsetLeft;
        P.y = offsetY + window.pageYOffset - target.offsetTop;
      }
  
      // Get mouse value in 0 to 1 range, with y flipped
      S.mouse.set(P.x / S.gl.renderer.width, 1.0 - P.y / S.gl.renderer.height);
  
      // Calculate velocity
      if (!S.previousTime) {
        // First frame
        S.previousTime = window.performance.now();
        S.previousMouse.set(P.x, P.y);
      }
  
      const deltaX = P.x - S.previousMouse.x;
      const deltaY = P.y - S.previousMouse.y;
  
      S.previousMouse.set(P.x, P.y);
  
      const time = window.performance.now();
  
      // Avoid dividing by 0
      const delta = Math.max(10.4, time - S.previousTime);
  
      S.previousTime = time;
      S.velocity.x = deltaX / delta;
      S.velocity.y = deltaY / delta;
  
      // Flag update to prevent hanging velocity values when not moving
      S.velocity.needsUpdate = true;
    };
  
    const init = () => {
      S.renderer = new Renderer({
        dpr: 2,
        alpha: true,
        premultipliedAlpha: true,
      });
  
      S.gl = S.renderer.gl;
      S.canvas = S.gl.canvas;
  
      S.canvas.setAttribute('id', 'scene');
      target.appendChild(S.canvas);
  
      S.flowmap = new Flowmap(S.gl, {
        size: 512,
        falloff: 0.95,
        dissipation: 0.96,
      });
  
      S.geometry = new Geometry(S.gl, {
        position: {
          size: 2,
          data: new Float32Array([-1, -1, 3, -1, -1, 3]),
        },
        uv: {
          size: 2,
          data: new Float32Array([0, 0, 2, 0, 0, 2]),
        },
      });
  
      S.texture = new Texture(S.gl, {
        minFilter: S.gl.LINEAR,
        magFilter: S.gl.LINEAR,
        premultiplyAlpha: true,
      });
  
      const img = new Image();
  
      img.addEventListener('load', () => (S.texture.image = img));
      img.src = I.default.src;
  
      const { ah, av } = computeAspect();
  
      S.program = new Program(S.gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uMouse: { value: S.mouse },
          uUseMouse: { value: 1.0 },
          uNoiseMultiplier: { value: 6.0 },
          uTexture: { value: S.texture },
          uFlow: S.flowmap.uniform,
          uRes: {
            value: new Vec4(target.offsetWidth, target.offsetHeight, ah, av),
          },
        },
      });
  
      S.mesh = new Mesh(S.gl, { geometry: S.geometry, program: S.program });
  
      window.addEventListener('resize', resize, false);
      resize();
  
      target.addEventListener('mousemove', updateMouse, false);
  
      const update = (elapsed) => {
        S.frameID = requestAnimationFrame(update);
  
        if (!S.velocity.needsUpdate) {
          S.velocity.set(0);
        }
  
        S.velocity.needsUpdate = false;
  
        S.flowmap.aspect = S.aspect;
        S.flowmap.mouse.copy(S.mouse);
        S.flowmap.velocity.lerp(S.velocity, S.velocity.len() ? 0.15 : 0.1);
        S.flowmap.update();
  
        S.program.uniforms.uTime.value = elapsed * 0.01;
  
        S.renderer.render({ scene: S.mesh });
      };
  
      S.frameID = requestAnimationFrame(update);
      I.default.style.opacity = 0;
  
      return this;
    };
  
    const destroy = () => {
      cancelAnimationFrame(S.frameID);
      I.default.style.opacity = '';
      target.removeChild(S.canvas);
  
      return this;
    };
  
    return { init, destroy };
  };
  
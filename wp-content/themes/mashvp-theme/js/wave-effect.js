parcelRequire = function(e, r, t, n) {
  var i, o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
      if (!r[t]) {
          if (!e[t]) {
              var i = "function" == typeof parcelRequire && parcelRequire;
              if (!n && i) return i(t, !0);
              if (o) return o(t, !0);
              if (u && "string" == typeof t) return u(t);
              var c = new Error("Cannot find module '" + t + "'");
              throw c.code = "MODULE_NOT_FOUND", c
          }
          p.resolve = function(r) {
              return e[t][1][r] || r
          }, p.cache = {};
          var l = r[t] = new f.Module(t);
          e[t][0].call(l.exports, p, l, l.exports, this)
      }
      return r[t].exports;

      function p(e) {
          return f(p.resolve(e))
      }
  }
  f.isParcelRequire = !0, f.Module = function(e) {
      this.id = e, this.bundle = f, this.exports = {}
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
      e[r] = [function(e, r) {
          r.exports = t
      }, {}]
  };
  for (var c = 0; c < t.length; c++) try {
      f(t[c])
  } catch (e) {
      i || (i = e)
  }
  if (t.length) {
      var l = f(t[t.length - 1]);
      "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
          return l
      }) : n && (this[n] = l)
  }
  if (parcelRequire = f, i) throw i;
  return f
}({
  "BQvw": [function(require, module, exports) {
      var define;
      var global = arguments[3];
      var t, e = arguments[3];
      ! function(e, n) {
          "function" == typeof t && t.amd ? t(n) : "object" == typeof module && module.exports ? module.exports = n() : e.EvEmitter = n()
      }("undefined" != typeof window ? window : this, function() {
          "use strict";

          function t() {}
          var e = t.prototype;
          return e.on = function(t, e) {
              if (t && e) {
                  var n = this._events = this._events || {},
                      i = n[t] = n[t] || [];
                  return -1 == i.indexOf(e) && i.push(e), this
              }
          }, e.once = function(t, e) {
              if (t && e) {
                  this.on(t, e);
                  var n = this._onceEvents = this._onceEvents || {};
                  return (n[t] = n[t] || {})[e] = !0, this
              }
          }, e.off = function(t, e) {
              var n = this._events && this._events[t];
              if (n && n.length) {
                  var i = n.indexOf(e);
                  return -1 != i && n.splice(i, 1), this
              }
          }, e.emitEvent = function(t, e) {
              var n = this._events && this._events[t];
              if (n && n.length) {
                  n = n.slice(0), e = e || [];
                  for (var i = this._onceEvents && this._onceEvents[t], s = 0; s < n.length; s++) {
                      var o = n[s];
                      i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e)
                  }
                  return this
              }
          }, e.allOff = function() {
              delete this._events, delete this._onceEvents
          }, t
      });
  }, {}],
  "lc7f": [function(require, module, exports) {
      var define;
      var t;
      console.log('hello')
      ! function(e, i) {
          "use strict";
          "function" == typeof t && t.amd ? t(["ev-emitter/ev-emitter"], function(t) {
              return i(e, t)
          }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
      }("undefined" != typeof window ? window : this, function(t, e) {
          "use strict";
          var i = t.jQuery,
              o = t.console;

          function r(t, e) {
              for (var i in e) t[i] = e[i];
              return t
          }
          var s = Array.prototype.slice;

          function n(t, e, h) {
              if (!(this instanceof n)) return new n(t, e, h);
              var a, m = t;
              ("string" == typeof t && (m = document.querySelectorAll(t)), m) ? (this.elements = (a = m, Array.isArray(a) ? a : "object" == typeof a && "number" == typeof a.length ? s.call(a) : [a]), this.options = r({}, this.options), "function" == typeof e ? h = e : r(this.options, e), h && this.on("always", h), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : o.error("Bad element for imagesLoaded " + (m || t))
          }
          n.prototype = Object.create(e.prototype), n.prototype.options = {}, n.prototype.getImages = function() {
              this.images = [], this.elements.forEach(this.addElementImages, this)
          }, n.prototype.addElementImages = function(t) {
              "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
              var e = t.nodeType;
              if (e && h[e]) {
                  for (var i = t.querySelectorAll("img"), o = 0; o < i.length; o++) {
                      var r = i[o];
                      this.addImage(r)
                  }
                  if ("string" == typeof this.options.background) {
                      var s = t.querySelectorAll(this.options.background);
                      for (o = 0; o < s.length; o++) {
                          var n = s[o];
                          this.addElementBackgroundImages(n)
                      }
                  }
              }
          };
          var h = {
              1: !0,
              9: !0,
              11: !0
          };

          function a(t) {
              this.img = t
          }

          function m(t, e) {
              this.url = t, this.element = e, this.img = new Image
          }
          return n.prototype.addElementBackgroundImages = function(t) {
              var e = getComputedStyle(t);
              if (e)
                  for (var i = /url\((['"])?(.*?)\1\)/gi, o = i.exec(e.backgroundImage); null !== o;) {
                      var r = o && o[2];
                      r && this.addBackground(r, t), o = i.exec(e.backgroundImage)
                  }
          }, n.prototype.addImage = function(t) {
              var e = new a(t);
              this.images.push(e)
          }, n.prototype.addBackground = function(t, e) {
              var i = new m(t, e);
              this.images.push(i)
          }, n.prototype.check = function() {
              var t = this;

              function e(e, i, o) {
                  setTimeout(function() {
                      t.progress(e, i, o)
                  })
              }
              this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(t) {
                  t.once("progress", e), t.check()
              }) : this.complete()
          }, n.prototype.progress = function(t, e, i) {
              this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && o && o.log("progress: " + i, t, e)
          }, n.prototype.complete = function() {
              var t = this.hasAnyBroken ? "fail" : "done";
              if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                  var e = this.hasAnyBroken ? "reject" : "resolve";
                  this.jqDeferred[e](this)
              }
          }, a.prototype = Object.create(e.prototype), a.prototype.check = function() {
              this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
          }, a.prototype.getIsImageComplete = function() {
              return this.img.complete && this.img.naturalWidth
          }, a.prototype.confirm = function(t, e) {
              this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
          }, a.prototype.handleEvent = function(t) {
              var e = "on" + t.type;
              this[e] && this[e](t)
          }, a.prototype.onload = function() {
              this.confirm(!0, "onload"), this.unbindEvents()
          }, a.prototype.onerror = function() {
              this.confirm(!1, "onerror"), this.unbindEvents()
          }, a.prototype.unbindEvents = function() {
              this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
          }, m.prototype = Object.create(a.prototype), m.prototype.check = function() {
              this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
          }, m.prototype.unbindEvents = function() {
              this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
          }, m.prototype.confirm = function(t, e) {
              this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
          }, n.makeJQueryPlugin = function(e) {
              (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                  return new n(this, t, e).jqDeferred.promise(i(this))
              })
          }, n.makeJQueryPlugin(), n
      });
  }, {
      "ev-emitter": "BQvw"
  }],
  "kjJc": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.length = r, exports.copy = e, exports.set = n, exports.add = o, exports.subtract = u, exports.multiply = s, exports.divide = c, exports.scale = i, exports.distance = a, exports.squaredDistance = p, exports.squaredLength = f, exports.negate = x, exports.inverse = l, exports.normalize = d, exports.dot = M, exports.cross = h, exports.lerp = q, exports.transformMat4 = g, exports.scaleRotateMat4 = m, exports.transformMat3 = v, exports.transformQuat = y, exports.exactEquals = P, exports.angle = void 0;
      const t = 1e-6;

      function r(t) {
          let r = t[0],
              e = t[1],
              n = t[2];
          return Math.sqrt(r * r + e * e + n * n)
      }

      function e(t, r) {
          return t[0] = r[0], t[1] = r[1], t[2] = r[2], t
      }

      function n(t, r, e, n) {
          return t[0] = r, t[1] = e, t[2] = n, t
      }

      function o(t, r, e) {
          return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t
      }

      function u(t, r, e) {
          return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t
      }

      function s(t, r, e) {
          return t[0] = r[0] * e[0], t[1] = r[1] * e[1], t[2] = r[2] * e[2], t
      }

      function c(t, r, e) {
          return t[0] = r[0] / e[0], t[1] = r[1] / e[1], t[2] = r[2] / e[2], t
      }

      function i(t, r, e) {
          return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t
      }

      function a(t, r) {
          let e = r[0] - t[0],
              n = r[1] - t[1],
              o = r[2] - t[2];
          return Math.sqrt(e * e + n * n + o * o)
      }

      function p(t, r) {
          let e = r[0] - t[0],
              n = r[1] - t[1],
              o = r[2] - t[2];
          return e * e + n * n + o * o
      }

      function f(t) {
          let r = t[0],
              e = t[1],
              n = t[2];
          return r * r + e * e + n * n
      }

      function x(t, r) {
          return t[0] = -r[0], t[1] = -r[1], t[2] = -r[2], t
      }

      function l(t, r) {
          return t[0] = 1 / r[0], t[1] = 1 / r[1], t[2] = 1 / r[2], t
      }

      function d(t, r) {
          let e = r[0],
              n = r[1],
              o = r[2],
              u = e * e + n * n + o * o;
          return u > 0 && (u = 1 / Math.sqrt(u)), t[0] = r[0] * u, t[1] = r[1] * u, t[2] = r[2] * u, t
      }

      function M(t, r) {
          return t[0] * r[0] + t[1] * r[1] + t[2] * r[2]
      }

      function h(t, r, e) {
          let n = r[0],
              o = r[1],
              u = r[2],
              s = e[0],
              c = e[1],
              i = e[2];
          return t[0] = o * i - u * c, t[1] = u * s - n * i, t[2] = n * c - o * s, t
      }

      function q(t, r, e, n) {
          let o = r[0],
              u = r[1],
              s = r[2];
          return t[0] = o + n * (e[0] - o), t[1] = u + n * (e[1] - u), t[2] = s + n * (e[2] - s), t
      }

      function g(t, r, e) {
          let n = r[0],
              o = r[1],
              u = r[2],
              s = e[3] * n + e[7] * o + e[11] * u + e[15];
          return s = s || 1, t[0] = (e[0] * n + e[4] * o + e[8] * u + e[12]) / s, t[1] = (e[1] * n + e[5] * o + e[9] * u + e[13]) / s, t[2] = (e[2] * n + e[6] * o + e[10] * u + e[14]) / s, t
      }

      function m(t, r, e) {
          let n = r[0],
              o = r[1],
              u = r[2],
              s = e[3] * n + e[7] * o + e[11] * u + e[15];
          return s = s || 1, t[0] = (e[0] * n + e[4] * o + e[8] * u) / s, t[1] = (e[1] * n + e[5] * o + e[9] * u) / s, t[2] = (e[2] * n + e[6] * o + e[10] * u) / s, t
      }

      function v(t, r, e) {
          let n = r[0],
              o = r[1],
              u = r[2];
          return t[0] = n * e[0] + o * e[3] + u * e[6], t[1] = n * e[1] + o * e[4] + u * e[7], t[2] = n * e[2] + o * e[5] + u * e[8], t
      }

      function y(t, r, e) {
          let n = r[0],
              o = r[1],
              u = r[2],
              s = e[0],
              c = e[1],
              i = e[2],
              a = c * u - i * o,
              p = i * n - s * u,
              f = s * o - c * n,
              x = c * f - i * p,
              l = i * a - s * f,
              d = s * p - c * a,
              M = 2 * e[3];
          return a *= M, p *= M, f *= M, x *= 2, l *= 2, d *= 2, t[0] = n + a + x, t[1] = o + p + l, t[2] = u + f + d, t
      }
      const b = function() {
          const t = [0, 0, 0],
              r = [0, 0, 0];
          return function(n, o) {
              e(t, n), e(r, o), d(t, t), d(r, r);
              let u = M(t, r);
              return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u)
          }
      }();

      function P(t, r) {
          return t[0] === r[0] && t[1] === r[1] && t[2] === r[2]
      }
      exports.angle = b;
  }, {}],
  "NC5f": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Vec3 = void 0;
      var t = r(require("./functions/Vec3Func.js"));

      function e() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return e = function() {
              return t
          }, t
      }

      function r(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" != typeof t && "function" != typeof t) return {
              default: t
          };
          var r = e();
          if (r && r.has(t)) return r.get(t);
          var s = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                  var h = i ? Object.getOwnPropertyDescriptor(t, n) : null;
                  h && (h.get || h.set) ? Object.defineProperty(s, n, h) : s[n] = t[n]
              } return s.default = t, r && r.set(t, s), s
      }
      class s extends Array {
          constructor(t = 0, e = t, r = t) {
              return super(t, e, r), this
          }
          get x() {
              return this[0]
          }
          get y() {
              return this[1]
          }
          get z() {
              return this[2]
          }
          set x(t) {
              this[0] = t
          }
          set y(t) {
              this[1] = t
          }
          set z(t) {
              this[2] = t
          }
          set(e, r = e, s = e) {
              return e.length ? this.copy(e) : (t.set(this, e, r, s), this)
          }
          copy(e) {
              return t.copy(this, e), this
          }
          add(e, r) {
              return r ? t.add(this, e, r) : t.add(this, this, e), this
          }
          sub(e, r) {
              return r ? t.subtract(this, e, r) : t.subtract(this, this, e), this
          }
          multiply(e) {
              return e.length ? t.multiply(this, this, e) : t.scale(this, this, e), this
          }
          divide(e) {
              return e.length ? t.divide(this, this, e) : t.scale(this, this, 1 / e), this
          }
          inverse(e = this) {
              return t.inverse(this, e), this
          }
          len() {
              return t.length(this)
          }
          distance(e) {
              return e ? t.distance(this, e) : t.length(this)
          }
          squaredLen() {
              return t.squaredLength(this)
          }
          squaredDistance(e) {
              return e ? t.squaredDistance(this, e) : t.squaredLength(this)
          }
          negate(e = this) {
              return t.negate(this, e), this
          }
          cross(e, r) {
              return r ? t.cross(this, e, r) : t.cross(this, this, e), this
          }
          scale(e) {
              return t.scale(this, this, e), this
          }
          normalize() {
              return t.normalize(this, this), this
          }
          dot(e) {
              return t.dot(this, e)
          }
          equals(e) {
              return t.exactEquals(this, e)
          }
          applyMatrix4(e) {
              return t.transformMat4(this, this, e), this
          }
          scaleRotateMatrix4(e) {
              return t.scaleRotateMat4(this, this, e), this
          }
          applyQuaternion(e) {
              return t.transformQuat(this, this, e), this
          }
          angle(e) {
              return t.angle(this, e)
          }
          lerp(e, r) {
              return t.lerp(this, this, e, r), this
          }
          clone() {
              return new s(this[0], this[1], this[2])
          }
          fromArray(t, e = 0) {
              return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this
          }
          toArray(t = [], e = 0) {
              return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
          }
          transformDirection(t) {
              const e = this[0],
                  r = this[1],
                  s = this[2];
              return this[0] = t[0] * e + t[4] * r + t[8] * s, this[1] = t[1] * e + t[5] * r + t[9] * s, this[2] = t[2] * e + t[6] * r + t[10] * s, this.normalize()
          }
      }
      exports.Vec3 = s;
  }, {
      "./functions/Vec3Func.js": "kjJc"
  }],
  "scsK": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Geometry = void 0;
      var t = require("../math/Vec3.js");
      const e = new t.Vec3;
      let r = 1,
          i = 1,
          s = !1;
      class n {
          constructor(t, e = {}) {
              t.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = t, this.attributes = e, this.id = r++, this.VAOs = {}, this.drawRange = {
                  start: 0,
                  count: 0
              }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
              for (let r in e) this.addAttribute(r, e[r])
          }
          addAttribute(t, e) {
              if (this.attributes[t] = e, e.id = i++, e.size = e.size || 1, e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e.normalized = e.normalized || !1, e.stride = e.stride || 0, e.offset = e.offset || 0, e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size), e.divisor = e.instanced || 0, e.needsUpdate = !1, e.buffer || (e.buffer = this.gl.createBuffer(), this.updateAttribute(e)), e.divisor) {
                  if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== e.count * e.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
                  this.instancedCount = e.count * e.divisor
              } else "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
          }
          updateAttribute(t) {
              this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.buffer), this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW), t.needsUpdate = !1
          }
          setIndex(t) {
              this.addAttribute("index", t)
          }
          setDrawRange(t, e) {
              this.drawRange.start = t, this.drawRange.count = e
          }
          setInstancedCount(t) {
              this.instancedCount = t
          }
          createVAO(t) {
              this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t)
          }
          bindAttributes(t) {
              t.attributeLocations.forEach((t, {
                  name: e,
                  type: r
              }) => {
                  if (!this.attributes[e]) return void console.warn(`active attribute ${e} not being supplied`);
                  const i = this.attributes[e];
                  this.gl.bindBuffer(i.target, i.buffer), this.glState.boundBuffer = i.buffer;
                  let s = 1;
                  35674 === r && (s = 2), 35675 === r && (s = 3), 35676 === r && (s = 4);
                  const n = i.size / s,
                      a = 1 === s ? 0 : s * s * s,
                      d = 1 === s ? 0 : s * s;
                  for (let o = 0; o < s; o++) this.gl.vertexAttribPointer(t + o, n, i.type, i.normalized, i.stride + a, i.offset + o * d), this.gl.enableVertexAttribArray(t + o), this.gl.renderer.vertexAttribDivisor(t + o, i.divisor)
              }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
          }
          draw({
              program: t,
              mode: e = this.gl.TRIANGLES
          }) {
              this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach((t, {
                  name: e
              }) => {
                  const r = this.attributes[e];
                  r.needsUpdate && this.updateAttribute(r)
              }), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.drawRange.start, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
          }
          getPositionArray() {
              const t = this.attributes.position;
              return t.min ? [...t.min, ...t.max] : t.data ? t.data : s ? void 0 : (console.warn("No position buffer data found to compute bounds"), s = !0)
          }
          computeBoundingBox(e) {
              e || (e = this.getPositionArray()), this.bounds || (this.bounds = {
                  min: new t.Vec3,
                  max: new t.Vec3,
                  center: new t.Vec3,
                  scale: new t.Vec3,
                  radius: 1 / 0
              });
              const r = this.bounds.min,
                  i = this.bounds.max,
                  s = this.bounds.center,
                  n = this.bounds.scale;
              r.set(1 / 0), i.set(-1 / 0);
              for (let t = 0, a = e.length; t < a; t += 3) {
                  const s = e[t],
                      n = e[t + 1],
                      a = e[t + 2];
                  r.x = Math.min(s, r.x), r.y = Math.min(n, r.y), r.z = Math.min(a, r.z), i.x = Math.max(s, i.x), i.y = Math.max(n, i.y), i.z = Math.max(a, i.z)
              }
              n.sub(i, r), s.add(r, i).divide(2)
          }
          computeBoundingSphere(t) {
              t || (t = this.getPositionArray()), this.bounds || this.computeBoundingBox(t);
              let r = 0;
              for (let i = 0, s = t.length; i < s; i += 3) e.fromArray(t, i), r = Math.max(r, this.bounds.center.squaredDistance(e));
              this.bounds.radius = Math.sqrt(r)
          }
          remove() {
              this.vao && this.gl.renderer.deleteVertexArray(this.vao);
              for (let t in this.attributes) this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t]
          }
      }
      exports.Geometry = n;
  }, {
      "../math/Vec3.js": "NC5f"
  }],
  "bbEx": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Program = void 0;
      let e = 1;
      const t = {};
      class r {
          constructor(t, {
              vertex: r,
              fragment: n,
              uniforms: i = {},
              transparent: a = !1,
              cullFace: o = t.BACK,
              frontFace: h = t.CCW,
              depthTest: l = !0,
              depthWrite: u = !0,
              depthFunc: c = t.LESS
          } = {}) {
              t.canvas || console.error("gl not passed as fist argument to Program"), this.gl = t, this.uniforms = i, this.id = e++, r || console.warn("vertex shader not supplied"), n || console.warn("fragment shader not supplied"), this.transparent = a, this.cullFace = o, this.frontFace = h, this.depthTest = l, this.depthWrite = u, this.depthFunc = c, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
              const g = t.createShader(t.VERTEX_SHADER);
              t.shaderSource(g, r), t.compileShader(g), "" !== t.getShaderInfoLog(g) && console.warn(`${t.getShaderInfoLog(g)}\nVertex Shader\n${s(r)}`);
              const d = t.createShader(t.FRAGMENT_SHADER);
              if (t.shaderSource(d, n), t.compileShader(d), "" !== t.getShaderInfoLog(d) && console.warn(`${t.getShaderInfoLog(d)}\nFragment Shader\n${s(n)}`), this.program = t.createProgram(), t.attachShader(this.program, g), t.attachShader(this.program, d), t.linkProgram(this.program), !t.getProgramParameter(this.program, t.LINK_STATUS)) return console.warn(t.getProgramInfoLog(this.program));
              t.deleteShader(g), t.deleteShader(d), this.uniformLocations = new Map;
              let m = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
              for (let e = 0; e < m; e++) {
                  let r = t.getActiveUniform(this.program, e);
                  this.uniformLocations.set(r, t.getUniformLocation(this.program, r.name));
                  const n = r.name.match(/(\w+)/g);
                  r.uniformName = n[0], 3 === n.length ? (r.isStructArray = !0, r.structIndex = Number(n[1]), r.structProperty = n[2]) : 2 === n.length && isNaN(Number(n[1])) && (r.isStruct = !0, r.structProperty = n[1])
              }
              this.attributeLocations = new Map;
              const f = [],
                  p = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
              for (let e = 0; e < p; e++) {
                  const r = t.getActiveAttrib(this.program, e),
                      n = t.getAttribLocation(this.program, r.name);
                  f[n] = r.name, this.attributeLocations.set(r, n)
              }
              this.attributeOrder = f.join("")
          }
          setBlendFunc(e, t, r, n) {
              this.blendFunc.src = e, this.blendFunc.dst = t, this.blendFunc.srcAlpha = r, this.blendFunc.dstAlpha = n, e && (this.transparent = !0)
          }
          setBlendEquation(e, t) {
              this.blendEquation.modeRGB = e, this.blendEquation.modeAlpha = t
          }
          applyState() {
              this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.blendEquation.modeRGB && this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
          }
          use({
              flipFaces: e = !1
          } = {}) {
              let t = -1;
              this.gl.renderer.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.currentProgram = this.id), this.uniformLocations.forEach((e, r) => {
                  let s = r.uniformName,
                      i = this.uniforms[s];
                  if (r.isStruct && (i = i[r.structProperty], s += `.${r.structProperty}`), r.isStructArray && (i = i[r.structIndex][r.structProperty], s += `[${r.structIndex}].${r.structProperty}`), !i) return l(`Active uniform ${s} has not been supplied`);
                  if (i && void 0 === i.value) return l(`${s} uniform is missing a value parameter`);
                  if (i.value.texture) return t += 1, i.value.update(t), n(this.gl, r.type, e, t);
                  if (i.value.length && i.value[0].texture) {
                      const s = [];
                      return i.value.forEach(e => {
                          t += 1, e.update(t), s.push(t)
                      }), n(this.gl, r.type, e, s)
                  }
                  n(this.gl, r.type, e, i.value)
              }), this.applyState(), e && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
          }
          remove() {
              this.gl.deleteProgram(this.program)
          }
      }

      function n(e, t, r, n) {
          n = n.length ? i(n) : n;
          const s = e.renderer.state.uniformLocations.get(r);
          if (n.length)
              if (void 0 === s || s.length !== n.length) e.renderer.state.uniformLocations.set(r, n.slice(0));
              else {
                  if (a(s, n)) return;
                  s.set ? s.set(n) : o(s, n), e.renderer.state.uniformLocations.set(r, s)
              }
          else {
              if (s === n) return;
              e.renderer.state.uniformLocations.set(r, n)
          }
          switch (t) {
              case 5126:
                  return n.length ? e.uniform1fv(r, n) : e.uniform1f(r, n);
              case 35664:
                  return e.uniform2fv(r, n);
              case 35665:
                  return e.uniform3fv(r, n);
              case 35666:
                  return e.uniform4fv(r, n);
              case 35670:
              case 5124:
              case 35678:
              case 35680:
                  return n.length ? e.uniform1iv(r, n) : e.uniform1i(r, n);
              case 35671:
              case 35667:
                  return e.uniform2iv(r, n);
              case 35672:
              case 35668:
                  return e.uniform3iv(r, n);
              case 35673:
              case 35669:
                  return e.uniform4iv(r, n);
              case 35674:
                  return e.uniformMatrix2fv(r, !1, n);
              case 35675:
                  return e.uniformMatrix3fv(r, !1, n);
              case 35676:
                  return e.uniformMatrix4fv(r, !1, n)
          }
      }

      function s(e) {
          let t = e.split("\n");
          for (let r = 0; r < t.length; r++) t[r] = r + 1 + ": " + t[r];
          return t.join("\n")
      }

      function i(e) {
          const r = e.length,
              n = e[0].length;
          if (void 0 === n) return e;
          const s = r * n;
          let i = t[s];
          i || (t[s] = i = new Float32Array(s));
          for (let t = 0; t < r; t++) i.set(e[t], t * n);
          return i
      }

      function a(e, t) {
          if (e.length !== t.length) return !1;
          for (let r = 0, n = e.length; r < n; r++)
              if (e[r] !== t[r]) return !1;
          return !0
      }

      function o(e, t) {
          for (let r = 0, n = e.length; r < n; r++) e[r] = t[r]
      }
      exports.Program = r;
      let h = 0;

      function l(e) {
          h > 100 || (console.warn(e), ++h > 100 && console.warn("More than 100 program warnings - stopping logs."))
      }
  }, {}],
  "jjF1": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Renderer = void 0;
      var t = require("../math/Vec3.js");
      const e = new t.Vec3;
      let s = 1;
      class r {
          constructor({
              canvas: t = document.createElement("canvas"),
              width: e = 300,
              height: r = 150,
              dpr: i = 1,
              alpha: a = !1,
              depth: h = !0,
              stencil: n = !1,
              antialias: l = !1,
              premultipliedAlpha: d = !1,
              preserveDrawingBuffer: o = !1,
              powerPreference: u = "default",
              autoClear: p = !0,
              webgl: c = 2
          } = {}) {
              const g = {
                  alpha: a,
                  depth: h,
                  stencil: n,
                  antialias: l,
                  premultipliedAlpha: d,
                  preserveDrawingBuffer: o,
                  powerPreference: u
              };
              this.dpr = i, this.alpha = a, this.color = !0, this.depth = h, this.stencil = n, this.premultipliedAlpha = d, this.autoClear = p, this.id = s++, 2 === c && (this.gl = t.getContext("webgl2", g)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", g) || t.getContext("experimental-webgl", g)), this.gl.renderer = this, this.setSize(e, r), this.state = {}, this.state.blendFunc = {
                  src: this.gl.ONE,
                  dst: this.gl.ZERO
              }, this.state.blendEquation = {
                  modeRGB: this.gl.FUNC_ADD
              }, this.state.cullFace = null, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
                  width: null,
                  height: null
              }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
          }
          setSize(t, e) {
              this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = e * this.dpr, Object.assign(this.gl.canvas.style, {
                  width: t + "px",
                  height: e + "px"
              })
          }
          setViewport(t, e) {
              this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t, this.state.viewport.height = e, this.gl.viewport(0, 0, t, e))
          }
          enable(t) {
              !0 !== this.state[t] && (this.gl.enable(t), this.state[t] = !0)
          }
          disable(t) {
              !1 !== this.state[t] && (this.gl.disable(t), this.state[t] = !1)
          }
          setBlendFunc(t, e, s, r) {
              this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === s && this.state.blendFunc.dstAlpha === r || (this.state.blendFunc.src = t, this.state.blendFunc.dst = e, this.state.blendFunc.srcAlpha = s, this.state.blendFunc.dstAlpha = r, void 0 !== s ? this.gl.blendFuncSeparate(t, e, s, r) : this.gl.blendFunc(t, e))
          }
          setBlendEquation(t, e) {
              this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e || (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = e, void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
          }
          setCullFace(t) {
              this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t))
          }
          setFrontFace(t) {
              this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t))
          }
          setDepthMask(t) {
              this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t))
          }
          setDepthFunc(t) {
              this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t))
          }
          activeTexture(t) {
              this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t))
          }
          bindFramebuffer({
              target: t = this.gl.FRAMEBUFFER,
              buffer: e = null
          } = {}) {
              this.state.framebuffer !== e && (this.state.framebuffer = e, this.gl.bindFramebuffer(t, e))
          }
          getExtension(t, e, s) {
              return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? this.extensions[t] ? this.extensions[t][s].bind(this.extensions[t]) : null : this.extensions[t])
          }
          sortOpaque(t, e) {
              return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
          }
          sortTransparent(t, e) {
              return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
          }
          sortUI(t, e) {
              return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
          }
          getRenderList({
              scene: t,
              camera: s,
              frustumCull: r,
              sort: i
          }) {
              let a = [];
              if (s && r && s.updateFrustum(), t.traverse(t => {
                      if (!t.visible) return !0;
                      t.draw && (r && t.frustumCulled && s && !s.frustumIntersectsMesh(t) || a.push(t))
                  }), i) {
                  const t = [],
                      r = [],
                      i = [];
                  a.forEach(a => {
                      a.program.transparent ? a.program.depthTest ? r.push(a) : i.push(a) : t.push(a), a.zDepth = 0, 0 === a.renderOrder && a.program.depthTest && s && (a.worldMatrix.getTranslation(e), e.applyMatrix4(s.projectionViewMatrix), a.zDepth = e.z)
                  }), t.sort(this.sortOpaque), r.sort(this.sortTransparent), i.sort(this.sortUI), a = t.concat(r, i)
              }
              return a
          }
          render({
              scene: t,
              camera: e,
              target: s = null,
              update: r = !0,
              sort: i = !0,
              frustumCull: a = !0,
              clear: h
          }) {
              null === s ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(s), this.setViewport(s.width, s.height)), (h || this.autoClear && !1 !== h) && (!this.depth || s && !s.depth || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), r && t.updateMatrixWorld(), e && e.updateMatrixWorld(), this.getRenderList({
                  scene: t,
                  camera: e,
                  frustumCull: a,
                  sort: i
              }).forEach(t => {
                  t.draw({
                      camera: e
                  })
              })
          }
      }
      exports.Renderer = r;
  }, {
      "../math/Vec3.js": "NC5f"
  }],
  "B22p": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.copy = e, exports.set = r, exports.add = n, exports.scale = o, exports.length = u, exports.normalize = s, exports.dot = c, exports.lerp = p;
      const t = 1e-6;

      function e(t, e) {
          return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
      }

      function r(t, e, r, n, o) {
          return t[0] = e, t[1] = r, t[2] = n, t[3] = o, t
      }

      function n(t, e, r) {
          return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t[2] = e[2] + r[2], t[3] = e[3] + r[3], t
      }

      function o(t, e, r) {
          return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t
      }

      function u(t) {
          let e = t[0],
              r = t[1],
              n = t[2],
              o = t[3];
          return Math.sqrt(e * e + r * r + n * n + o * o)
      }

      function s(t, e) {
          let r = e[0],
              n = e[1],
              o = e[2],
              u = e[3],
              s = r * r + n * n + o * o + u * u;
          return s > 0 && (s = 1 / Math.sqrt(s)), t[0] = r * s, t[1] = n * s, t[2] = o * s, t[3] = u * s, t
      }

      function c(t, e) {
          return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
      }

      function p(t, e, r, n) {
          let o = e[0],
              u = e[1],
              s = e[2],
              c = e[3];
          return t[0] = o + n * (r[0] - o), t[1] = u + n * (r[1] - u), t[2] = s + n * (r[2] - s), t[3] = c + n * (r[3] - c), t
      }
  }, {}],
  "FkSU": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.identity = o, exports.setAxisAngle = n, exports.multiply = s, exports.rotateX = c, exports.rotateY = a, exports.rotateZ = p, exports.slerp = i, exports.invert = u, exports.conjugate = l, exports.fromMat3 = f, exports.fromEuler = x, exports.normalize = exports.length = exports.lerp = exports.dot = exports.scale = exports.add = exports.set = exports.copy = void 0;
      var t = r(require("./Vec4Func.js"));

      function e() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return e = function() {
              return t
          }, t
      }

      function r(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" != typeof t && "function" != typeof t) return {
              default: t
          };
          var r = e();
          if (r && r.has(t)) return r.get(t);
          var o = {},
              n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
              if (Object.prototype.hasOwnProperty.call(t, s)) {
                  var c = n ? Object.getOwnPropertyDescriptor(t, s) : null;
                  c && (c.get || c.set) ? Object.defineProperty(o, s, c) : o[s] = t[s]
              } return o.default = t, r && r.set(t, o), o
      }

      function o(t) {
          return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
      }

      function n(t, e, r) {
          r *= .5;
          let o = Math.sin(r);
          return t[0] = o * e[0], t[1] = o * e[1], t[2] = o * e[2], t[3] = Math.cos(r), t
      }

      function s(t, e, r) {
          let o = e[0],
              n = e[1],
              s = e[2],
              c = e[3],
              a = r[0],
              p = r[1],
              i = r[2],
              u = r[3];
          return t[0] = o * u + c * a + n * i - s * p, t[1] = n * u + c * p + s * a - o * i, t[2] = s * u + c * i + o * p - n * a, t[3] = c * u - o * a - n * p - s * i, t
      }

      function c(t, e, r) {
          r *= .5;
          let o = e[0],
              n = e[1],
              s = e[2],
              c = e[3],
              a = Math.sin(r),
              p = Math.cos(r);
          return t[0] = o * p + c * a, t[1] = n * p + s * a, t[2] = s * p - n * a, t[3] = c * p - o * a, t
      }

      function a(t, e, r) {
          r *= .5;
          let o = e[0],
              n = e[1],
              s = e[2],
              c = e[3],
              a = Math.sin(r),
              p = Math.cos(r);
          return t[0] = o * p - s * a, t[1] = n * p + c * a, t[2] = s * p + o * a, t[3] = c * p - n * a, t
      }

      function p(t, e, r) {
          r *= .5;
          let o = e[0],
              n = e[1],
              s = e[2],
              c = e[3],
              a = Math.sin(r),
              p = Math.cos(r);
          return t[0] = o * p + n * a, t[1] = n * p - o * a, t[2] = s * p + c * a, t[3] = c * p - s * a, t
      }

      function i(t, e, r, o) {
          let n, s, c, a, p, i = e[0],
              u = e[1],
              l = e[2],
              f = e[3],
              x = r[0],
              h = r[1],
              M = r[2],
              d = r[3];
          return (s = i * x + u * h + l * M + f * d) < 0 && (s = -s, x = -x, h = -h, M = -M, d = -d), 1 - s > 1e-6 ? (n = Math.acos(s), c = Math.sin(n), a = Math.sin((1 - o) * n) / c, p = Math.sin(o * n) / c) : (a = 1 - o, p = o), t[0] = a * i + p * x, t[1] = a * u + p * h, t[2] = a * l + p * M, t[3] = a * f + p * d, t
      }

      function u(t, e) {
          let r = e[0],
              o = e[1],
              n = e[2],
              s = e[3],
              c = r * r + o * o + n * n + s * s,
              a = c ? 1 / c : 0;
          return t[0] = -r * a, t[1] = -o * a, t[2] = -n * a, t[3] = s * a, t
      }

      function l(t, e) {
          return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t
      }

      function f(t, e) {
          let r, o = e[0] + e[4] + e[8];
          if (o > 0) r = Math.sqrt(o + 1), t[3] = .5 * r, r = .5 / r, t[0] = (e[5] - e[7]) * r, t[1] = (e[6] - e[2]) * r, t[2] = (e[1] - e[3]) * r;
          else {
              let o = 0;
              e[4] > e[0] && (o = 1), e[8] > e[3 * o + o] && (o = 2);
              let n = (o + 1) % 3,
                  s = (o + 2) % 3;
              r = Math.sqrt(e[3 * o + o] - e[3 * n + n] - e[3 * s + s] + 1), t[o] = .5 * r, r = .5 / r, t[3] = (e[3 * n + s] - e[3 * s + n]) * r, t[n] = (e[3 * n + o] + e[3 * o + n]) * r, t[s] = (e[3 * s + o] + e[3 * o + s]) * r
          }
          return t
      }

      function x(t, e, r = "YXZ") {
          let o = Math.sin(.5 * e[0]),
              n = Math.cos(.5 * e[0]),
              s = Math.sin(.5 * e[1]),
              c = Math.cos(.5 * e[1]),
              a = Math.sin(.5 * e[2]),
              p = Math.cos(.5 * e[2]);
          return "XYZ" === r ? (t[0] = o * c * p + n * s * a, t[1] = n * s * p - o * c * a, t[2] = n * c * a + o * s * p, t[3] = n * c * p - o * s * a) : "YXZ" === r ? (t[0] = o * c * p + n * s * a, t[1] = n * s * p - o * c * a, t[2] = n * c * a - o * s * p, t[3] = n * c * p + o * s * a) : "ZXY" === r ? (t[0] = o * c * p - n * s * a, t[1] = n * s * p + o * c * a, t[2] = n * c * a + o * s * p, t[3] = n * c * p - o * s * a) : "ZYX" === r ? (t[0] = o * c * p - n * s * a, t[1] = n * s * p + o * c * a, t[2] = n * c * a - o * s * p, t[3] = n * c * p + o * s * a) : "YZX" === r ? (t[0] = o * c * p + n * s * a, t[1] = n * s * p + o * c * a, t[2] = n * c * a - o * s * p, t[3] = n * c * p - o * s * a) : "XZY" === r && (t[0] = o * c * p - n * s * a, t[1] = n * s * p - o * c * a, t[2] = n * c * a + o * s * p, t[3] = n * c * p + o * s * a), t
      }
      const h = t.copy;
      exports.copy = h;
      const M = t.set;
      exports.set = M;
      const d = t.add;
      exports.add = d;
      const y = t.scale;
      exports.scale = y;
      const g = t.dot;
      exports.dot = g;
      const j = t.lerp;
      exports.lerp = j;
      const v = t.length;
      exports.length = v;
      const O = t.normalize;
      exports.normalize = O;
  }, {
      "./Vec4Func.js": "B22p"
  }],
  "uHNF": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Quat = void 0;
      var t = r(require("./functions/QuatFunc.js"));

      function e() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return e = function() {
              return t
          }, t
      }

      function r(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" != typeof t && "function" != typeof t) return {
              default: t
          };
          var r = e();
          if (r && r.has(t)) return r.get(t);
          var i = {},
              s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                  var h = s ? Object.getOwnPropertyDescriptor(t, n) : null;
                  h && (h.get || h.set) ? Object.defineProperty(i, n, h) : i[n] = t[n]
              } return i.default = t, r && r.set(t, i), i
      }
      class i extends Array {
          constructor(t = 0, e = 0, r = 0, i = 1) {
              return super(t, e, r, i), this.onChange = (() => {}), this
          }
          get x() {
              return this[0]
          }
          get y() {
              return this[1]
          }
          get z() {
              return this[2]
          }
          get w() {
              return this[3]
          }
          set x(t) {
              this[0] = t, this.onChange()
          }
          set y(t) {
              this[1] = t, this.onChange()
          }
          set z(t) {
              this[2] = t, this.onChange()
          }
          set w(t) {
              this[3] = t, this.onChange()
          }
          identity() {
              return t.identity(this), this.onChange(), this
          }
          set(e, r, i, s) {
              return e.length ? this.copy(e) : (t.set(this, e, r, i, s), this.onChange(), this)
          }
          rotateX(e) {
              return t.rotateX(this, this, e), this.onChange(), this
          }
          rotateY(e) {
              return t.rotateY(this, this, e), this.onChange(), this
          }
          rotateZ(e) {
              return t.rotateZ(this, this, e), this.onChange(), this
          }
          inverse(e = this) {
              return t.invert(this, e), this.onChange(), this
          }
          conjugate(e = this) {
              return t.conjugate(this, e), this.onChange(), this
          }
          copy(e) {
              return t.copy(this, e), this.onChange(), this
          }
          normalize(e = this) {
              return t.normalize(this, e), this.onChange(), this
          }
          multiply(e, r) {
              return r ? t.multiply(this, e, r) : t.multiply(this, this, e), this.onChange(), this
          }
          dot(e) {
              return t.dot(this, e)
          }
          fromMatrix3(e) {
              return t.fromMat3(this, e), this.onChange(), this
          }
          fromEuler(e) {
              return t.fromEuler(this, e, e.order), this
          }
          fromAxisAngle(e, r) {
              return t.setAxisAngle(this, e, r), this
          }
          slerp(e, r) {
              return t.slerp(this, this, e, r), this
          }
          fromArray(t, e = 0) {
              return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this
          }
          toArray(t = [], e = 0) {
              return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
          }
      }
      exports.Quat = i;
  }, {
      "./functions/QuatFunc.js": "FkSU"
  }],
  "WBWe": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.copy = e, exports.set = r, exports.identity = n, exports.transpose = o, exports.invert = u, exports.determinant = s, exports.multiply = a, exports.translate = i, exports.scale = c, exports.rotate = l, exports.getTranslation = p, exports.getScaling = f, exports.getMaxScaleOnAxis = x, exports.fromRotationTranslationScale = M, exports.fromQuat = y, exports.perspective = d, exports.ortho = g, exports.targetTo = q, exports.add = m, exports.subtract = v, exports.multiplyScalar = S, exports.getRotation = void 0;
      const t = 1e-6;

      function e(t, e) {
          return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
      }

      function r(t, e, r, n, o, u, s, a, i, c, l, p, f, x, h, M, y) {
          return t[0] = e, t[1] = r, t[2] = n, t[3] = o, t[4] = u, t[5] = s, t[6] = a, t[7] = i, t[8] = c, t[9] = l, t[10] = p, t[11] = f, t[12] = x, t[13] = h, t[14] = M, t[15] = y, t
      }

      function n(t) {
          return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      }

      function o(t, e) {
          if (t === e) {
              let r = e[1],
                  n = e[2],
                  o = e[3],
                  u = e[6],
                  s = e[7],
                  a = e[11];
              t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = r, t[6] = e[9], t[7] = e[13], t[8] = n, t[9] = u, t[11] = e[14], t[12] = o, t[13] = s, t[14] = a
          } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
          return t
      }

      function u(t, e) {
          let r = e[0],
              n = e[1],
              o = e[2],
              u = e[3],
              s = e[4],
              a = e[5],
              i = e[6],
              c = e[7],
              l = e[8],
              p = e[9],
              f = e[10],
              x = e[11],
              h = e[12],
              M = e[13],
              y = e[14],
              d = e[15],
              g = r * a - n * s,
              q = r * i - o * s,
              m = r * c - u * s,
              v = n * i - o * a,
              S = n * c - u * a,
              b = o * c - u * i,
              R = l * M - p * h,
              T = l * y - f * h,
              O = l * d - x * h,
              _ = p * y - f * M,
              j = p * d - x * M,
              A = f * d - x * y,
              P = g * A - q * j + m * _ + v * O - S * T + b * R;
          return P ? (P = 1 / P, t[0] = (a * A - i * j + c * _) * P, t[1] = (o * j - n * A - u * _) * P, t[2] = (M * b - y * S + d * v) * P, t[3] = (f * S - p * b - x * v) * P, t[4] = (i * O - s * A - c * T) * P, t[5] = (r * A - o * O + u * T) * P, t[6] = (y * m - h * b - d * q) * P, t[7] = (l * b - f * m + x * q) * P, t[8] = (s * j - a * O + c * R) * P, t[9] = (n * O - r * j - u * R) * P, t[10] = (h * S - M * m + d * g) * P, t[11] = (p * m - l * S - x * g) * P, t[12] = (a * T - s * _ - i * R) * P, t[13] = (r * _ - n * T + o * R) * P, t[14] = (M * q - h * v - y * g) * P, t[15] = (l * v - p * q + f * g) * P, t) : null
      }

      function s(t) {
          let e = t[0],
              r = t[1],
              n = t[2],
              o = t[3],
              u = t[4],
              s = t[5],
              a = t[6],
              i = t[7],
              c = t[8],
              l = t[9],
              p = t[10],
              f = t[11],
              x = t[12],
              h = t[13],
              M = t[14],
              y = t[15];
          return (e * s - r * u) * (p * y - f * M) - (e * a - n * u) * (l * y - f * h) + (e * i - o * u) * (l * M - p * h) + (r * a - n * s) * (c * y - f * x) - (r * i - o * s) * (c * M - p * x) + (n * i - o * a) * (c * h - l * x)
      }

      function a(t, e, r) {
          let n = e[0],
              o = e[1],
              u = e[2],
              s = e[3],
              a = e[4],
              i = e[5],
              c = e[6],
              l = e[7],
              p = e[8],
              f = e[9],
              x = e[10],
              h = e[11],
              M = e[12],
              y = e[13],
              d = e[14],
              g = e[15],
              q = r[0],
              m = r[1],
              v = r[2],
              S = r[3];
          return t[0] = q * n + m * a + v * p + S * M, t[1] = q * o + m * i + v * f + S * y, t[2] = q * u + m * c + v * x + S * d, t[3] = q * s + m * l + v * h + S * g, q = r[4], m = r[5], v = r[6], S = r[7], t[4] = q * n + m * a + v * p + S * M, t[5] = q * o + m * i + v * f + S * y, t[6] = q * u + m * c + v * x + S * d, t[7] = q * s + m * l + v * h + S * g, q = r[8], m = r[9], v = r[10], S = r[11], t[8] = q * n + m * a + v * p + S * M, t[9] = q * o + m * i + v * f + S * y, t[10] = q * u + m * c + v * x + S * d, t[11] = q * s + m * l + v * h + S * g, q = r[12], m = r[13], v = r[14], S = r[15], t[12] = q * n + m * a + v * p + S * M, t[13] = q * o + m * i + v * f + S * y, t[14] = q * u + m * c + v * x + S * d, t[15] = q * s + m * l + v * h + S * g, t
      }

      function i(t, e, r) {
          let n, o, u, s, a, i, c, l, p, f, x, h, M = r[0],
              y = r[1],
              d = r[2];
          return e === t ? (t[12] = e[0] * M + e[4] * y + e[8] * d + e[12], t[13] = e[1] * M + e[5] * y + e[9] * d + e[13], t[14] = e[2] * M + e[6] * y + e[10] * d + e[14], t[15] = e[3] * M + e[7] * y + e[11] * d + e[15]) : (n = e[0], o = e[1], u = e[2], s = e[3], a = e[4], i = e[5], c = e[6], l = e[7], p = e[8], f = e[9], x = e[10], h = e[11], t[0] = n, t[1] = o, t[2] = u, t[3] = s, t[4] = a, t[5] = i, t[6] = c, t[7] = l, t[8] = p, t[9] = f, t[10] = x, t[11] = h, t[12] = n * M + a * y + p * d + e[12], t[13] = o * M + i * y + f * d + e[13], t[14] = u * M + c * y + x * d + e[14], t[15] = s * M + l * y + h * d + e[15]), t
      }

      function c(t, e, r) {
          let n = r[0],
              o = r[1],
              u = r[2];
          return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * o, t[5] = e[5] * o, t[6] = e[6] * o, t[7] = e[7] * o, t[8] = e[8] * u, t[9] = e[9] * u, t[10] = e[10] * u, t[11] = e[11] * u, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
      }

      function l(e, r, n, o) {
          let u, s, a, i, c, l, p, f, x, h, M, y, d, g, q, m, v, S, b, R, T, O, _, j, A = o[0],
              P = o[1],
              Q = o[2],
              k = Math.hypot(A, P, Q);
          return Math.abs(k) < t ? null : (A *= k = 1 / k, P *= k, Q *= k, u = Math.sin(n), a = 1 - (s = Math.cos(n)), i = r[0], c = r[1], l = r[2], p = r[3], f = r[4], x = r[5], h = r[6], M = r[7], y = r[8], d = r[9], g = r[10], q = r[11], m = A * A * a + s, v = P * A * a + Q * u, S = Q * A * a - P * u, b = A * P * a - Q * u, R = P * P * a + s, T = Q * P * a + A * u, O = A * Q * a + P * u, _ = P * Q * a - A * u, j = Q * Q * a + s, e[0] = i * m + f * v + y * S, e[1] = c * m + x * v + d * S, e[2] = l * m + h * v + g * S, e[3] = p * m + M * v + q * S, e[4] = i * b + f * R + y * T, e[5] = c * b + x * R + d * T, e[6] = l * b + h * R + g * T, e[7] = p * b + M * R + q * T, e[8] = i * O + f * _ + y * j, e[9] = c * O + x * _ + d * j, e[10] = l * O + h * _ + g * j, e[11] = p * O + M * _ + q * j, r !== e && (e[12] = r[12], e[13] = r[13], e[14] = r[14], e[15] = r[15]), e)
      }

      function p(t, e) {
          return t[0] = e[12], t[1] = e[13], t[2] = e[14], t
      }

      function f(t, e) {
          let r = e[0],
              n = e[1],
              o = e[2],
              u = e[4],
              s = e[5],
              a = e[6],
              i = e[8],
              c = e[9],
              l = e[10];
          return t[0] = Math.hypot(r, n, o), t[1] = Math.hypot(u, s, a), t[2] = Math.hypot(i, c, l), t
      }

      function x(t) {
          let e = t[0],
              r = t[1],
              n = t[2],
              o = t[4],
              u = t[5],
              s = t[6],
              a = t[8],
              i = t[9],
              c = t[10];
          const l = e * e + r * r + n * n,
              p = o * o + u * u + s * s,
              f = a * a + i * i + c * c;
          return Math.sqrt(Math.max(l, p, f))
      }
      const h = function() {
          const t = [0, 0, 0];
          return function(e, r) {
              let n = t;
              f(n, r);
              let o = 1 / n[0],
                  u = 1 / n[1],
                  s = 1 / n[2],
                  a = r[0] * o,
                  i = r[1] * u,
                  c = r[2] * s,
                  l = r[4] * o,
                  p = r[5] * u,
                  x = r[6] * s,
                  h = r[8] * o,
                  M = r[9] * u,
                  y = r[10] * s,
                  d = a + p + y,
                  g = 0;
              return d > 0 ? (g = 2 * Math.sqrt(d + 1), e[3] = .25 * g, e[0] = (x - M) / g, e[1] = (h - c) / g, e[2] = (i - l) / g) : a > p && a > y ? (g = 2 * Math.sqrt(1 + a - p - y), e[3] = (x - M) / g, e[0] = .25 * g, e[1] = (i + l) / g, e[2] = (h + c) / g) : p > y ? (g = 2 * Math.sqrt(1 + p - a - y), e[3] = (h - c) / g, e[0] = (i + l) / g, e[1] = .25 * g, e[2] = (x + M) / g) : (g = 2 * Math.sqrt(1 + y - a - p), e[3] = (i - l) / g, e[0] = (h + c) / g, e[1] = (x + M) / g, e[2] = .25 * g), e
          }
      }();

      function M(t, e, r, n) {
          let o = e[0],
              u = e[1],
              s = e[2],
              a = e[3],
              i = o + o,
              c = u + u,
              l = s + s,
              p = o * i,
              f = o * c,
              x = o * l,
              h = u * c,
              M = u * l,
              y = s * l,
              d = a * i,
              g = a * c,
              q = a * l,
              m = n[0],
              v = n[1],
              S = n[2];
          return t[0] = (1 - (h + y)) * m, t[1] = (f + q) * m, t[2] = (x - g) * m, t[3] = 0, t[4] = (f - q) * v, t[5] = (1 - (p + y)) * v, t[6] = (M + d) * v, t[7] = 0, t[8] = (x + g) * S, t[9] = (M - d) * S, t[10] = (1 - (p + h)) * S, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t
      }

      function y(t, e) {
          let r = e[0],
              n = e[1],
              o = e[2],
              u = e[3],
              s = r + r,
              a = n + n,
              i = o + o,
              c = r * s,
              l = n * s,
              p = n * a,
              f = o * s,
              x = o * a,
              h = o * i,
              M = u * s,
              y = u * a,
              d = u * i;
          return t[0] = 1 - p - h, t[1] = l + d, t[2] = f - y, t[3] = 0, t[4] = l - d, t[5] = 1 - c - h, t[6] = x + M, t[7] = 0, t[8] = f + y, t[9] = x - M, t[10] = 1 - c - p, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      }

      function d(t, e, r, n, o) {
          let u = 1 / Math.tan(e / 2),
              s = 1 / (n - o);
          return t[0] = u / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (o + n) * s, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * o * n * s, t[15] = 0, t
      }

      function g(t, e, r, n, o, u, s) {
          let a = 1 / (e - r),
              i = 1 / (n - o),
              c = 1 / (u - s);
          return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * i, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * c, t[11] = 0, t[12] = (e + r) * a, t[13] = (o + n) * i, t[14] = (s + u) * c, t[15] = 1, t
      }

      function q(t, e, r, n) {
          let o = e[0],
              u = e[1],
              s = e[2],
              a = n[0],
              i = n[1],
              c = n[2],
              l = o - r[0],
              p = u - r[1],
              f = s - r[2],
              x = l * l + p * p + f * f;
          0 === x ? f = 1 : (l *= x = 1 / Math.sqrt(x), p *= x, f *= x);
          let h = i * f - c * p,
              M = c * l - a * f,
              y = a * p - i * l;
          return 0 === (x = h * h + M * M + y * y) && (c ? a += 1e-6 : i ? c += 1e-6 : i += 1e-6, x = (h = i * f - c * p) * h + (M = c * l - a * f) * M + (y = a * p - i * l) * y), h *= x = 1 / Math.sqrt(x), M *= x, y *= x, t[0] = h, t[1] = M, t[2] = y, t[3] = 0, t[4] = p * y - f * M, t[5] = f * h - l * y, t[6] = l * M - p * h, t[7] = 0, t[8] = l, t[9] = p, t[10] = f, t[11] = 0, t[12] = o, t[13] = u, t[14] = s, t[15] = 1, t
      }

      function m(t, e, r) {
          return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t[2] = e[2] + r[2], t[3] = e[3] + r[3], t[4] = e[4] + r[4], t[5] = e[5] + r[5], t[6] = e[6] + r[6], t[7] = e[7] + r[7], t[8] = e[8] + r[8], t[9] = e[9] + r[9], t[10] = e[10] + r[10], t[11] = e[11] + r[11], t[12] = e[12] + r[12], t[13] = e[13] + r[13], t[14] = e[14] + r[14], t[15] = e[15] + r[15], t
      }

      function v(t, e, r) {
          return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t[2] = e[2] - r[2], t[3] = e[3] - r[3], t[4] = e[4] - r[4], t[5] = e[5] - r[5], t[6] = e[6] - r[6], t[7] = e[7] - r[7], t[8] = e[8] - r[8], t[9] = e[9] - r[9], t[10] = e[10] - r[10], t[11] = e[11] - r[11], t[12] = e[12] - r[12], t[13] = e[13] - r[13], t[14] = e[14] - r[14], t[15] = e[15] - r[15], t
      }

      function S(t, e, r) {
          return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * r, t[9] = e[9] * r, t[10] = e[10] * r, t[11] = e[11] * r, t[12] = e[12] * r, t[13] = e[13] * r, t[14] = e[14] * r, t[15] = e[15] * r, t
      }
      exports.getRotation = h;
  }, {}],
  "M3g6": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Mat4 = void 0;
      var t = i(require("./functions/Mat4Func.js"));

      function e() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return e = function() {
              return t
          }, t
      }

      function i(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" != typeof t && "function" != typeof t) return {
              default: t
          };
          var i = e();
          if (i && i.has(t)) return i.get(t);
          var r = {},
              s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var h in t)
              if (Object.prototype.hasOwnProperty.call(t, h)) {
                  var n = s ? Object.getOwnPropertyDescriptor(t, h) : null;
                  n && (n.get || n.set) ? Object.defineProperty(r, h, n) : r[h] = t[h]
              } return r.default = t, i && i.set(t, r), r
      }
      class r extends Array {
          constructor(t = 1, e = 0, i = 0, r = 0, s = 0, h = 1, n = 0, o = 0, a = 0, u = 0, l = 1, c = 0, p = 0, f = 0, y = 0, g = 1) {
              return super(t, e, i, r, s, h, n, o, a, u, l, c, p, f, y, g), this
          }
          get x() {
              return this[12]
          }
          get y() {
              return this[13]
          }
          get z() {
              return this[14]
          }
          get w() {
              return this[15]
          }
          set x(t) {
              this[12] = t
          }
          set y(t) {
              this[13] = t
          }
          set z(t) {
              this[14] = t
          }
          set w(t) {
              this[15] = t
          }
          set(e, i, r, s, h, n, o, a, u, l, c, p, f, y, g, m) {
              return e.length ? this.copy(e) : (t.set(this, e, i, r, s, h, n, o, a, u, l, c, p, f, y, g, m), this)
          }
          translate(e, i = this) {
              return t.translate(this, i, e), this
          }
          rotate(e, i, r = this) {
              return t.rotate(this, r, e, i), this
          }
          scale(e, i = this) {
              return t.scale(this, i, "number" == typeof e ? [e, e, e] : e), this
          }
          multiply(e, i) {
              return i ? t.multiply(this, e, i) : t.multiply(this, this, e), this
          }
          identity() {
              return t.identity(this), this
          }
          copy(e) {
              return t.copy(this, e), this
          }
          fromPerspective({
              fov: e,
              aspect: i,
              near: r,
              far: s
          } = {}) {
              return t.perspective(this, e, i, r, s), this
          }
          fromOrthogonal({
              left: e,
              right: i,
              bottom: r,
              top: s,
              near: h,
              far: n
          }) {
              return t.ortho(this, e, i, r, s, h, n), this
          }
          fromQuaternion(e) {
              return t.fromQuat(this, e), this
          }
          setPosition(t) {
              return this.x = t[0], this.y = t[1], this.z = t[2], this
          }
          inverse(e = this) {
              return t.invert(this, e), this
          }
          compose(e, i, r) {
              return t.fromRotationTranslationScale(this, e, i, r), this
          }
          getRotation(e) {
              return t.getRotation(e, this), this
          }
          getTranslation(e) {
              return t.getTranslation(e, this), this
          }
          getScaling(e) {
              return t.getScaling(e, this), this
          }
          getMaxScaleOnAxis() {
              return t.getMaxScaleOnAxis(this)
          }
          lookAt(e, i, r) {
              return t.targetTo(this, e, i, r), this
          }
          determinant() {
              return t.determinant(this)
          }
          fromArray(t, e = 0) {
              return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this[4] = t[e + 4], this[5] = t[e + 5], this[6] = t[e + 6], this[7] = t[e + 7], this[8] = t[e + 8], this[9] = t[e + 9], this[10] = t[e + 10], this[11] = t[e + 11], this[12] = t[e + 12], this[13] = t[e + 13], this[14] = t[e + 14], this[15] = t[e + 15], this
          }
          toArray(t = [], e = 0) {
              return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t[e + 4] = this[4], t[e + 5] = this[5], t[e + 6] = this[6], t[e + 7] = this[7], t[e + 8] = this[8], t[e + 9] = this[9], t[e + 10] = this[10], t[e + 11] = this[11], t[e + 12] = this[12], t[e + 13] = this[13], t[e + 14] = this[14], t[e + 15] = this[15], t
          }
      }
      exports.Mat4 = r;
  }, {
      "./functions/Mat4Func.js": "WBWe"
  }],
  "ALUj": [function(require, module, exports) {
      "use strict";

      function a(a, t, M = "YXZ") {
          return "XYZ" === M ? (a[1] = Math.asin(Math.min(Math.max(t[8], -1), 1)), Math.abs(t[8]) < .99999 ? (a[0] = Math.atan2(-t[9], t[10]), a[2] = Math.atan2(-t[4], t[0])) : (a[0] = Math.atan2(t[6], t[5]), a[2] = 0)) : "YXZ" === M ? (a[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1)), Math.abs(t[9]) < .99999 ? (a[1] = Math.atan2(t[8], t[10]), a[2] = Math.atan2(t[1], t[5])) : (a[1] = Math.atan2(-t[2], t[0]), a[2] = 0)) : "ZXY" === M ? (a[0] = Math.asin(Math.min(Math.max(t[6], -1), 1)), Math.abs(t[6]) < .99999 ? (a[1] = Math.atan2(-t[2], t[10]), a[2] = Math.atan2(-t[4], t[5])) : (a[1] = 0, a[2] = Math.atan2(t[1], t[0]))) : "ZYX" === M ? (a[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1)), Math.abs(t[2]) < .99999 ? (a[0] = Math.atan2(t[6], t[10]), a[2] = Math.atan2(t[1], t[0])) : (a[0] = 0, a[2] = Math.atan2(-t[4], t[5]))) : "YZX" === M ? (a[2] = Math.asin(Math.min(Math.max(t[1], -1), 1)), Math.abs(t[1]) < .99999 ? (a[0] = Math.atan2(-t[9], t[5]), a[1] = Math.atan2(-t[2], t[0])) : (a[0] = 0, a[1] = Math.atan2(t[8], t[10]))) : "XZY" === M && (a[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1)), Math.abs(t[4]) < .99999 ? (a[0] = Math.atan2(t[6], t[5]), a[1] = Math.atan2(t[8], t[0])) : (a[0] = Math.atan2(-t[9], t[10]), a[1] = 0)), a
      }
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.fromRotationMatrix = a;
  }, {}],
  "cHmA": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Euler = void 0;
      var t = n(require("./functions/EulerFunc.js")),
          e = require("./Mat4.js");

      function r() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return r = function() {
              return t
          }, t
      }

      function n(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" != typeof t && "function" != typeof t) return {
              default: t
          };
          var e = r();
          if (e && e.has(t)) return e.get(t);
          var n = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in t)
              if (Object.prototype.hasOwnProperty.call(t, o)) {
                  var s = i ? Object.getOwnPropertyDescriptor(t, o) : null;
                  s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = t[o]
              } return n.default = t, e && e.set(t, n), n
      }
      const i = new e.Mat4;
      class o extends Array {
          constructor(t = 0, e = t, r = t, n = "YXZ") {
              return super(t, e, r), this.order = n, this.onChange = (() => {}), this
          }
          get x() {
              return this[0]
          }
          get y() {
              return this[1]
          }
          get z() {
              return this[2]
          }
          set x(t) {
              this[0] = t, this.onChange()
          }
          set y(t) {
              this[1] = t, this.onChange()
          }
          set z(t) {
              this[2] = t, this.onChange()
          }
          set(t, e = t, r = t) {
              return t.length ? this.copy(t) : (this[0] = t, this[1] = e, this[2] = r, this.onChange(), this)
          }
          copy(t) {
              return this[0] = t[0], this[1] = t[1], this[2] = t[2], this.onChange(), this
          }
          reorder(t) {
              return this.order = t, this.onChange(), this
          }
          fromRotationMatrix(e, r = this.order) {
              return t.fromRotationMatrix(this, e, r), this
          }
          fromQuaternion(t, e = this.order) {
              return i.fromQuaternion(t), this.fromRotationMatrix(i, e)
          }
      }
      exports.Euler = o;
  }, {
      "./functions/EulerFunc.js": "ALUj",
      "./Mat4.js": "M3g6"
  }],
  "rLsW": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Transform = void 0;
      var t = require("../math/Vec3.js"),
          i = require("../math/Quat.js"),
          e = require("../math/Mat4.js"),
          r = require("../math/Euler.js");
      class s {
          constructor() {
              this.parent = null, this.children = [], this.visible = !0, this.matrix = new e.Mat4, this.worldMatrix = new e.Mat4, this.matrixAutoUpdate = !0, this.position = new t.Vec3, this.quaternion = new i.Quat, this.scale = new t.Vec3(1), this.rotation = new r.Euler, this.up = new t.Vec3(0, 1, 0), this.rotation.onChange = (() => this.quaternion.fromEuler(this.rotation)), this.quaternion.onChange = (() => this.rotation.fromQuaternion(this.quaternion))
          }
          setParent(t, i = !0) {
              i && this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, i && t && t.addChild(this, !1)
          }
          addChild(t, i = !0) {
              ~this.children.indexOf(t) || this.children.push(t), i && t.setParent(this, !1)
          }
          removeChild(t, i = !0) {
              ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), i && t.setParent(null, !1)
          }
          updateMatrixWorld(t) {
              this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
              for (let i = 0, e = this.children.length; i < e; i++) this.children[i].updateMatrixWorld(t)
          }
          updateMatrix() {
              this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0
          }
          traverse(t) {
              if (!t(this))
                  for (let i = 0, e = this.children.length; i < e; i++) this.children[i].traverse(t)
          }
          decompose() {
              this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion)
          }
          lookAt(t, i = !1) {
              i ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion), this.rotation.fromQuaternion(this.quaternion)
          }
      }
      exports.Transform = s;
  }, {
      "../math/Vec3.js": "NC5f",
      "../math/Quat.js": "uHNF",
      "../math/Mat4.js": "M3g6",
      "../math/Euler.js": "cHmA"
  }],
  "vwx8": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Camera = void 0;
      var t = require("./Transform.js"),
          r = require("../math/Mat4.js"),
          e = require("../math/Vec3.js");
      const s = new r.Mat4,
          i = new e.Vec3,
          o = new e.Vec3;
      class a extends t.Transform {
          constructor(t, {
              near: s = .1,
              far: i = 100,
              fov: o = 45,
              aspect: a = 1,
              left: n,
              right: h,
              bottom: p,
              top: c,
              zoom: u = 1
          } = {}) {
              super(), Object.assign(this, {
                  near: s,
                  far: i,
                  fov: o,
                  aspect: a,
                  left: n,
                  right: h,
                  bottom: p,
                  top: c,
                  zoom: u
              }), this.projectionMatrix = new r.Mat4, this.viewMatrix = new r.Mat4, this.projectionViewMatrix = new r.Mat4, this.worldPosition = new e.Vec3, this.type = n || h ? "orthographic" : "perspective", "orthographic" === this.type ? this.orthographic() : this.perspective()
          }
          perspective({
              near: t = this.near,
              far: r = this.far,
              fov: e = this.fov,
              aspect: s = this.aspect
          } = {}) {
              return Object.assign(this, {
                  near: t,
                  far: r,
                  fov: e,
                  aspect: s
              }), this.projectionMatrix.fromPerspective({
                  fov: e * (Math.PI / 180),
                  aspect: s,
                  near: t,
                  far: r
              }), this.type = "perspective", this
          }
          orthographic({
              near: t = this.near,
              far: r = this.far,
              left: e = this.left,
              right: s = this.right,
              bottom: i = this.bottom,
              top: o = this.top,
              zoom: a = this.zoom
          } = {}) {
              return Object.assign(this, {
                  near: t,
                  far: r,
                  left: e,
                  right: s,
                  bottom: i,
                  top: o,
                  zoom: a
              }), e /= a, s /= a, i /= a, o /= a, this.projectionMatrix.fromOrthogonal({
                  left: e,
                  right: s,
                  bottom: i,
                  top: o,
                  near: t,
                  far: r
              }), this.type = "orthographic", this
          }
          updateMatrixWorld() {
              return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this
          }
          lookAt(t) {
              return super.lookAt(t, !0), this
          }
          project(t) {
              return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this
          }
          unproject(t) {
              return t.applyMatrix4(s.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this
          }
          updateFrustum() {
              this.frustum || (this.frustum = [new e.Vec3, new e.Vec3, new e.Vec3, new e.Vec3, new e.Vec3, new e.Vec3]);
              const t = this.projectionViewMatrix;
              this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12], this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12], this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13], this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13], this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14], this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
              for (let r = 0; r < 6; r++) {
                  const t = 1 / this.frustum[r].distance();
                  this.frustum[r].multiply(t), this.frustum[r].constant *= t
              }
          }
          frustumIntersectsMesh(t) {
              if (!t.geometry.attributes.position) return !0;
              if (t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere(), !t.geometry.bounds) return !0;
              const r = i;
              r.copy(t.geometry.bounds.center), r.applyMatrix4(t.worldMatrix);
              const e = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
              return this.frustumIntersectsSphere(r, e)
          }
          frustumIntersectsSphere(t, r) {
              const e = o;
              for (let s = 0; s < 6; s++) {
                  const i = this.frustum[s];
                  if (e.copy(i).dot(t) + i.constant < -r) return !1
              }
              return !0
          }
      }
      exports.Camera = a;
  }, {
      "./Transform.js": "rLsW",
      "../math/Mat4.js": "M3g6",
      "../math/Vec3.js": "NC5f"
  }],
  "RC6x": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.fromMat4 = r, exports.fromQuat = e, exports.copy = n, exports.set = o, exports.identity = u, exports.transpose = s, exports.invert = i, exports.determinant = c, exports.multiply = l, exports.translate = p, exports.rotate = f, exports.scale = x, exports.normalFromMat4 = a, exports.projection = m, exports.add = d, exports.subtract = y, exports.multiplyScalar = M;
      const t = 1e-6;

      function r(t, r) {
          return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[4], t[4] = r[5], t[5] = r[6], t[6] = r[8], t[7] = r[9], t[8] = r[10], t
      }

      function e(t, r) {
          let e = r[0],
              n = r[1],
              o = r[2],
              u = r[3],
              s = e + e,
              i = n + n,
              c = o + o,
              l = e * s,
              p = n * s,
              f = n * i,
              x = o * s,
              a = o * i,
              m = o * c,
              d = u * s,
              y = u * i,
              M = u * c;
          return t[0] = 1 - f - m, t[3] = p - M, t[6] = x + y, t[1] = p + M, t[4] = 1 - l - m, t[7] = a - d, t[2] = x - y, t[5] = a + d, t[8] = 1 - l - f, t
      }

      function n(t, r) {
          return t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t[4] = r[4], t[5] = r[5], t[6] = r[6], t[7] = r[7], t[8] = r[8], t
      }

      function o(t, r, e, n, o, u, s, i, c, l) {
          return t[0] = r, t[1] = e, t[2] = n, t[3] = o, t[4] = u, t[5] = s, t[6] = i, t[7] = c, t[8] = l, t
      }

      function u(t) {
          return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
      }

      function s(t, r) {
          if (t === r) {
              let e = r[1],
                  n = r[2],
                  o = r[5];
              t[1] = r[3], t[2] = r[6], t[3] = e, t[5] = r[7], t[6] = n, t[7] = o
          } else t[0] = r[0], t[1] = r[3], t[2] = r[6], t[3] = r[1], t[4] = r[4], t[5] = r[7], t[6] = r[2], t[7] = r[5], t[8] = r[8];
          return t
      }

      function i(t, r) {
          let e = r[0],
              n = r[1],
              o = r[2],
              u = r[3],
              s = r[4],
              i = r[5],
              c = r[6],
              l = r[7],
              p = r[8],
              f = p * s - i * l,
              x = -p * u + i * c,
              a = l * u - s * c,
              m = e * f + n * x + o * a;
          return m ? (m = 1 / m, t[0] = f * m, t[1] = (-p * n + o * l) * m, t[2] = (i * n - o * s) * m, t[3] = x * m, t[4] = (p * e - o * c) * m, t[5] = (-i * e + o * u) * m, t[6] = a * m, t[7] = (-l * e + n * c) * m, t[8] = (s * e - n * u) * m, t) : null
      }

      function c(t) {
          let r = t[0],
              e = t[1],
              n = t[2],
              o = t[3],
              u = t[4],
              s = t[5],
              i = t[6],
              c = t[7],
              l = t[8];
          return r * (l * u - s * c) + e * (-l * o + s * i) + n * (c * o - u * i)
      }

      function l(t, r, e) {
          let n = r[0],
              o = r[1],
              u = r[2],
              s = r[3],
              i = r[4],
              c = r[5],
              l = r[6],
              p = r[7],
              f = r[8],
              x = e[0],
              a = e[1],
              m = e[2],
              d = e[3],
              y = e[4],
              M = e[5],
              b = e[6],
              h = e[7],
              j = e[8];
          return t[0] = x * n + a * s + m * l, t[1] = x * o + a * i + m * p, t[2] = x * u + a * c + m * f, t[3] = d * n + y * s + M * l, t[4] = d * o + y * i + M * p, t[5] = d * u + y * c + M * f, t[6] = b * n + h * s + j * l, t[7] = b * o + h * i + j * p, t[8] = b * u + h * c + j * f, t
      }

      function p(t, r, e) {
          let n = r[0],
              o = r[1],
              u = r[2],
              s = r[3],
              i = r[4],
              c = r[5],
              l = r[6],
              p = r[7],
              f = r[8],
              x = e[0],
              a = e[1];
          return t[0] = n, t[1] = o, t[2] = u, t[3] = s, t[4] = i, t[5] = c, t[6] = x * n + a * s + l, t[7] = x * o + a * i + p, t[8] = x * u + a * c + f, t
      }

      function f(t, r, e) {
          let n = r[0],
              o = r[1],
              u = r[2],
              s = r[3],
              i = r[4],
              c = r[5],
              l = r[6],
              p = r[7],
              f = r[8],
              x = Math.sin(e),
              a = Math.cos(e);
          return t[0] = a * n + x * s, t[1] = a * o + x * i, t[2] = a * u + x * c, t[3] = a * s - x * n, t[4] = a * i - x * o, t[5] = a * c - x * u, t[6] = l, t[7] = p, t[8] = f, t
      }

      function x(t, r, e) {
          let n = e[0],
              o = e[1];
          return t[0] = n * r[0], t[1] = n * r[1], t[2] = n * r[2], t[3] = o * r[3], t[4] = o * r[4], t[5] = o * r[5], t[6] = r[6], t[7] = r[7], t[8] = r[8], t
      }

      function a(t, r) {
          let e = r[0],
              n = r[1],
              o = r[2],
              u = r[3],
              s = r[4],
              i = r[5],
              c = r[6],
              l = r[7],
              p = r[8],
              f = r[9],
              x = r[10],
              a = r[11],
              m = r[12],
              d = r[13],
              y = r[14],
              M = r[15],
              b = e * i - n * s,
              h = e * c - o * s,
              j = e * l - u * s,
              v = n * c - o * i,
              _ = n * l - u * i,
              F = o * l - u * c,
              O = p * d - f * m,
              P = p * y - x * m,
              Q = p * M - a * m,
              S = f * y - x * d,
              g = f * M - a * d,
              k = x * M - a * y,
              q = b * k - h * g + j * S + v * Q - _ * P + F * O;
          return q ? (q = 1 / q, t[0] = (i * k - c * g + l * S) * q, t[1] = (c * Q - s * k - l * P) * q, t[2] = (s * g - i * Q + l * O) * q, t[3] = (o * g - n * k - u * S) * q, t[4] = (e * k - o * Q + u * P) * q, t[5] = (n * Q - e * g - u * O) * q, t[6] = (d * F - y * _ + M * v) * q, t[7] = (y * j - m * F - M * h) * q, t[8] = (m * _ - d * j + M * b) * q, t) : null
      }

      function m(t, r, e) {
          return t[0] = 2 / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / e, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t
      }

      function d(t, r, e) {
          return t[0] = r[0] + e[0], t[1] = r[1] + e[1], t[2] = r[2] + e[2], t[3] = r[3] + e[3], t[4] = r[4] + e[4], t[5] = r[5] + e[5], t[6] = r[6] + e[6], t[7] = r[7] + e[7], t[8] = r[8] + e[8], t
      }

      function y(t, r, e) {
          return t[0] = r[0] - e[0], t[1] = r[1] - e[1], t[2] = r[2] - e[2], t[3] = r[3] - e[3], t[4] = r[4] - e[4], t[5] = r[5] - e[5], t[6] = r[6] - e[6], t[7] = r[7] - e[7], t[8] = r[8] - e[8], t
      }

      function M(t, r, e) {
          return t[0] = r[0] * e, t[1] = r[1] * e, t[2] = r[2] * e, t[3] = r[3] * e, t[4] = r[4] * e, t[5] = r[5] * e, t[6] = r[6] * e, t[7] = r[7] * e, t[8] = r[8] * e, t
      }
  }, {}],
  "Whfa": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Mat3 = void 0;
      var t = e(require("./functions/Mat3Func.js"));

      function r() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return r = function() {
              return t
          }, t
      }

      function e(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" != typeof t && "function" != typeof t) return {
              default: t
          };
          var e = r();
          if (e && e.has(t)) return e.get(t);
          var i = {},
              s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                  var u = s ? Object.getOwnPropertyDescriptor(t, n) : null;
                  u && (u.get || u.set) ? Object.defineProperty(i, n, u) : i[n] = t[n]
              } return i.default = t, e && e.set(t, i), i
      }
      class i extends Array {
          constructor(t = 1, r = 0, e = 0, i = 0, s = 1, n = 0, u = 0, o = 0, a = 1) {
              return super(t, r, e, i, s, n, u, o, a), this
          }
          set(r, e, i, s, n, u, o, a, h) {
              return r.length ? this.copy(r) : (t.set(this, r, e, i, s, n, u, o, a, h), this)
          }
          translate(r, e = this) {
              return t.translate(this, e, r), this
          }
          rotate(r, e = this) {
              return t.rotate(this, e, r), this
          }
          scale(r, e = this) {
              return t.scale(this, e, r), this
          }
          multiply(r, e) {
              return e ? t.multiply(this, r, e) : t.multiply(this, this, r), this
          }
          identity() {
              return t.identity(this), this
          }
          copy(r) {
              return t.copy(this, r), this
          }
          fromMatrix4(r) {
              return t.fromMat4(this, r), this
          }
          fromQuaternion(r) {
              return t.fromQuat(this, r), this
          }
          fromBasis(t, r, e) {
              return this.set(t[0], t[1], t[2], r[0], r[1], r[2], e[0], e[1], e[2]), this
          }
          inverse(r = this) {
              return t.invert(this, r), this
          }
          getNormalMatrix(r) {
              return t.normalFromMat4(this, r), this
          }
      }
      exports.Mat3 = i;
  }, {
      "./functions/Mat3Func.js": "RC6x"
  }],
  "u77p": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Mesh = void 0;
      var r = require("./Transform.js"),
          e = require("../math/Mat3.js"),
          t = require("../math/Mat4.js");
      let a = 0;
      class i extends r.Transform {
          constructor(r, {
              geometry: i,
              program: s,
              mode: o = r.TRIANGLES,
              frustumCulled: l = !0,
              renderOrder: m = 0
          } = {}) {
              super(), r.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = r, this.id = a++, this.geometry = i, this.program = s, this.mode = o, this.frustumCulled = l, this.renderOrder = m, this.modelViewMatrix = new t.Mat4, this.normalMatrix = new e.Mat3, this.beforeRenderCallbacks = [], this.afterRenderCallbacks = []
          }
          onBeforeRender(r) {
              return this.beforeRenderCallbacks.push(r), this
          }
          onAfterRender(r) {
              return this.afterRenderCallbacks.push(r), this
          }
          draw({
              camera: r
          } = {}) {
              this.beforeRenderCallbacks.forEach(e => e && e({
                  mesh: this,
                  camera: r
              })), r && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                  modelMatrix: {
                      value: null
                  },
                  viewMatrix: {
                      value: null
                  },
                  modelViewMatrix: {
                      value: null
                  },
                  normalMatrix: {
                      value: null
                  },
                  projectionMatrix: {
                      value: null
                  },
                  cameraPosition: {
                      value: null
                  }
              }), this.program.uniforms.projectionMatrix.value = r.projectionMatrix, this.program.uniforms.cameraPosition.value = r.worldPosition, this.program.uniforms.viewMatrix.value = r.viewMatrix, this.modelViewMatrix.multiply(r.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix);
              let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
              this.program.use({
                  flipFaces: e
              }), this.geometry.draw({
                  mode: this.mode,
                  program: this.program
              }), this.afterRenderCallbacks.forEach(e => e && e({
                  mesh: this,
                  camera: r
              }))
          }
      }
      exports.Mesh = i;
  }, {
      "./Transform.js": "rLsW",
      "../math/Mat3.js": "Whfa",
      "../math/Mat4.js": "M3g6"
  }],
  "dA10": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Texture = void 0;
      const t = new Uint8Array(4);

      function i(t) {
          return 0 == (t & t - 1)
      }
      let e = 1;
      class s {
          constructor(t, {
              image: i,
              target: s = t.TEXTURE_2D,
              type: h = t.UNSIGNED_BYTE,
              format: a = t.RGBA,
              internalFormat: r = a,
              wrapS: l = t.CLAMP_TO_EDGE,
              wrapT: g = t.CLAMP_TO_EDGE,
              generateMipmaps: p = !0,
              minFilter: n = (p ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR),
              magFilter: m = t.LINEAR,
              premultiplyAlpha: E = !1,
              unpackAlignment: o = 4,
              flipY: T = s == t.TEXTURE_2D,
              anisotropy: A = 0,
              level: _ = 0,
              width: u,
              height: d = u
          } = {}) {
              this.gl = t, this.id = e++, this.image = i, this.target = s, this.type = h, this.format = a, this.internalFormat = r, this.minFilter = n, this.magFilter = m, this.wrapS = l, this.wrapT = g, this.generateMipmaps = p, this.premultiplyAlpha = E, this.unpackAlignment = o, this.flipY = T, this.anisotropy = Math.min(A, this.gl.renderer.parameters.maxAnisotropy), this.level = _, this.width = u, this.height = d, this.texture = this.gl.createTexture(), this.store = {
                  image: null
              }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0
          }
          bind() {
              this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
          }
          update(e = 0) {
              const s = !(this.image === this.store.image && !this.needsUpdate);
              if ((s || this.glState.textureUnits[e] !== this.id) && (this.gl.renderer.activeTexture(e), this.bind()), s) {
                  if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
                      if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
                          for (let t = 0; t < 6; t++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, this.level, this.internalFormat, this.format, this.type, this.image[t]);
                      else if (ArrayBuffer.isView(this.image)) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                      else if (this.image.isCompressedTexture)
                          for (let t = 0; t < this.image.length; t++) this.gl.compressedTexImage2D(this.target, t, this.internalFormat, this.image[t].width, this.image[t].height, 0, this.image[t].data);
                      else this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                      this.generateMipmaps && (this.gl.renderer.isWebgl2 || i(this.image.width) && i(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR)), this.onUpdate && this.onUpdate()
                  } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                      for (let i = 0; i < 6; i++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, t);
                  else this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, t);
                  this.store.image = this.image
              }
          }
      }
      exports.Texture = s;
  }, {}],
  "l5Ki": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.RenderTarget = void 0;
      var e = require("./Texture.js");
      class t {
          constructor(t, {
              width: r = t.canvas.width,
              height: i = t.canvas.height,
              target: h = t.FRAMEBUFFER,
              color: s = 1,
              depth: l = !0,
              stencil: g = !1,
              depthTexture: f = !1,
              wrapS: E = t.CLAMP_TO_EDGE,
              wrapT: u = t.CLAMP_TO_EDGE,
              minFilter: a = t.LINEAR,
              magFilter: n = a,
              type: T = t.UNSIGNED_BYTE,
              format: R = t.RGBA,
              internalFormat: d = R,
              unpackAlignment: p,
              premultiplyAlpha: N
          } = {}) {
              this.gl = t, this.width = r, this.height = i, this.depth = l, this.buffer = this.gl.createFramebuffer(), this.target = h, this.gl.bindFramebuffer(this.target, this.buffer), this.textures = [];
              const F = [];
              for (let b = 0; b < s; b++) this.textures.push(new e.Texture(t, {
                  width: r,
                  height: i,
                  wrapS: E,
                  wrapT: u,
                  minFilter: a,
                  magFilter: n,
                  type: T,
                  format: R,
                  internalFormat: d,
                  unpackAlignment: p,
                  premultiplyAlpha: N,
                  flipY: !1,
                  generateMipmaps: !1
              })), this.textures[b].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + b, this.gl.TEXTURE_2D, this.textures[b].texture, 0), F.push(this.gl.COLOR_ATTACHMENT0 + b);
              F.length > 1 && this.gl.renderer.drawBuffers(F), this.texture = this.textures[0], f && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new e.Texture(t, {
                  width: r,
                  height: i,
                  minFilter: this.gl.NEAREST,
                  magFilter: this.gl.NEAREST,
                  format: this.gl.DEPTH_COMPONENT,
                  internalFormat: t.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
                  type: this.gl.UNSIGNED_INT
              }), this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (l && !g && (this.depthBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, r, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)), g && !l && (this.stencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, r, i), this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)), l && g && (this.depthStencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, r, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))), this.gl.bindFramebuffer(this.target, null)
          }
      }
      exports.RenderTarget = t;
  }, {
      "./Texture.js": "dA10"
  }],
  "fons": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.hexToRGB = f, exports.numberToRGB = o, exports.parseColor = r;
      const e = {
          black: "#000000",
          white: "#ffffff",
          red: "#ff0000",
          green: "#00ff00",
          blue: "#0000ff",
          fuchsia: "#ff00ff",
          cyan: "#00ffff",
          yellow: "#ffff00",
          orange: "#ff8000"
      };

      function f(e) {
          4 === e.length && (e = e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
          const f = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return f || console.warn(`Unable to convert hex string ${e} to rgb values`), [parseInt(f[1], 16) / 255, parseInt(f[2], 16) / 255, parseInt(f[3], 16) / 255]
      }

      function o(e) {
          return [((e = parseInt(e)) >> 16 & 255) / 255, (e >> 8 & 255) / 255, (255 & e) / 255]
      }

      function r(r) {
          return void 0 === r ? [0, 0, 0] : 3 === arguments.length ? arguments : isNaN(r) ? "#" === r[0] ? f(r) : e[r.toLowerCase()] ? f(e[r.toLowerCase()]) : (console.warn("Color format not recognised"), [0, 0, 0]) : o(r)
      }
  }, {}],
  "HHJD": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Color = void 0;
      var r = e(require("./functions/ColorFunc.js"));

      function t() {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap;
          return t = function() {
              return r
          }, r
      }

      function e(r) {
          if (r && r.__esModule) return r;
          if (null === r || "object" != typeof r && "function" != typeof r) return {
              default: r
          };
          var e = t();
          if (e && e.has(r)) return e.get(r);
          var o = {},
              s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in r)
              if (Object.prototype.hasOwnProperty.call(r, n)) {
                  var i = s ? Object.getOwnPropertyDescriptor(r, n) : null;
                  i && (i.get || i.set) ? Object.defineProperty(o, n, i) : o[n] = r[n]
              } return o.default = r, e && e.set(r, o), o
      }
      class o extends Array {
          constructor(t) {
              return Array.isArray(t) ? super(...t) : super(...r.parseColor(...arguments))
          }
          get r() {
              return this[0]
          }
          get g() {
              return this[1]
          }
          get b() {
              return this[2]
          }
          set r(r) {
              this[0] = r
          }
          set g(r) {
              this[1] = r
          }
          set b(r) {
              this[2] = r
          }
          set(t) {
              return Array.isArray(t) ? this.copy(t) : this.copy(r.parseColor(...arguments))
          }
          copy(r) {
              return this[0] = r[0], this[1] = r[1], this[2] = r[2], this
          }
      }
      exports.Color = o;
  }, {
      "./functions/ColorFunc.js": "fons"
  }],
  "NLi0": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.copy = r, exports.set = n, exports.add = e, exports.subtract = o, exports.multiply = u, exports.divide = s, exports.scale = a, exports.distance = c, exports.squaredDistance = i, exports.length = f, exports.squaredLength = p, exports.negate = x, exports.inverse = v, exports.normalize = d, exports.dot = l, exports.cross = M, exports.lerp = m, exports.transformMat2 = q, exports.transformMat2d = h, exports.transformMat3 = g, exports.transformMat4 = y, exports.exactEquals = b;
      const t = 1e-6;

      function r(t, r) {
          return t[0] = r[0], t[1] = r[1], t
      }

      function n(t, r, n) {
          return t[0] = r, t[1] = n, t
      }

      function e(t, r, n) {
          return t[0] = r[0] + n[0], t[1] = r[1] + n[1], t
      }

      function o(t, r, n) {
          return t[0] = r[0] - n[0], t[1] = r[1] - n[1], t
      }

      function u(t, r, n) {
          return t[0] = r[0] * n[0], t[1] = r[1] * n[1], t
      }

      function s(t, r, n) {
          return t[0] = r[0] / n[0], t[1] = r[1] / n[1], t
      }

      function a(t, r, n) {
          return t[0] = r[0] * n, t[1] = r[1] * n, t
      }

      function c(t, r) {
          var n = r[0] - t[0],
              e = r[1] - t[1];
          return Math.sqrt(n * n + e * e)
      }

      function i(t, r) {
          var n = r[0] - t[0],
              e = r[1] - t[1];
          return n * n + e * e
      }

      function f(t) {
          var r = t[0],
              n = t[1];
          return Math.sqrt(r * r + n * n)
      }

      function p(t) {
          var r = t[0],
              n = t[1];
          return r * r + n * n
      }

      function x(t, r) {
          return t[0] = -r[0], t[1] = -r[1], t
      }

      function v(t, r) {
          return t[0] = 1 / r[0], t[1] = 1 / r[1], t
      }

      function d(t, r) {
          var n = r[0],
              e = r[1],
              o = n * n + e * e;
          return o > 0 && (o = 1 / Math.sqrt(o)), t[0] = r[0] * o, t[1] = r[1] * o, t
      }

      function l(t, r) {
          return t[0] * r[0] + t[1] * r[1]
      }

      function M(t, r) {
          return t[0] * r[1] - t[1] * r[0]
      }

      function m(t, r, n, e) {
          var o = r[0],
              u = r[1];
          return t[0] = o + e * (n[0] - o), t[1] = u + e * (n[1] - u), t
      }

      function q(t, r, n) {
          var e = r[0],
              o = r[1];
          return t[0] = n[0] * e + n[2] * o, t[1] = n[1] * e + n[3] * o, t
      }

      function h(t, r, n) {
          var e = r[0],
              o = r[1];
          return t[0] = n[0] * e + n[2] * o + n[4], t[1] = n[1] * e + n[3] * o + n[5], t
      }

      function g(t, r, n) {
          var e = r[0],
              o = r[1];
          return t[0] = n[0] * e + n[3] * o + n[6], t[1] = n[1] * e + n[4] * o + n[7], t
      }

      function y(t, r, n) {
          let e = r[0],
              o = r[1];
          return t[0] = n[0] * e + n[4] * o + n[12], t[1] = n[1] * e + n[5] * o + n[13], t
      }

      function b(t, r) {
          return t[0] === r[0] && t[1] === r[1]
      }
  }, {}],
  "eUFA": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Vec2 = void 0;
      var t = r(require("./functions/Vec2Func.js"));

      function e() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return e = function() {
              return t
          }, t
      }

      function r(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" != typeof t && "function" != typeof t) return {
              default: t
          };
          var r = e();
          if (r && r.has(t)) return r.get(t);
          var s = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                  var h = i ? Object.getOwnPropertyDescriptor(t, n) : null;
                  h && (h.get || h.set) ? Object.defineProperty(s, n, h) : s[n] = t[n]
              } return s.default = t, r && r.set(t, s), s
      }
      class s extends Array {
          constructor(t = 0, e = t) {
              return super(t, e), this
          }
          get x() {
              return this[0]
          }
          get y() {
              return this[1]
          }
          set x(t) {
              this[0] = t
          }
          set y(t) {
              this[1] = t
          }
          set(e, r = e) {
              return e.length ? this.copy(e) : (t.set(this, e, r), this)
          }
          copy(e) {
              return t.copy(this, e), this
          }
          add(e, r) {
              return r ? t.add(this, e, r) : t.add(this, this, e), this
          }
          sub(e, r) {
              return r ? t.subtract(this, e, r) : t.subtract(this, this, e), this
          }
          multiply(e) {
              return e.length ? t.multiply(this, this, e) : t.scale(this, this, e), this
          }
          divide(e) {
              return e.length ? t.divide(this, this, e) : t.scale(this, this, 1 / e), this
          }
          inverse(e = this) {
              return t.inverse(this, e), this
          }
          len() {
              return t.length(this)
          }
          distance(e) {
              return e ? t.distance(this, e) : t.length(this)
          }
          squaredLen() {
              return this.squaredDistance()
          }
          squaredDistance(e) {
              return e ? t.squaredDistance(this, e) : t.squaredLength(this)
          }
          negate(e = this) {
              return t.negate(this, e), this
          }
          cross(e, r) {
              return r ? t.cross(e, r) : t.cross(this, e)
          }
          scale(e) {
              return t.scale(this, this, e), this
          }
          normalize() {
              return t.normalize(this, this), this
          }
          dot(e) {
              return t.dot(this, e)
          }
          equals(e) {
              return t.exactEquals(this, e)
          }
          applyMatrix3(e) {
              return t.transformMat3(this, this, e), this
          }
          applyMatrix4(e) {
              return t.transformMat4(this, this, e), this
          }
          lerp(e, r) {
              t.lerp(this, this, e, r)
          }
          clone() {
              return new s(this[0], this[1])
          }
          fromArray(t, e = 0) {
              return this[0] = t[e], this[1] = t[e + 1], this
          }
          toArray(t = [], e = 0) {
              return t[e] = this[0], t[e + 1] = this[1], t
          }
      }
      exports.Vec2 = s;
  }, {
      "./functions/Vec2Func.js": "NLi0"
  }],
  "MNUD": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Vec4 = void 0;
      var t = r(require("./functions/Vec4Func.js"));

      function e() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap;
          return e = function() {
              return t
          }, t
      }

      function r(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" != typeof t && "function" != typeof t) return {
              default: t
          };
          var r = e();
          if (r && r.has(t)) return r.get(t);
          var s = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                  var o = i ? Object.getOwnPropertyDescriptor(t, n) : null;
                  o && (o.get || o.set) ? Object.defineProperty(s, n, o) : s[n] = t[n]
              } return s.default = t, r && r.set(t, s), s
      }
      class s extends Array {
          constructor(t = 0, e = t, r = t, s = t) {
              return super(t, e, r, s), this
          }
          get x() {
              return this[0]
          }
          get y() {
              return this[1]
          }
          get z() {
              return this[2]
          }
          get w() {
              return this[3]
          }
          set x(t) {
              this[0] = t
          }
          set y(t) {
              this[1] = t
          }
          set z(t) {
              this[2] = t
          }
          set w(t) {
              this[3] = t
          }
          set(e, r, s, i) {
              return e.length ? this.copy(e) : (t.set(this, e, r, s, i), this)
          }
          copy(e) {
              return t.copy(this, e), this
          }
          normalize() {
              return t.normalize(this, this), this
          }
          fromArray(t, e = 0) {
              return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this
          }
          toArray(t = [], e = 0) {
              return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
          }
      }
      exports.Vec4 = s;
  }, {
      "./functions/Vec4Func.js": "B22p"
  }],
  "oQXH": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Plane = void 0;
      var e = require("../core/Geometry.js");
      class t extends e.Geometry {
          constructor(e, {
              width: r = 1,
              height: a = 1,
              widthSegments: n = 1,
              heightSegments: s = 1,
              attributes: i = {}
          } = {}) {
              const o = n,
                  l = s,
                  d = (o + 1) * (l + 1),
                  c = o * l * 6,
                  u = new Float32Array(3 * d),
                  y = new Float32Array(3 * d),
                  w = new Float32Array(2 * d),
                  h = d > 65536 ? new Uint32Array(c) : new Uint16Array(c);
              t.buildPlane(u, y, w, h, r, a, 0, o, l), Object.assign(i, {
                  position: {
                      size: 3,
                      data: u
                  },
                  normal: {
                      size: 3,
                      data: y
                  },
                  uv: {
                      size: 2,
                      data: w
                  },
                  index: {
                      data: h
                  }
              }), super(e, i)
          }
          static buildPlane(e, t, r, a, n, s, i, o, l, d = 0, c = 1, u = 2, y = 1, w = -1, h = 0, p = 0) {
              const b = h,
                  g = n / o,
                  m = s / l;
              for (let x = 0; x <= l; x++) {
                  let A = x * m - s / 2;
                  for (let s = 0; s <= o; s++, h++) {
                      let m = s * g - n / 2;
                      if (e[3 * h + d] = m * y, e[3 * h + c] = A * w, e[3 * h + u] = i / 2, t[3 * h + d] = 0, t[3 * h + c] = 0, t[3 * h + u] = i >= 0 ? 1 : -1, r[2 * h] = s / o, r[2 * h + 1] = 1 - x / l, x === l || s === o) continue;
                      let P = b + s + x * (o + 1),
                          f = b + s + (x + 1) * (o + 1),
                          v = b + s + (x + 1) * (o + 1) + 1,
                          j = b + s + x * (o + 1) + 1;
                      a[6 * p] = P, a[6 * p + 1] = f, a[6 * p + 2] = j, a[6 * p + 3] = f, a[6 * p + 4] = v, a[6 * p + 5] = j, p++
                  }
              }
          }
      }
      exports.Plane = t;
  }, {
      "../core/Geometry.js": "scsK"
  }],
  "XpKz": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Box = void 0;
      var e = require("../core/Geometry.js"),
          t = require("./Plane.js");
      class a extends e.Geometry {
          constructor(e, {
              width: a = 1,
              height: n = 1,
              depth: r = 1,
              widthSegments: l = 1,
              heightSegments: i = 1,
              depthSegments: s = 1,
              attributes: o = {}
          } = {}) {
              const d = l,
                  u = i,
                  P = s,
                  b = (d + 1) * (u + 1) * 2 + (d + 1) * (P + 1) * 2 + (u + 1) * (P + 1) * 2,
                  c = 6 * (d * u * 2 + d * P * 2 + u * P * 2),
                  h = new Float32Array(3 * b),
                  p = new Float32Array(3 * b),
                  y = new Float32Array(2 * b),
                  w = b > 65536 ? new Uint32Array(c) : new Uint16Array(c);
              let x = 0,
                  g = 0;
              t.Plane.buildPlane(h, p, y, w, r, n, a, P, u, 2, 1, 0, -1, -1, x, g), t.Plane.buildPlane(h, p, y, w, r, n, -a, P, u, 2, 1, 0, 1, -1, x += (P + 1) * (u + 1), g += P * u), t.Plane.buildPlane(h, p, y, w, a, r, n, P, u, 0, 2, 1, 1, 1, x += (P + 1) * (u + 1), g += P * u), t.Plane.buildPlane(h, p, y, w, a, r, -n, P, u, 0, 2, 1, 1, -1, x += (d + 1) * (P + 1), g += d * P), t.Plane.buildPlane(h, p, y, w, a, n, -r, d, u, 0, 1, 2, -1, -1, x += (d + 1) * (P + 1), g += d * P), t.Plane.buildPlane(h, p, y, w, a, n, r, d, u, 0, 1, 2, 1, -1, x += (d + 1) * (u + 1), g += d * u), Object.assign(o, {
                  position: {
                      size: 3,
                      data: h
                  },
                  normal: {
                      size: 3,
                      data: p
                  },
                  uv: {
                      size: 2,
                      data: y
                  },
                  index: {
                      data: w
                  }
              }), super(e, o)
          }
      }
      exports.Box = a;
  }, {
      "../core/Geometry.js": "scsK",
      "./Plane.js": "oQXH"
  }],
  "anTj": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Sphere = void 0;
      var e = require("../core/Geometry.js"),
          t = require("../math/Vec3.js");
      class r extends e.Geometry {
          constructor(e, {
              radius: r = .5,
              widthSegments: a = 16,
              heightSegments: s = Math.ceil(.5 * a),
              phiStart: o = 0,
              phiLength: i = 2 * Math.PI,
              thetaStart: n = 0,
              thetaLength: h = Math.PI,
              attributes: l = {}
          } = {}) {
              const c = a,
                  p = s,
                  u = o,
                  d = i,
                  M = n,
                  y = h,
                  m = (c + 1) * (p + 1),
                  w = c * p * 6,
                  g = new Float32Array(3 * m),
                  x = new Float32Array(3 * m),
                  S = new Float32Array(2 * m),
                  f = m > 65536 ? new Uint32Array(w) : new Uint16Array(w);
              let z = 0,
                  A = 0,
                  j = 0,
                  v = M + y;
              const P = [];
              let b = new t.Vec3;
              for (let t = 0; t <= p; t++) {
                  let e = [],
                      a = t / p;
                  for (let t = 0; t <= c; t++, z++) {
                      let s = t / c,
                          o = -r * Math.cos(u + s * d) * Math.sin(M + a * y),
                          i = r * Math.cos(M + a * y),
                          n = r * Math.sin(u + s * d) * Math.sin(M + a * y);
                      g[3 * z] = o, g[3 * z + 1] = i, g[3 * z + 2] = n, b.set(o, i, n).normalize(), x[3 * z] = b.x, x[3 * z + 1] = b.y, x[3 * z + 2] = b.z, S[2 * z] = s, S[2 * z + 1] = 1 - a, e.push(A++)
                  }
                  P.push(e)
              }
              for (let t = 0; t < p; t++)
                  for (let e = 0; e < c; e++) {
                      let r = P[t][e + 1],
                          a = P[t][e],
                          s = P[t + 1][e],
                          o = P[t + 1][e + 1];
                      (0 !== t || M > 0) && (f[3 * j] = r, f[3 * j + 1] = a, f[3 * j + 2] = o, j++), (t !== p - 1 || v < Math.PI) && (f[3 * j] = a, f[3 * j + 1] = s, f[3 * j + 2] = o, j++)
                  }
              Object.assign(l, {
                  position: {
                      size: 3,
                      data: g
                  },
                  normal: {
                      size: 3,
                      data: x
                  },
                  uv: {
                      size: 2,
                      data: S
                  },
                  index: {
                      data: f
                  }
              }), super(e, l)
          }
      }
      exports.Sphere = r;
  }, {
      "../core/Geometry.js": "scsK",
      "../math/Vec3.js": "NC5f"
  }],
  "zH7h": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Cylinder = void 0;
      var t = require("../core/Geometry.js"),
          e = require("../math/Vec3.js");
      class s extends t.Geometry {
          constructor(t, {
              radiusTop: s = .5,
              radiusBottom: r = .5,
              height: o = 1,
              radialSegments: n = 8,
              heightSegments: a = 1,
              openEnded: i = !1,
              thetaStart: c = 0,
              thetaLength: d = 2 * Math.PI,
              attributes: h = {}
          } = {}) {
              const u = n,
                  l = a,
                  y = c,
                  p = d,
                  f = i ? 0 : r && s ? 2 : 1,
                  m = (u + 1) * (l + 1 + f) + f,
                  g = u * l * 6 + f * u * 3,
                  w = new Float32Array(3 * m),
                  x = new Float32Array(3 * m),
                  M = new Float32Array(2 * m),
                  z = m > 65536 ? new Uint32Array(g) : new Uint16Array(g);
              let A = 0,
                  j = 0;
              const v = [];

              function b(t) {
                  let e;
                  const n = !0 === t ? s : r,
                      a = !0 === t ? 1 : -1,
                      i = A;
                  for (w.set([0, .5 * o * a, 0], 3 * A), x.set([0, a, 0], 3 * A), M.set([.5, .5], 2 * A), A++, e = 0; e <= u; e++) {
                      const t = e / u * p + y,
                          s = Math.cos(t),
                          r = Math.sin(t);
                      w.set([n * r, .5 * o * a, n * s], 3 * A), x.set([0, a, 0], 3 * A), M.set([.5 * s + .5, .5 * r * a + .5], 2 * A), A++
                  }
                  for (e = 0; e < u; e++) {
                      const s = i + e + 1;
                      t ? z.set([s, s + 1, i], 3 * j) : z.set([s + 1, s, i], 3 * j), j++
                  }
              }! function() {
                  let t, n;
                  const a = new e.Vec3,
                      i = (r - s) / o;
                  for (n = 0; n <= l; n++) {
                      const e = [],
                          c = n / l,
                          d = c * (r - s) + s;
                      for (t = 0; t <= u; t++) {
                          const s = t / u,
                              r = s * p + y,
                              n = Math.sin(r),
                              h = Math.cos(r);
                          w.set([d * n, (.5 - c) * o, d * h], 3 * A), a.set(n, i, h).normalize(), x.set([a.x, a.y, a.z], 3 * A), M.set([s, 1 - c], 2 * A), e.push(A++)
                      }
                      v.push(e)
                  }
                  for (t = 0; t < u; t++)
                      for (n = 0; n < l; n++) {
                          const e = v[n][t],
                              s = v[n + 1][t],
                              r = v[n + 1][t + 1],
                              o = v[n][t + 1];
                          z.set([e, s, o, s, r, o], 3 * j), j += 2
                      }
              }(), i || (s && b(!0), r && b(!1)), Object.assign(h, {
                  position: {
                      size: 3,
                      data: w
                  },
                  normal: {
                      size: 3,
                      data: x
                  },
                  uv: {
                      size: 2,
                      data: M
                  },
                  index: {
                      data: z
                  }
              }), super(t, h)
          }
      }
      exports.Cylinder = s;
  }, {
      "../core/Geometry.js": "scsK",
      "../math/Vec3.js": "NC5f"
  }],
  "V0dO": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Triangle = void 0;
      var e = require("../core/Geometry.js");
      class r extends e.Geometry {
        
          constructor(e, {
              attributes: r = {}
          } = {}) {
              Object.assign(r, {
                  position: {
                      size: 2,
                      data: new Float32Array([-1, -1, 3, -1, -1, 3])
                  },
                  uv: {
                      size: 2,
                      data: new Float32Array([0, 0, 2, 0, 0, 2])
                  }
              }), super(e, r)
          }
      }
      exports.Triangle = r;
  }, {
      "../core/Geometry.js": "scsK"
  }],
  "WGXO": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Torus = void 0;
      var e = require("../core/Geometry.js"),
          t = require("../math/Vec3.js");
      class r extends e.Geometry {
          constructor(e, {
              radius: r = .5,
              tube: s = .2,
              radialSegments: a = 8,
              tubularSegments: o = 6,
              arc: n = 2 * Math.PI,
              attributes: i = {}
          } = {}) {
              const c = (a + 1) * (o + 1),
                  u = a * o * 6,
                  l = new Float32Array(3 * c),
                  y = new Float32Array(3 * c),
                  d = new Float32Array(2 * c),
                  h = c > 65536 ? new Uint32Array(u) : new Uint16Array(u),
                  M = new t.Vec3,
                  x = new t.Vec3,
                  w = new t.Vec3;
              let m = 0;
              for (let t = 0; t <= a; t++)
                  for (let e = 0; e <= o; e++, m++) {
                      const i = e / o * n,
                          c = t / a * Math.PI * 2;
                      x.x = (r + s * Math.cos(c)) * Math.cos(i), x.y = (r + s * Math.cos(c)) * Math.sin(i), x.z = s * Math.sin(c), l.set([x.x, x.y, x.z], 3 * m), M.x = r * Math.cos(i), M.y = r * Math.sin(i), w.sub(x, M).normalize(), y.set([w.x, w.y, w.z], 3 * m), d.set([e / o, t / a], 2 * m)
                  }
              m = 0;
              for (let t = 1; t <= a; t++)
                  for (let e = 1; e <= o; e++, m++) {
                      const r = (o + 1) * t + e - 1,
                          s = (o + 1) * (t - 1) + e - 1,
                          a = (o + 1) * (t - 1) + e,
                          n = (o + 1) * t + e;
                      h.set([r, s, n, s, a, n], 6 * m)
                  }
              Object.assign(i, {
                  position: {
                      size: 3,
                      data: l
                  },
                  normal: {
                      size: 3,
                      data: y
                  },
                  uv: {
                      size: 2,
                      data: d
                  },
                  index: {
                      data: h
                  }
              }), super(e, i)
          }
      }
      exports.Torus = r;
  }, {
      "../core/Geometry.js": "scsK",
      "../math/Vec3.js": "NC5f"
  }],
  "A7ci": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Orbit = o;
      var e = require("../math/Vec3.js"),
          t = require("../math/Vec2.js");
      const a = {
              NONE: -1,
              ROTATE: 0,
              DOLLY: 1,
              PAN: 2,
              DOLLY_PAN: 3
          },
          i = new e.Vec3,
          n = new t.Vec2,
          s = new t.Vec2;

      function o(o, {
          element: h = document,
          enabled: u = !0,
          target: c = new e.Vec3,
          ease: r = .25,
          inertia: d = .85,
          enableRotate: p = !0,
          rotateSpeed: m = .1,
          autoRotate: l = !1,
          autoRotateSpeed: v = 1,
          enableZoom: g = !0,
          zoomSpeed: f = 1,
          enablePan: M = !0,
          panSpeed: b = .1,
          minPolarAngle: w = 0,
          maxPolarAngle: E = Math.PI,
          minAzimuthAngle: L = -1 / 0,
          maxAzimuthAngle: y = 1 / 0,
          minDistance: O = 0,
          maxDistance: N = 1 / 0
      } = {}) {
          this.enabled = u, this.target = c, r = r || 1, d = d || 0, this.minDistance = O, this.maxDistance = N;
          const Y = {
                  radius: 1,
                  phi: 0,
                  theta: 0
              },
              x = {
                  radius: 1,
                  phi: 0,
                  theta: 0
              },
              A = {
                  radius: 1,
                  phi: 0,
                  theta: 0
              },
              P = new e.Vec3,
              X = new e.Vec3;
          X.copy(o.position).sub(this.target), A.radius = x.radius = X.distance(), A.theta = x.theta = Math.atan2(X.x, X.z), A.phi = x.phi = Math.acos(Math.min(Math.max(X.y / x.radius, -1), 1)), this.offset = X, this.update = (() => {
              l && function() {
                  const e = 2 * Math.PI / 60 / 60 * v;
                  Y.theta -= e
              }(), x.radius *= Y.radius, x.theta += Y.theta, x.phi += Y.phi, x.theta = Math.max(L, Math.min(y, x.theta)), x.phi = Math.max(w, Math.min(E, x.phi)), x.radius = Math.max(this.minDistance, Math.min(this.maxDistance, x.radius)), A.phi += (x.phi - A.phi) * r, A.theta += (x.theta - A.theta) * r, A.radius += (x.radius - A.radius) * r, this.target.add(P);
              let e = A.radius * Math.sin(Math.max(1e-6, A.phi));
              X.x = e * Math.sin(A.theta), X.y = A.radius * Math.cos(A.phi), X.z = e * Math.cos(A.theta), o.position.copy(this.target).add(X), o.lookAt(this.target), Y.theta *= d, Y.phi *= d, P.multiply(d), Y.radius = 1
          }), this.forcePosition = (() => {
              X.copy(o.position).sub(this.target), A.radius = x.radius = X.distance(), A.theta = x.theta = Math.atan2(X.x, X.z), A.phi = x.phi = Math.acos(Math.min(Math.max(X.y / x.radius, -1), 1)), o.lookAt(this.target)
          });
          const D = new t.Vec2,
              T = new t.Vec2,
              V = new t.Vec2;
          let k = a.NONE;

          function R() {
              return Math.pow(.95, f)
          }
          this.mouseButtons = {
              ORBIT: 0,
              ZOOM: 1,
              PAN: 2
          };
          const I = (e, t) => {
              let a = h === document ? document.body : h;
              i.copy(o.position).sub(this.target);
              let n = i.distance();
              (function(e, t) {
                  i.set(t[0], t[1], t[2]), i.multiply(-e), P.add(i)
              })(2 * e * (n *= Math.tan((o.fov || 45) / 2 * Math.PI / 180)) / a.clientHeight, o.matrix),
              function(e, t) {
                  i.set(t[4], t[5], t[6]), i.multiply(e), P.add(i)
              }(2 * t * n / a.clientHeight, o.matrix)
          };

          function z(e) {
              Y.radius /= e
          }

          function B(e, t) {
              n.set(e, t), s.sub(n, D).multiply(m);
              let a = h === document ? document.body : h;
              Y.theta -= 2 * Math.PI * s.x / a.clientHeight, Y.phi -= 2 * Math.PI * s.y / a.clientHeight, D.copy(n)
          }

          function q(e, t) {
              n.set(e, t), s.sub(n, T).multiply(b), I(s.x, s.y), T.copy(n)
          }
          const H = e => {
                  if (this.enabled) {
                      switch (e.button) {
                          case this.mouseButtons.ORBIT:
                              if (!1 === p) return;
                              D.set(e.clientX, e.clientY), k = a.ROTATE;
                              break;
                          case this.mouseButtons.ZOOM:
                              if (!1 === g) return;
                              V.set(e.clientX, e.clientY), k = a.DOLLY;
                              break;
                          case this.mouseButtons.PAN:
                              if (!1 === M) return;
                              T.set(e.clientX, e.clientY), k = a.PAN
                      }
                      k !== a.NONE && (window.addEventListener("mousemove", S, !1), window.addEventListener("mouseup", _, !1))
                  }
              },
              S = e => {
                  if (this.enabled) switch (k) {
                      case a.ROTATE:
                          if (!1 === p) return;
                          B(e.clientX, e.clientY);
                          break;
                      case a.DOLLY:
                          if (!1 === g) return;
                          ! function(e) {
                              n.set(e.clientX, e.clientY), s.sub(n, V), s.y > 0 ? z(R()) : s.y < 0 && z(1 / R()), V.copy(n)
                          }(e);
                          break;
                      case a.PAN:
                          if (!1 === M) return;
                          q(e.clientX, e.clientY)
                  }
              },
              _ = () => {
                  window.removeEventListener("mousemove", S, !1), window.removeEventListener("mouseup", _, !1), k = a.NONE
              },
              j = e => {
                  this.enabled && g && (k === a.NONE || k === a.ROTATE) && (e.stopPropagation(), e.preventDefault(), e.deltaY < 0 ? z(1 / R()) : e.deltaY > 0 && z(R()))
              },
              Z = e => {
                  if (this.enabled) switch (e.preventDefault(), e.touches.length) {
                      case 1:
                          if (!1 === p) return;
                          D.set(e.touches[0].pageX, e.touches[0].pageY), k = a.ROTATE;
                          break;
                      case 2:
                          if (!1 === g && !1 === M) return;
                          ! function(e) {
                              if (g) {
                                  let t = e.touches[0].pageX - e.touches[1].pageX,
                                      a = e.touches[0].pageY - e.touches[1].pageY,
                                      i = Math.sqrt(t * t + a * a);
                                  V.set(0, i)
                              }
                              if (M) {
                                  let t = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                                      a = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                                  T.set(t, a)
                              }
                          }(e), k = a.DOLLY_PAN;
                          break;
                      default:
                          k = a.NONE
                  }
              },
              C = e => {
                  if (this.enabled) switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
                      case 1:
                          if (!1 === p) return;
                          B(e.touches[0].pageX, e.touches[0].pageY);
                          break;
                      case 2:
                          if (!1 === g && !1 === M) return;
                          ! function(e) {
                              if (g) {
                                  let t = e.touches[0].pageX - e.touches[1].pageX,
                                      a = e.touches[0].pageY - e.touches[1].pageY,
                                      i = Math.sqrt(t * t + a * a);
                                  n.set(0, i), s.set(0, Math.pow(n.y / V.y, f)), z(s.y), V.copy(n)
                              }
                              M && q(.5 * (e.touches[0].pageX + e.touches[1].pageX), .5 * (e.touches[0].pageY + e.touches[1].pageY))
                          }(e);
                          break;
                      default:
                          k = a.NONE
                  }
              },
              F = () => {
                  this.enabled && (k = a.NONE)
              },
              G = e => {
                  this.enabled && e.preventDefault()
              };
          this.remove = function() {
              h.removeEventListener("contextmenu", G), h.removeEventListener("mousedown", H), h.removeEventListener("wheel", j), h.removeEventListener("touchstart", Z), h.removeEventListener("touchend", F), h.removeEventListener("touchmove", C), window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", _)
          }, h.addEventListener("contextmenu", G, !1), h.addEventListener("mousedown", H, !1), h.addEventListener("wheel", j, {
              passive: !1
          }), h.addEventListener("touchstart", Z, {
              passive: !1
          }), h.addEventListener("touchend", F, !1), h.addEventListener("touchmove", C, {
              passive: !1
          })
      }
  }, {
      "../math/Vec3.js": "NC5f",
      "../math/Vec2.js": "eUFA"
  }],
  "IySF": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Raycast = void 0;
      var t = require("../math/Vec2.js"),
          i = require("../math/Vec3.js"),
          r = require("../math/Mat4.js");
      const e = new t.Vec2,
          o = new t.Vec2,
          n = new t.Vec2,
          a = new i.Vec3,
          s = new i.Vec3,
          c = new i.Vec3,
          l = new i.Vec3,
          d = new i.Vec3,
          h = new i.Vec3,
          y = new i.Vec3,
          u = new i.Vec3,
          m = new i.Vec3,
          p = new i.Vec3,
          x = new i.Vec3,
          f = new r.Mat4;
      class w {
          constructor() {
              this.origin = new i.Vec3, this.direction = new i.Vec3
          }
          castMouse(t, i = [0, 0]) {
              if ("orthographic" === t.type) {
                  const {
                      left: r,
                      right: e,
                      bottom: o,
                      top: n,
                      zoom: a
                  } = t, s = r / a + (e - r) / a * (.5 * i[0] + .5), c = o / a + (n - o) / a * (.5 * i[1] + .5);
                  this.origin.set(s, c, 0), this.origin.applyMatrix4(t.worldMatrix), this.direction.x = -t.worldMatrix[8], this.direction.y = -t.worldMatrix[9], this.direction.z = -t.worldMatrix[10]
              } else t.worldMatrix.getTranslation(this.origin), this.direction.set(i[0], i[1], .5), t.unproject(this.direction), this.direction.sub(this.origin).normalize()
          }
          intersectBounds(t, {
              maxDistance: r,
              output: e = []
          } = {}) {
              Array.isArray(t) || (t = [t]);
              const o = f,
                  n = a,
                  c = s,
                  l = e;
              return l.length = 0, t.forEach(t => {
                  t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere();
                  const e = t.geometry.bounds;
                  let a;
                  if (o.inverse(t.worldMatrix), r && (c.copy(this.direction).scaleRotateMatrix4(o), a = r * c.len()), n.copy(this.origin).applyMatrix4(o), c.copy(this.direction).transformDirection(o), r && n.distance(e.center) - e.radius > a) return;
                  let s = 0;
                  if ("sphere" === t.geometry.raycast) {
                      if (n.distance(e.center) > e.radius && !(s = this.intersectSphere(e, n, c))) return
                  } else if ((n.x < e.min.x || n.x > e.max.x || n.y < e.min.y || n.y > e.max.y || n.z < e.min.z || n.z > e.max.z) && !(s = this.intersectBox(e, n, c))) return;
                  r && s > a || (t.hit || (t.hit = {
                      localPoint: new i.Vec3,
                      point: new i.Vec3
                  }), t.hit.localPoint.copy(c).multiply(s).add(n), t.hit.point.copy(t.hit.localPoint).applyMatrix4(t.worldMatrix), t.hit.distance = t.hit.point.distance(this.origin), l.push(t))
              }), l.sort((t, i) => t.hit.distance - i.hit.distance), l
          }
          intersectMeshes(r, {
              cullFace: m = !0,
              maxDistance: p,
              includeUV: x = !0,
              includeNormal: w = !0,
              output: g = []
          } = {}) {
              const M = this.intersectBounds(r, {
                  maxDistance: p,
                  output: g
              });
              if (!M.length) return M;
              const V = f,
                  z = a,
                  b = s,
                  A = c,
                  v = l,
                  N = d,
                  B = h,
                  D = y,
                  P = u,
                  R = e,
                  j = o,
                  q = n;
              for (let e = M.length - 1; e >= 0; e--) {
                  const r = M[e];
                  let o;
                  V.inverse(r.worldMatrix), p && (b.copy(this.direction).scaleRotateMatrix4(V), o = p * b.len()), z.copy(this.origin).applyMatrix4(V), b.copy(this.direction).transformDirection(V);
                  let n, a, s, c = 0;
                  const l = r.geometry,
                      d = l.attributes,
                      h = d.index,
                      y = Math.max(0, l.drawRange.start),
                      u = Math.min(h ? h.count : d.position.count, l.drawRange.start + l.drawRange.count);
                  for (let t = y; t < u; t += 3) {
                      const i = h ? h.data[t] : t,
                          r = h ? h.data[t + 1] : t + 1,
                          e = h ? h.data[t + 2] : t + 2;
                      A.fromArray(d.position.data, 3 * i), v.fromArray(d.position.data, 3 * r), N.fromArray(d.position.data, 3 * e);
                      const l = this.intersectTriangle(A, v, N, m, z, b, D);
                      l && (p && l > o || (!c || l < c) && (c = l, n = i, a = r, s = e, B.copy(D)))
                  }
                  c || M.splice(e, 1), r.hit.localPoint.copy(b).multiply(c).add(z), r.hit.point.copy(r.hit.localPoint).applyMatrix4(r.worldMatrix), r.hit.distance = r.hit.point.distance(this.origin), r.hit.faceNormal || (r.hit.localFaceNormal = new i.Vec3, r.hit.faceNormal = new i.Vec3, r.hit.uv = new t.Vec2, r.hit.localNormal = new i.Vec3, r.hit.normal = new i.Vec3), r.hit.localFaceNormal.copy(B), r.hit.faceNormal.copy(r.hit.localFaceNormal).transformDirection(r.worldMatrix), (x || w) && (A.fromArray(d.position.data, 3 * n), v.fromArray(d.position.data, 3 * a), N.fromArray(d.position.data, 3 * s), this.getBarycoord(r.hit.localPoint, A, v, N, P)), x && d.uv && (R.fromArray(d.uv.data, 2 * n), j.fromArray(d.uv.data, 2 * a), q.fromArray(d.uv.data, 2 * s), r.hit.uv.set(R.x * P.x + j.x * P.y + q.x * P.z, R.y * P.x + j.y * P.y + q.y * P.z)), w && d.normal && (A.fromArray(d.normal.data, 3 * n), v.fromArray(d.normal.data, 3 * a), N.fromArray(d.normal.data, 3 * s), r.hit.localNormal.set(A.x * P.x + v.x * P.y + N.x * P.z, A.y * P.x + v.y * P.y + N.y * P.z, A.z * P.x + v.z * P.y + N.z * P.z), r.hit.normal.copy(r.hit.localNormal).transformDirection(r.worldMatrix))
              }
              return M.sort((t, i) => t.hit.distance - i.hit.distance), M
          }
          intersectSphere(t, i = this.origin, r = this.direction) {
              const e = c;
              e.sub(t.center, i);
              const o = e.dot(r),
                  n = e.dot(e) - o * o ,
                  a = t.radius * t.radius;
              if (n > a) return 0;
              const s = Math.sqrt(a - n),
                  l = o - s,
                  d = o + s;
              return l < 0 && d < 0 ? 0 : l < 0 ? d : l
          }
          intersectBox(t, i = this.origin, r = this.direction) {
              let e, o, n, a, s, c;
              const l = 1 / r.x,
                  d = 1 / r.y,
                  h = 1 / r.z,
                  y = t.min,
                  u = t.max;
              return e = ((l >= 0 ? y.x : u.x) - i.x) * l, o = ((l >= 0 ? u.x : y.x) - i.x) * l, n = ((d >= 0 ? y.y : u.y) - i.y) * d, e > (a = ((d >= 0 ? u.y : y.y) - i.y) * d) || n > o ? 0 : (n > e && (e = n), a < o && (o = a), s = ((h >= 0 ? y.z : u.z) - i.z) * h, e > (c = ((h >= 0 ? u.z : y.z) - i.z) * h) || s > o ? 0 : (s > e && (e = s), c < o && (o = c), o < 0 ? 0 : e >= 0 ? e : o))
          }
          intersectTriangle(t, i, r, e = !0, o = this.origin, n = this.direction, a = y) {
              const s = u,
                  c = m,
                  l = p;
              s.sub(i, t), c.sub(r, t), a.cross(s, c);
              let d, h = n.dot(a);
              if (!h) return 0;
              if (h > 0) {
                  if (e) return 0;
                  d = 1
              } else d = -1, h = -h;
              l.sub(o, t);
              let x = d * n.dot(c.cross(l, c));
              if (x < 0) return 0;
              let f = d * n.dot(s.cross(l));
              if (f < 0) return 0;
              if (x + f > h) return 0;
              let w = -d * l.dot(a);
              return w < 0 ? 0 : w / h
          }
          getBarycoord(t, i, r, e, o = u) {
              const n = m,
                  a = p,
                  s = x;
              n.sub(e, i), a.sub(r, i), s.sub(t, i);
              const c = n.dot(n),
                  l = n.dot(a),
                  d = n.dot(s),
                  h = a.dot(a),
                  y = a.dot(s),
                  f = c * h - l * l;
              if (0 === f) return o.set(-2, -1, -1);
              const w = 1 / f,
                  g = (h * d - l * y) * w,
                  M = (c * y - l * d) * w;
              return o.set(1 - g - M, M, g)
          }
      }
      exports.Raycast = w;
  }, {
      "../math/Vec2.js": "eUFA",
      "../math/Vec3.js": "NC5f",
      "../math/Mat4.js": "M3g6"
  }],
  "anbJ": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Curve = void 0;
      var t = require("../math/Vec3.js");
      const s = "catmullrom",
          e = "cubicbezier",
          i = "quadraticbezier",
          o = new t.Vec3,
          n = new t.Vec3,
          c = new t.Vec3,
          r = new t.Vec3;

      function p(t, s, e = .168, i = .168) {
          if (s < 1 ? o.sub(t[1], t[0]).scale(e).add(t[0]) : o.sub(t[s + 1], t[s - 1]).scale(e).add(t[s]), s > t.length - 3) {
              const s = t.length - 1;
              n.sub(t[s - 1], t[s]).scale(i).add(t[s])
          } else n.sub(t[s], t[s + 2]).scale(i).add(t[s + 1]);
          return [o.clone(), n.clone()]
      }

      function h(s, e, i, r) {
          const p = 1 - s;
          o.copy(e).scale(p ** 2), n.copy(i).scale(2 * p * s), c.copy(r).scale(s ** 2);
          const h = new t.Vec3;
          return h.add(o, n).add(c), h
      }

      function l(s, e, i, p, h) {
          const l = 1 - s;
          o.copy(e).scale(l ** 3), n.copy(i).scale(3 * l ** 2 * s), c.copy(p).scale(3 * l * s ** 2), r.copy(h).scale(s ** 3);
          const u = new t.Vec3;
          return u.add(o, n).add(c).add(r), u
      }
      class u {
          constructor({
              points: e = [new t.Vec3(0, 0, 0), new t.Vec3(0, 1, 0), new t.Vec3(1, 1, 0), new t.Vec3(1, 0, 0)],
              divisions: i = 12,
              type: o = s
          } = {}) {
              this.points = e, this.divisions = i, this.type = o
          }
          _getQuadraticBezierPoints(t = this.divisions) {
              const s = [],
                  e = this.points.length;
              if (e < 3) return console.warn("Not enough points provided."), [];
              const i = this.points[0];
              let o = this.points[1],
                  n = this.points[2];
              for (let r = 0; r <= t; r++) {
                  const e = h(r / t, i, o, n);
                  s.push(e)
              }
              let c = 3;
              for (; e - c > 0;) {
                  i.copy(n), o = n.scale(2).sub(o), n = this.points[c];
                  for (let e = 1; e <= t; e++) {
                      const c = h(e / t, i, o, n);
                      s.push(c)
                  }
                  c++
              }
              return s
          }
          _getCubicBezierPoints(t = this.divisions) {
              const s = [],
                  e = this.points.length;
              if (e < 4) return console.warn("Not enough points provided."), [];
              let i = this.points[0],
                  o = this.points[1],
                  n = this.points[2],
                  c = this.points[3];
              for (let p = 0; p <= t; p++) {
                  const e = l(p / t, i, o, n, c);
                  s.push(e)
              }
              let r = 4;
              for (; e - r > 1;) {
                  i.copy(c), o = c.scale(2).sub(n), n = this.points[r], c = this.points[r + 1];
                  for (let e = 1; e <= t; e++) {
                      const r = l(e / t, i, o, n, c);
                      s.push(r)
                  }
                  r += 2
              }
              return s
          }
          _getCatmullRomPoints(t = this.divisions, s = .168, i = .168) {
              const o = [];
              if (this.points.length <= 2) return this.points;
              let n;
              return this.points.forEach((c, r) => {
                  if (0 === r) n = c;
                  else {
                      const [h, l] = p(this.points, r - 1, s, i), a = new u({
                          points: [n, h, l, c],
                          type: e
                      });
                      o.pop(), o.push(...a.getPoints(t)), n = c
                  }
              }), o
          }
          getPoints(t = this.divisions, o = .168, n = .168) {
              const c = this.type;
              return c === i ? this._getQuadraticBezierPoints(t) : c === e ? this._getCubicBezierPoints(t) : c === s ? this._getCatmullRomPoints(t, o, n) : this.points
          }
      }
      exports.Curve = u, u.CATMULLROM = s, u.CUBICBEZIER = e, u.QUADRATICBEZIER = i;
  }, {
      "../math/Vec3.js": "NC5f"
  }],
  "FZKK": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Post = void 0;
      var e = require("../core/Program.js"),
          t = require("../core/Mesh.js"),
          r = require("../core/RenderTarget.js"),
          i = require("./Triangle.js");
      class s {
          constructor(e, {
              width: t,
              height: r,
              dpr: s,
              wrapS: n = e.CLAMP_TO_EDGE,
              wrapT: h = e.CLAMP_TO_EDGE,
              minFilter: o = e.LINEAR,
              magFilter: a = e.LINEAR,
              geometry: l = new i.Triangle(e),
              targetOnly: g = null
          } = {}) {
              this.gl = e, this.options = {
                  wrapS: n,
                  wrapT: h,
                  minFilter: o,
                  magFilter: a
              }, this.passes = [], this.geometry = l, this.uniform = {
                  value: null
              }, this.targetOnly = g;
              const u = this.fbo = {
                  read: null,
                  write: null,
                  swap: () => {
                      let e = u.read;
                      u.read = u.write, u.write = e
                  }
              };
              this.resize({
                  width: t,
                  height: r,
                  dpr: s
              })
          }
          addPass({
              vertex: r = n,
              fragment: i = h,
              uniforms: s = {},
              textureUniform: o = "tMap",
              enabled: a = !0
          } = {}) {
              s[o] = {
                  value: this.fbo.read.texture
              };
              const l = new e.Program(this.gl, {
                      vertex: r,
                      fragment: i,
                      uniforms: s
                  }),
                  g = {
                      mesh: new t.Mesh(this.gl, {
                          geometry: this.geometry,
                          program: l
                      }),
                      program: l,
                      uniforms: s,
                      enabled: a,
                      textureUniform: o
                  };
              return this.passes.push(g), g
          }
          resize({
              width: e,
              height: t,
              dpr: i
          } = {}) {
              i && (this.dpr = i), e && (this.width = e, this.height = t || e), i = this.dpr || this.gl.renderer.dpr, e = (this.width || this.gl.renderer.width) * i, t = (this.height || this.gl.renderer.height) * i, this.options.width = e, this.options.height = t, this.fbo.read = new r.RenderTarget(this.gl, this.options), this.fbo.write = new r.RenderTarget(this.gl, this.options)
          }
          render({
              scene: e,
              camera: t,
              target: r = null,
              update: i = !0,
              sort: s = !0,
              frustumCull: n = !0
          }) {
              const h = this.passes.filter(e => e.enabled);
              this.gl.renderer.render({
                  scene: e,
                  camera: t,
                  target: h.length || !r && this.targetOnly ? this.fbo.write : r,
                  update: i,
                  sort: s,
                  frustumCull: n
              }), this.fbo.swap(), h.forEach((e, t) => {
                  e.mesh.program.uniforms[e.textureUniform].value = this.fbo.read.texture, this.gl.renderer.render({
                      scene: e.mesh,
                      target: t !== h.length - 1 || !r && this.targetOnly ? this.fbo.write : r,
                      clear: !0
                  }), this.fbo.swap()
              }), this.uniform.value = this.fbo.read.texture
          }
      }
      exports.Post = s;
      const n = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
          h = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n";
  }, {
      "../core/Program.js": "bbEx",
      "../core/Mesh.js": "u77p",
      "../core/RenderTarget.js": "l5Ki",
      "./Triangle.js": "V0dO"
  }],
  "bktg": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Animation = void 0;
      var e = require("../math/Vec3.js"),
          t = require("../math/Quat.js");
      const r = new e.Vec3,
          a = new t.Quat,
          s = new e.Vec3,
          o = new e.Vec3,
          i = new t.Quat,
          n = new e.Vec3;
      class c {
          constructor({
              objects: e,
              data: t
          }) {
              this.objects = e, this.data = t, this.elapsed = 0, this.weight = 1, this.duration = t.frames.length - 1
          }
          update(e = 1, t) {
              const c = t ? 1 : this.weight / e,
                  h = this.elapsed % this.duration,
                  l = Math.floor(h),
                  p = h - l,
                  u = this.data.frames[l],
                  d = this.data.frames[(l + 1) % this.duration];
              this.objects.forEach((e, t) => {
                  r.fromArray(u.position, 3 * t), a.fromArray(u.quaternion, 4 * t), s.fromArray(u.scale, 3 * t), o.fromArray(d.position, 3 * t), i.fromArray(d.quaternion, 4 * t), n.fromArray(d.scale, 3 * t), r.lerp(o, p), a.slerp(i, p), s.lerp(n, p), e.position.lerp(r, c), e.quaternion.slerp(a, c), e.scale.lerp(s, c)
              })
          }
      }
      exports.Animation = c;
  }, {
      "../math/Vec3.js": "NC5f",
      "../math/Quat.js": "uHNF"
  }],
  "LQOF": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Skin = void 0;
      var e = require("../core/Mesh.js"),
          t = require("../core/Transform.js"),
          r = require("../math/Mat4.js"),
          s = require("../core/Texture.js"),
          o = require("./Animation.js");
      const i = new r.Mat4;
      class n extends e.Mesh {
          constructor(e, {
              rig: t,
              geometry: r,
              program: s,
              mode: o = e.TRIANGLES
          } = {}) {
              super(e, {
                  geometry: r,
                  program: s,
                  mode: o
              }), this.createBones(t), this.createBoneTexture(), this.animations = [], Object.assign(this.program.uniforms, {
                  boneTexture: {
                      value: this.boneTexture
                  },
                  boneTextureSize: {
                      value: this.boneTextureSize
                  }
              })
          }
          createBones(e) {
              if (this.root = new t.Transform, this.bones = [], e.bones && e.bones.length) {
                  for (let r = 0; r < e.bones.length; r++) {
                      const s = new t.Transform;
                      s.position.fromArray(e.bindPose.position, 3 * r), s.quaternion.fromArray(e.bindPose.quaternion, 4 * r), s.scale.fromArray(e.bindPose.scale, 3 * r), this.bones.push(s)
                  }
                  e.bones.forEach((e, t) => {
                      if (this.bones[t].name = e.name, -1 === e.parent) return this.bones[t].setParent(this.root);
                      this.bones[t].setParent(this.bones[e.parent])
                  }), this.root.updateMatrixWorld(!0), this.bones.forEach(e => {
                      e.bindInverse = new r.Mat4(...e.worldMatrix).inverse()
                  })
              }
          }
          createBoneTexture() {
              if (!this.bones.length) return;
              const e = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(4 * this.bones.length)) / Math.LN2)));
              this.boneMatrices = new Float32Array(e * e * 4), this.boneTextureSize = e, this.boneTexture = new s.Texture(this.gl, {
                  image: this.boneMatrices,
                  generateMipmaps: !1,
                  type: this.gl.FLOAT,
                  internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
                  flipY: !1,
                  width: e
              })
          }
          addAnimation(e) {
              const t = new o.Animation({
                  objects: this.bones,
                  data: e
              });
              return this.animations.push(t), t
          }
          update() {
              let e = 0;
              this.animations.forEach(t => e += t.weight), this.animations.forEach((t, r) => {
                  t.update(e, 0 === r)
              })
          }
          draw({
              camera: e
          } = {}) {
              this.root.updateMatrixWorld(!0), this.bones.forEach((e, t) => {
                  i.multiply(e.worldMatrix, e.bindInverse), this.boneMatrices.set(i, 16 * t)
              }), this.boneTexture && (this.boneTexture.needsUpdate = !0), super.draw({
                  camera: e
              })
          }
      }
      exports.Skin = n;
  }, {
      "../core/Mesh.js": "u77p",
      "../core/Transform.js": "rLsW",
      "../math/Mat4.js": "M3g6",
      "../core/Texture.js": "dA10",
      "./Animation.js": "bktg"
  }],
  "V7wg": [function(require, module, exports) {
      "use strict";

      function t({
          font: t,
          text: e,
          width: n = 1 / 0,
          align: i = "left",
          size: s = 1,
          letterSpacing: o = 0,
          lineHeight: h = 1.4,
          wordSpacing: l = 0,
          wordBreak: c = !1
      }) {
          const r = this;
          let f, g, d, u, p;
          const a = /\n/,
              w = /\s/;

          function y() {
              d = t.common.lineHeight, u = t.common.base, p = s / u;
              let n = e.replace(/[ \n]/g, "").length;
              g = {
                  position: new Float32Array(4 * n * 3),
                  uv: new Float32Array(4 * n * 2),
                  id: new Float32Array(4 * n),
                  index: new Uint16Array(6 * n)
              };
              for (let t = 0; t < n; t++) g.id[t] = t, g.index.set([4 * t, 4 * t + 2, 4 * t + 1, 4 * t + 1, 4 * t + 2, 4 * t + 3], 6 * t);
              m()
          }

          function m() {
              const d = [];
              let u = 0,
                  y = 0,
                  m = 0,
                  v = A();

              function A() {
                  const t = {
                      width: 0,
                      glyphs: []
                  };
                  return d.push(t), y = u, m = 0, t
              }
              let b = 0;
              for (; u < e.length && b < 100;) {
                  b++;
                  const t = e[u];
                  if (!v.width && w.test(t)) {
                      y = ++u, m = 0;
                      continue
                  }
                  if (a.test(t)) {
                      u++, v = A();
                      continue
                  }
                  const i = f[t];
                  if (v.glyphs.length) {
                      const t = v.glyphs[v.glyphs.length - 1][0];
                      let e = x(i.id, t.id) * p;
                      v.width += e, m += e
                  }
                  v.glyphs.push([i, v.width]);
                  let h = 0;
                  if (w.test(t) ? (y = u, m = 0, h += l * s) : h += o * s, h += i.xadvance * p, v.width += h, m += h, v.width > n) {
                      if (c && v.glyphs.length > 1) {
                          v.width -= h, v.glyphs.pop(), v = A();
                          continue
                      }
                      if (!c && m !== v.width) {
                          let t = u - y + 1;
                          v.glyphs.splice(-t, t), u = y, v.width -= m, v = A();
                          continue
                      }
                  }
                  u++
              }
              v.width || d.pop(),
                  function(e) {
                      const n = t.common.scaleW,
                          o = t.common.scaleH;
                      let l = .07 * s,
                          c = 0;
                      for (let t = 0; t < e.length; t++) {
                          let r = e[t];
                          for (let t = 0; t < r.glyphs.length; t++) {
                              const e = r.glyphs[t][0];
                              let s = r.glyphs[t][1];
                              if ("center" === i ? s -= .5 * r.width : "right" === i && (s -= r.width), w.test(e.char)) continue;
                              s += e.xoffset * p, l -= e.yoffset * p ;
                              let h = e.width * p,
                                  f = e.height * p;
                              g.position.set([s, l - f, 0, s, l, 0, s + h, l - f, 0, s + h, l, 0], 4 * c * 3);
                              let d = e.x / n,
                                  u = e.width / n,
                                  a = 1 - e.y / o,
                                  y = e.height / o;
                              g.uv.set([d, a - y, d, a, d + u, a - y, d + u, a], 4 * c * 2), l += e.yoffset * p, c++
                          }
                          l -= s * h
                      }
                      r.buffers = g, r.numLines = e.length, r.height = r.numLines * s * h
                  }(d)
          }

          function x(e, n) {
              for (let i = 0; i < t.kernings.length; i++) {
                  let s = t.kernings[i];
                  if (!(s.first < e) && !(s.second < n)) return s.first > e ? 0 : s.first === e && s.second > n ? 0 : s.amount
              }
              return 0
          }
          f = {}, t.chars.forEach(t => f[t.char] = t), y(), this.resize = function(t) {
              ({
                  width: n
              } = t), m()
          }, this.update = function(t) {
              ({
                  text: e
              } = t), y()
          }
      }
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Text = t;
  }, {}],
  "emvT": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.NormalProgram = i;
      var n = require("../core/Program.js");
      const r = "\n    precision highp float;\n    precision highp int;\n\n    attribute vec3 position;\n    attribute vec3 normal;\n\n    uniform mat3 normalMatrix;\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    varying vec3 vNormal;\n\n    void main() {\n        vNormal = normalize(normalMatrix * normal);\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n",
          o = "\n    precision highp float;\n    precision highp int;\n\n    varying vec3 vNormal;\n\n    void main() {\n        gl_FragColor.rgb = normalize(vNormal);\n        gl_FragColor.a = 1.0;\n    }\n";

      function i(i) {
          return new n.Program(i, {
              vertex: r,
              fragment: o,
              cullFace: null
          })
      }
  }, {
      "../core/Program.js": "bbEx"
  }],
  "exaR": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Flowmap = void 0;
      var e = require("../core/RenderTarget.js"),
          r = require("../core/Program.js"),
          t = require("../core/Mesh.js"),
          n = require("../math/Vec2.js"),
          o = require("./Triangle.js");
      class s {
          constructor(s, {
              size: l = 128,
              falloff: u = .3,
              alpha: c = 1,
              dissipation: m = .98,
              type: v
          } = {}) {
              const p = this;
              this.gl = s, this.uniform = {
                      value: null
                  }, this.mask = {
                      read: null,
                      write: null,
                      swap: () => {
                          let e = p.mask.read;
                          p.mask.read = p.mask.write, p.mask.write = e, p.uniform.value = p.mask.read.texture
                      }
                  },
                  function() {
                      v || (v = s.HALF_FLOAT || s.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES);
                      let r = (() => s.renderer.isWebgl2 ? s.LINEAR : s.renderer.extensions[`OES_texture_${v===s.FLOAT?"":"half_"}float_linear`] ? s.LINEAR : s.NEAREST)();
                      const t = {
                          width: l,
                          height: l,
                          type: v,
                          format: s.RGBA,
                          internalFormat: s.renderer.isWebgl2 ? v === s.FLOAT ? s.RGBA32F : s.RGBA16F : s.RGBA,
                          minFilter: r,
                          depth: !1
                      };
                      p.mask.read = new e.RenderTarget(s, t), p.mask.write = new e.RenderTarget(s, t), p.mask.swap()
                  }(), this.aspect = 1, this.mouse = new n.Vec2, this.velocity = new n.Vec2, this.mesh = new t.Mesh(s, {
                      geometry: new o.Triangle(s),
                      program: new r.Program(s, {
                          vertex: a,
                          fragment: i,
                          uniforms: {
                              tMap: p.uniform,
                              uFalloff: {
                                  value: .5 * u
                              },
                              uAlpha: {
                                  value: c
                              },
                              uDissipation: {
                                  value: m
                              },
                              uAspect: {
                                  value: 1
                              },
                              uMouse: {
                                  value: p.mouse
                              },
                              uVelocity: {
                                  value: p.velocity
                              }
                          },
                          depthTest: !1
                      })
                  })
          }
          update() {
              this.mesh.program.uniforms.uAspect.value = this.aspect, this.gl.renderer.render({
                  scene: this.mesh,
                  target: this.mask.write,
                  clear: !1
              }), this.mask.swap()
          }
      }
      exports.Flowmap = s;
      const a = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
          i = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n\n    uniform float uFalloff;\n    uniform float uAlpha;\n    uniform float uDissipation;\n    \n    uniform float uAspect;\n    uniform vec2 uMouse;\n    uniform vec2 uVelocity;\n\n    varying vec2 vUv;\n\n    void main() {\n        vec4 color = texture2D(tMap, vUv) * uDissipation;\n\n        vec2 cursor = vUv - uMouse;\n        cursor.x *= uAspect;\n\n        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));\n        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;\n\n        color.rgb = mix(color.rgb, stamp, vec3(falloff));\n\n        gl_FragColor = color;\n    }\n";
  }, {
      "../core/RenderTarget.js": "l5Ki",
      "../core/Program.js": "bbEx",
      "../core/Mesh.js": "u77p",
      "../math/Vec2.js": "eUFA",
      "./Triangle.js": "V0dO"
  }],
  "rrR8": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.GPGPU = void 0;
      var e = require("../core/Program.js"),
          t = require("../core/Mesh.js"),
          r = require("../core/Texture.js"),
          i = require("../core/RenderTarget.js"),
          s = require("./Triangle.js");
      class n {
          constructor(e, {
              data: t = new Float32Array(16),
              geometry: n = new s.Triangle(e),
              type: a
          }) {
              this.gl = e;
              const o = t;
              this.passes = [], this.geometry = n, this.dataLength = o.length / 4, this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2)), this.coords = new Float32Array(2 * this.dataLength);
              for (let r = 0; r < this.dataLength; r++) {
                  const e = r % this.size / this.size,
                      t = Math.floor(r / this.size) / this.size;
                  this.coords.set([e, t], 2 * r)
              }
              const h = (() => {
                  if (o.length === this.size * this.size * 4) return o; {
                      const e = new Float32Array(this.size * this.size * 4);
                      return e.set(o), e
                  }
              })();
              this.uniform = {
                  value: new r.Texture(e, {
                      image: h,
                      target: e.TEXTURE_2D,
                      type: e.FLOAT,
                      format: e.RGBA,
                      internalFormat: e.renderer.isWebgl2 ? e.RGBA32F : e.RGBA,
                      wrapS: e.CLAMP_TO_EDGE,
                      wrapT: e.CLAMP_TO_EDGE,
                      generateMipmaps: !1,
                      minFilter: e.NEAREST,
                      magFilter: e.NEAREST,
                      width: this.size,
                      flipY: !1
                  })
              };
              const l = {
                  width: this.size,
                  height: this.size,
                  type: a || e.HALF_FLOAT || e.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES,
                  format: e.RGBA,
                  internalFormat: e.renderer.isWebgl2 ? a === e.FLOAT ? e.RGBA32F : e.RGBA16F : e.RGBA,
                  minFilter: e.NEAREST,
                  depth: !1,
                  unpackAlignment: 1
              };
              this.fbo = {
                  read: new i.RenderTarget(e, l),
                  write: new i.RenderTarget(e, l),
                  swap: () => {
                      let e = this.fbo.read;
                      this.fbo.read = this.fbo.write, this.fbo.write = e, this.uniform.value = this.fbo.read.texture
                  }
              }
          }
          addPass({
              vertex: r = a,
              fragment: i = o,
              uniforms: s = {},
              textureUniform: n = "tMap",
              enabled: h = !0
          } = {}) {
              s[n] = this.uniform;
              const l = new e.Program(this.gl, {
                      vertex: r,
                      fragment: i,
                      uniforms: s
                  }),
                  g = {
                      mesh: new t.Mesh(this.gl, {
                          geometry: this.geometry,
                          program: l
                      }),
                      program: l,
                      uniforms: s,
                      enabled: h,
                      textureUniform: n
                  };
              return this.passes.push(g), g
          }
          render() {
              this.passes.filter(e => e.enabled).forEach((e, t) => {
                  this.gl.renderer.render({
                      scene: e.mesh,
                      target: this.fbo.write,
                      clear: !1
                  }), this.fbo.swap()
              })
          }
      }
      exports.GPGPU = n;
      const a = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
          o = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n";
  }, {
      "../core/Program.js": "bbEx",
      "../core/Mesh.js": "u77p",
      "../core/Texture.js": "dA10",
      "../core/RenderTarget.js": "l5Ki",
      "./Triangle.js": "V0dO"
  }],
  "lEWe": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Polyline = void 0;
      var t = require("../core/Geometry.js"),
          e = require("../core/Program.js"),
          n = require("../core/Mesh.js"),
          r = require("../math/Vec2.js"),
          i = require("../math/Vec3.js"),
          o = require("../math/Color.js");
      const s = new i.Vec3;
      class a {
          constructor(i, {
              points: s,
              vertex: a = u,
              fragment: h = c,
              uniforms: v = {},
              attributes: l = {}
          }) {
              this.gl = i, this.points = s, this.count = s.length, this.position = new Float32Array(3 * this.count * 2), this.prev = new Float32Array(3 * this.count * 2), this.next = new Float32Array(3 * this.count * 2);
              const p = new Float32Array(1 * this.count * 2),
                  m = new Float32Array(2 * this.count * 2),
                  d = new Uint16Array(3 * (this.count - 1) * 2);
              for (let t = 0; t < this.count; t++) {
                  p.set([-1, 1], 2 * t);
                  const e = t / (this.count - 1);
                  if (m.set([0, e, 1, e], 4 * t), t === this.count - 1) continue;
                  const n = 2 * t;
                  d.set([n + 0, n + 1, n + 2], 3 * (n + 0)), d.set([n + 2, n + 1, n + 3], 3 * (n + 1))
              }
              const y = this.geometry = new t.Geometry(i, Object.assign(l, {
                  position: {
                      size: 3,
                      data: this.position
                  },
                  prev: {
                      size: 3,
                      data: this.prev
                  },
                  next: {
                      size: 3,
                      data: this.next
                  },
                  side: {
                      size: 1,
                      data: p
                  },
                  uv: {
                      size: 2,
                      data: m
                  },
                  index: {
                      size: 1,
                      data: d
                  }
              }));
              this.updateGeometry(), v.uResolution || (this.resolution = v.uResolution = {
                  value: new r.Vec2
              }), v.uDPR || (this.dpr = v.uDPR = {
                  value: 1
              }), v.uThickness || (this.thickness = v.uThickness = {
                  value: 1
              }), v.uColor || (this.color = v.uColor = {
                  value: new o.Color("#000")
              }), v.uMiter || (this.miter = v.uMiter = {
                  value: 1
              }), this.resize();
              const x = this.program = new e.Program(i, {
                  vertex: a,
                  fragment: h,
                  uniforms: v
              });
              this.mesh = new n.Mesh(i, {
                  geometry: y,
                  program: x
              })
          }
          updateGeometry() {
              this.points.forEach((t, e) => {
                  t.toArray(this.position, 3 * e * 2), t.toArray(this.position, 3 * e * 2 + 3), e ? (t.toArray(this.next, 3 * (e - 1) * 2), t.toArray(this.next, 3 * (e - 1) * 2 + 3)) : (s.copy(t).sub(this.points[e + 1]).add(t), s.toArray(this.prev, 3 * e * 2), s.toArray(this.prev, 3 * e * 2 + 3)), e === this.points.length - 1 ? (s.copy(t).sub(this.points[e - 1]).add(t), s.toArray(this.next, 3 * e * 2), s.toArray(this.next, 3 * e * 2 + 3)) : (t.toArray(this.prev, 3 * (e + 1) * 2), t.toArray(this.prev, 3 * (e + 1) * 2 + 3))
              }), this.geometry.attributes.position.needsUpdate = !0, this.geometry.attributes.prev.needsUpdate = !0, this.geometry.attributes.next.needsUpdate = !0
          }
          resize() {
              this.resolution && this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height), this.dpr && (this.dpr.value = this.gl.renderer.dpr)
          }
      }
      exports.Polyline = a;
      const u = "\n    precision highp float;\n\n    attribute vec3 position;\n    attribute vec3 next;\n    attribute vec3 prev;\n    attribute vec2 uv;\n    attribute float side;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n    uniform vec2 uResolution;\n    uniform float uDPR;\n    uniform float uThickness;\n    uniform float uMiter;\n\n    varying vec2 vUv;\n\n    vec4 getPosition() {\n        mat4 mvp = projectionMatrix * modelViewMatrix;\n        vec4 current = mvp * vec4(position, 1);\n        vec4 nextPos = mvp * vec4(next, 1);\n        vec4 prevPos = mvp * vec4(prev, 1);\n\n        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n        vec2 currentScreen = current.xy / current.w * aspect;\n        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n    \n        vec2 dir1 = normalize(currentScreen - prevScreen);\n        vec2 dir2 = normalize(nextScreen - currentScreen);\n        vec2 dir = normalize(dir1 + dir2);\n    \n        vec2 normal = vec2(-dir.y, dir.x);\n        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n        normal /= aspect;\n\n        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n        float pixelWidth = current.w * pixelWidthRatio;\n        normal *= pixelWidth * uThickness;\n        current.xy -= normal * side;\n    \n        return current;\n    }\n\n    void main() {\n        vUv = uv;\n        gl_Position = getPosition();\n    }\n",
          c = "\n    precision highp float;\n\n    uniform vec3 uColor;\n    \n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor.rgb = uColor;\n        gl_FragColor.a = 1.0;\n    }\n";
  }, {
      "../core/Geometry.js": "scsK",
      "../core/Program.js": "bbEx",
      "../core/Mesh.js": "u77p",
      "../math/Vec2.js": "eUFA",
      "../math/Vec3.js": "NC5f",
      "../math/Color.js": "HHJD"
  }],
  "k8j3": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.Shadow = void 0;
      var r = require("../core/Camera.js"),
          e = require("../core/Program.js"),
          t = require("../core/RenderTarget.js");
      class i {
          constructor(i, {
              light: n = new r.Camera(i),
              width: s = 1024,
              height: c = s
          }) {
              this.gl = i, this.light = n, this.target = new t.RenderTarget(i, {
                  width: s,
                  height: c
              }), this.depthProgram = new e.Program(i, {
                  vertex: a,
                  fragment: o,
                  cullFace: null
              }), this.castMeshes = []
          }
          add({
              mesh: r,
              receive: t = !0,
              cast: i = !0,
              vertex: n = a,
              fragment: s = o,
              uniformProjection: c = "shadowProjectionMatrix",
              uniformView: h = "shadowViewMatrix",
              uniformTexture: g = "tShadow"
          }) {
              t && !r.program.uniforms[c] && (r.program.uniforms[c] = {
                  value: this.light.projectionMatrix
              }, r.program.uniforms[h] = {
                  value: this.light.viewMatrix
              }, r.program.uniforms[g] = {
                  value: this.target.texture
              }), i && (this.castMeshes.push(r), r.colorProgram = r.program, r.depthProgram || (r.depthProgram = n !== a || s !== o ? new e.Program(gl, {
                  vertex: n,
                  fragment: s,
                  cullFace: null
              }) : this.depthProgram))
          }
          render({
              scene: r
          }) {
              r.traverse(r => {
                  r.draw && (~this.castMeshes.indexOf(r) ? r.program = r.depthProgram : (r.isForceVisibility = r.visible, r.visible = !1))
              }), this.gl.renderer.render({
                  scene: r,
                  camera: this.light,
                  target: this.target
              }), r.traverse(r => {
                  r.draw && (~this.castMeshes.indexOf(r) ? r.program = r.colorProgram : r.visible = r.isForceVisibility)
              })
          }
      }
      exports.Shadow = i;
      const a = "\n    attribute vec3 position;\n    attribute vec2 uv;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    void main() {\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n",
          o = "\n    precision highp float;\n\n    vec4 packRGBA (float v) {\n        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);\n        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;\n        return pack;\n    }\n\n    void main() {\n        gl_FragColor = packRGBA(gl_FragCoord.z);\n    }\n";
  }, {
      "../core/Camera.js": "vwx8",
      "../core/Program.js": "bbEx",
      "../core/RenderTarget.js": "l5Ki"
  }],
  "uir9": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.KTXTexture = void 0;
      var e = require("../core/Texture.js");
      class t extends e.Texture {
          constructor(e, {
              buffer: t,
              wrapS: r = e.CLAMP_TO_EDGE,
              wrapT: s = e.CLAMP_TO_EDGE,
              anisotropy: i = 0
          } = {}) {
              if (super(e, {
                      generateMipmaps: !1,
                      wrapS: r,
                      wrapT: s,
                      anisotropy: i
                  }), t) return this.parseBuffer(t)
          }
          parseBuffer(e) {
              const t = new r(e);
              t.mipmaps.isCompressedTexture = !0, this.image = t.mipmaps, this.internalFormat = t.glInternalFormat, this.minFilter = t.numberOfMipmapLevels > 1 ? this.gl.NEAREST_MIPMAP_LINEAR : this.gl.LINEAR
          }
      }

      function r(e) {
          const t = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
              r = new Uint8Array(e, 0, 12);
          for (let u = 0; u < r.length; u++)
              if (r[u] !== t[u]) return console.error("File missing KTX identifier");
          const s = Uint32Array.BYTES_PER_ELEMENT,
              i = new DataView(e, 12, 13 * s),
              n = 67305985 === i.getUint32(0, !0);
          if (0 !== i.getUint32(1 * s, n)) return console.warn("only compressed formats currently supported");
          this.glInternalFormat = i.getUint32(4 * s, n);
          let a = i.getUint32(6 * s, n),
              o = i.getUint32(7 * s, n);
          this.numberOfFaces = i.getUint32(10 * s, n), this.numberOfMipmapLevels = Math.max(1, i.getUint32(11 * s, n));
          const p = i.getUint32(12 * s, n);
          this.mipmaps = [];
          let m = 64 + p;
          for (let u = 0; u < this.numberOfMipmapLevels; u++) {
              const t = new Int32Array(e, m, 1)[0];
              m += 4;
              for (let r = 0; r < this.numberOfFaces; r++) {
                  const r = new Uint8Array(e, m, t);
                  this.mipmaps.push({
                      data: r,
                      width: a,
                      height: o
                  }), m += t, m += 3 - (t + 3) % 4
              }
              a >>= 1, o >>= 1
          }
      }
      exports.KTXTexture = t;
  }, {
      "../core/Texture.js": "dA10"
  }],
  "z2gF": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.TextureLoader = void 0;
      var e = require("../core/Texture.js"),
          t = require("./KTXTexture.js");
      let r = {};
      const n = [];
      class a {
          static load(n, {
              src: a,
              wrapS: s = n.CLAMP_TO_EDGE,
              wrapT: o = n.CLAMP_TO_EDGE,
              anisotropy: i = 0,
              format: p = n.RGBA,
              internalFormat: c = p,
              generateMipmaps: l = !0,
              minFilter: u = (l ? n.NEAREST_MIPMAP_LINEAR : n.LINEAR),
              magFilter: d = n.LINEAR,
              premultiplyAlpha: m = !1,
              unpackAlignment: g = 4,
              flipY: _ = !0
          } = {}) {
              const E = this.getSupportedExtensions(n);
              let x = "none";
              if ("string" == typeof a && (x = a.split(".").pop().split("?")[0].toLowerCase()), "object" == typeof a)
                  for (const e in a)
                      if (E.includes(e.toLowerCase())) {
                          x = e.toLowerCase(), a = a[e];
                          break
                      } const w = a + s + o + i + p + c + l + u + d + m + g + _ + n.renderer.id;
              if (r[w]) return r[w];
              let f;
              switch (x) {
                  case "ktx":
                  case "pvrtc":
                  case "s3tc":
                  case "etc":
                  case "etc1":
                  case "astc":
                      (f = new t.KTXTexture(n, {
                          src: a,
                          wrapS: s,
                          wrapT: o,
                          anisotropy: i
                      })).loaded = this.loadKTX(a, f);
                      break;
                  case "webp":
                  case "jpg":
                  case "jpeg":
                  case "png":
                      (f = new e.Texture(n, {
                          wrapS: s,
                          wrapT: o,
                          anisotropy: i,
                          format: p,
                          internalFormat: c,
                          generateMipmaps: l,
                          minFilter: u,
                          magFilter: d,
                          premultiplyAlpha: m,
                          unpackAlignment: g,
                          flipY: _
                      })).loaded = this.loadImage(n, a, f);
                      break;
                  default:
                      console.warn("No supported format supplied"), f = new e.Texture(n)
              }
              return f.ext = x, r[w] = f, f
          }
          static getSupportedExtensions(e) {
              if (n.length) return n;
              const t = {
                  pvrtc: e.renderer.getExtension("WEBGL_compressed_texture_pvrtc") || e.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                  s3tc: e.renderer.getExtension("WEBGL_compressed_texture_s3tc") || e.renderer.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
                  etc: e.renderer.getExtension("WEBGL_compressed_texture_etc"),
                  etc1: e.renderer.getExtension("WEBGL_compressed_texture_etc1"),
                  astc: e.renderer.getExtension("WEBGL_compressed_texture_astc")
              };
              for (const r in t) t[r] && n.push(r);
              return s && n.push("webp"), n.push("png", "jpg"), n
          }
          static loadKTX(e, t) {
              return fetch(e).then(e => e.arrayBuffer()).then(e => t.parseBuffer(e))
          }
          static loadImage(e, t, r) {
              return i(t).then(t => (o(t.width) && o(t.height) || (r.generateMipmaps && (r.generateMipmaps = !1), r.minFilter === e.NEAREST_MIPMAP_LINEAR && (r.minFilter = e.LINEAR), r.wrapS === e.REPEAT && (r.wrapS = r.wrapT = e.CLAMP_TO_EDGE)), r.image = t, r.onUpdate = (() => {
                  t.close && t.close(), r.onUpdate = null
              }), t))
          }
          static clearCache() {
              r = {}
          }
      }

      function s() {
          return 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
      }

      function o(e) {
          return Math.log2(e) % 1 == 0
      }

      function i(e) {
          return new Promise(t => {
              const r = new Image;
              r.crossOrigin = "", r.src = e;
              const n = navigator.userAgent.toLowerCase().includes("chrome");
              window.createImageBitmap && n ? r.onload = (() => {
                  createImageBitmap(r, {
                      imageOrientation: "flipY",
                      premultiplyAlpha: "none"
                  }).then(e => {
                      t(e)
                  })
              }) : r.onload = (() => t(r))
          })
      }
      exports.TextureLoader = a;
  }, {
      "../core/Texture.js": "dA10",
      "./KTXTexture.js": "uir9"
  }],
  "in07": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.GLTFAnimation = void 0;
      var e = require("../math/Vec3.js"),
          t = require("../math/Quat.js");
      const r = new e.Vec3,
          a = new e.Vec3,
          i = new e.Vec3,
          n = new e.Vec3,
          o = new t.Quat,
          s = new t.Quat,
          l = new t.Quat,
          h = new t.Quat;
      class u {
          constructor(e, t = 1) {
              this.data = e, this.elapsed = 0, this.weight = t, this.loop = !0, this.duration = e.reduce((e, {
                  times: t
              }) => Math.max(e, t[t.length - 1]), 0)
          }
          update(e = 1, t) {
              const u = t ? 1 : this.weight / e,
                  c = this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration);
              this.data.forEach(({
                  node: e,
                  transform: t,
                  interpolation: p,
                  times: m,
                  values: d
              }) => {
                  const f = Math.max(1, m.findIndex(e => e > c)) - 1,
                      w = f + 1;
                  let A = (c - m[f]) / (m[w] - m[f]);
                  "STEP" === p && (A = 0);
                  let y = r,
                      x = a,
                      I = i,
                      Q = n,
                      V = 3;
                  "quaternion" === t && (y = o, x = s, I = l, Q = h, V = 4), "CUBICSPLINE" === p ? (y.fromArray(d, f * V * 3 + 1 * V), x.fromArray(d, f * V * 3 + 2 * V), I.fromArray(d, w * V * 3 + 0 * V), Q.fromArray(d, w * V * 3 + 1 * V), y = this.cubicSplineInterpolate(A, y, x, I, Q), 4 === V && y.normalize()) : (y.fromArray(d, f * V), Q.fromArray(d, w * V), 4 === V ? y.slerp(Q, A) : y.lerp(Q, A)), 4 === V ? e[t].slerp(y, u) : e[t].lerp(y, u)
              })
          }
          cubicSplineInterpolate(e, t, r, a, i) {
              const n = e * e,
                  o = n * e,
                  s = 3 * n - 2 * o,
                  l = o - n,
                  h = 1 - s,
                  u = l - n + e;
              for (let c = 0; c < t.length; c++) t[c] = h * t[c] + u * (1 - e) * r[c] + s * i[c] + l * e * a[c];
              return t
          }
      }
      exports.GLTFAnimation = u;
  }, {
      "../math/Vec3.js": "NC5f",
      "../math/Quat.js": "uHNF"
  }],
  "ehrO": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.GLTFSkin = void 0;
      var e = require("../core/Mesh.js"),
          t = require("../math/Mat4.js"),
          r = require("../core/Texture.js");
      const s = new t.Mat4,
          i = new t.Mat4;
      class o extends e.Mesh {
          constructor(e, {
              skeleton: t,
              geometry: r,
              program: s,
              mode: i = e.TRIANGLES
          } = {}) {
              super(e, {
                  geometry: r,
                  program: s,
                  mode: i
              }), this.skeleton = t, this.program = s, this.createBoneTexture(), this.animations = []
          }
          createBoneTexture() {
              if (!this.skeleton.joints.length) return;
              const e = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(4 * this.skeleton.joints.length)) / Math.LN2)));
              this.boneMatrices = new Float32Array(e * e * 4), this.boneTextureSize = e, this.boneTexture = new r.Texture(this.gl, {
                  image: this.boneMatrices,
                  generateMipmaps: !1,
                  type: this.gl.FLOAT,
                  internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
                  flipY: !1,
                  width: e
              })
          }
          updateUniforms() {
              this.skeleton.joints.forEach((e, t) => {
                  s.multiply(e.worldMatrix, e.bindInverse), this.boneMatrices.set(s, 16 * t)
              }), this.boneTexture && (this.boneTexture.needsUpdate = !0)
          }
          draw({
              camera: e
          } = {}) {
              this.program.uniforms.boneTexture || Object.assign(this.program.uniforms, {
                  boneTexture: {
                      value: this.boneTexture
                  },
                  boneTextureSize: {
                      value: this.boneTextureSize
                  }
              }), this.updateUniforms();
              const t = this.worldMatrix;
              this.worldMatrix = i, super.draw({
                  camera: e
              }), this.worldMatrix = t
          }
      }
      exports.GLTFSkin = o;
  }, {
      "../core/Mesh.js": "u77p",
      "../math/Mat4.js": "M3g6",
      "../core/Texture.js": "dA10"
  }],
  "yLnd": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.GLTFLoader = void 0;
      var e = require("../core/Geometry.js"),
          t = require("../core/Transform.js"),
          s = require("../core/Texture.js"),
          r = require("../core/Mesh.js"),
          a = require("./GLTFAnimation.js"),
          n = require("./GLTFSkin.js"),
          i = require("../math/Mat4.js"),
          o = require("./NormalProgram.js");
      const c = {
              5121: Uint8Array,
              5122: Int16Array,
              5123: Uint16Array,
              5125: Uint32Array,
              5126: Float32Array,
              "image/jpeg": Uint8Array,
              "image/png": Uint8Array
          },
          u = {
              SCALAR: 1,
              VEC2: 2,
              VEC3: 3,
              VEC4: 4,
              MAT2: 4,
              MAT3: 9,
              MAT4: 16
          },
          m = {
              POSITION: "position",
              NORMAL: "normal",
              TANGENT: "tangent",
              TEXCOORD_0: "uv",
              TEXCOORD_1: "uv2",
              COLOR_0: "color",
              WEIGHTS_0: "skinWeight",
              JOINTS_0: "skinIndex"
          },
          l = {
              translation: "position",
              rotation: "quaternion",
              scale: "scale"
          };
      class p {
          static async load(e, t) {
              const s = t.split("/").slice(0, -1).join("/") + "/",
                  r = await this.parseDesc(t);
              return await this.parse(e, r, s)
          }
          static async parse(e, t, s) {
              (void 0 === t.asset || t.asset.version[0] < 2) && console.warn("Only GLTF >=2.0 supported. Attempting to parse.");
              const r = await this.loadBuffers(t, s);
              e.renderer.bindVertexArray(null);
              const a = this.parseBufferViews(e, t, r),
                  n = this.parseImages(e, t, s, a),
                  i = this.parseTextures(e, t, n),
                  o = this.parseMaterials(e, t, i),
                  c = this.parseSkins(e, t, a),
                  u = this.parseMeshes(e, t, a, o, c),
                  m = this.parseNodes(e, t, u, c);
              this.populateSkins(c, m);
              const l = this.parseAnimations(e, t, m, a),
                  p = this.parseScenes(t, m),
                  f = p[t.scene];
              for (let d = m.length; d >= 0; d--) m[d] || m.splice(d, 1);
              return {
                  json: t,
                  buffers: r,
                  bufferViews: a,
                  images: n,
                  textures: i,
                  materials: o,
                  meshes: u,
                  nodes: m,
                  animations: l,
                  scenes: p,
                  scene: f
              }
          }
          static async parseDesc(e) {
              return e.match(/\.glb$/) ? await fetch(e).then(e => e.arrayBuffer()).then(e => this.unpackGLB(e)) : await fetch(e).then(e => e.json())
          }
          static unpackGLB(e) {
              const t = new Uint32Array(e, 0, 3);
              if (1179937895 !== t[0]) throw new Error("Invalid glTF asset.");
              if (2 !== t[1]) throw new Error(`Unsupported glTF binary version, "${t[1]}".`);
              const s = new Uint32Array(e, 12, 2),
                  r = s[0];
              if (1313821514 !== s[1]) throw new Error("Unexpected GLB layout.");
              const a = (new TextDecoder).decode(e.slice(20, 20 + r)),
                  n = JSON.parse(a);
              if (20 + r === e.byteLength) return n;
              const i = new Uint32Array(e, 20 + r, 2);
              if (5130562 !== i[1]) throw new Error("Unexpected GLB layout.");
              const o = 20 + r + 8,
                  c = i[0],
                  u = e.slice(o, o + c);
              return n.buffers[0].binary = u, n
          }
          static resolveURI(e, t) {
              return "string" != typeof e || "" === e ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) ? e : /^data:.*,.*$/i.test(e) ? e : /^blob:.*$/i.test(e) ? e : t + e)
          }
          static async loadBuffers(e, t) {
              return e.buffers ? await Promise.all(e.buffers.map(e => {
                  if (e.binary) return e.binary;
                  const s = this.resolveURI(e.uri, t);
                  return fetch(s).then(e => e.arrayBuffer())
              })) : null
          }
          static parseBufferViews(e, t, s) {
              if (!t.bufferViews) return null;
              const r = t.bufferViews.map(e => Object.assign({}, e));
              return t.meshes && t.meshes.forEach(({
                  primitives: s
              }) => {
                  s.forEach(({
                      attributes: s,
                      indices: a
                  }) => {
                      for (let e in s) r[t.accessors[s[e]].bufferView].isAttribute = !0;
                      void 0 !== a && (r[t.accessors[a].bufferView].isAttribute = !0, r[t.accessors[a].bufferView].target = e.ELEMENT_ARRAY_BUFFER)
                  })
              }), t.accessors.forEach(({
                  bufferView: e,
                  componentType: t
              }) => {
                  r[e].componentType = t
              }), t.images && t.images.forEach(({
                  uri: e,
                  bufferView: t,
                  mimeType: s
              }) => {
                  void 0 !== t && (r[t].mimeType = s)
              }), r.forEach(({
                  buffer: t,
                  byteOffset: a = 0,
                  byteLength: n,
                  byteStride: i,
                  target: o = e.ARRAY_BUFFER,
                  name: u,
                  extensions: m,
                  extras: l,
                  componentType: p,
                  mimeType: f,
                  isAttribute: d
              }, h) => {
                  const y = c[p || f],
                      x = y.BYTES_PER_ELEMENT,
                      b = new y(s[t], a, n / x);
                  if (r[h].data = b, !d) return;
                  const g = e.createBuffer();
                  e.bindBuffer(o, g), e.renderer.state.boundBuffer = g, e.bufferData(o, b, e.STATIC_DRAW), r[h].buffer = g
              }), r
          }
          static parseImages(e, t, s, r) {
              return t.images ? t.images.map(({
                  uri: e,
                  bufferView: t,
                  mimeType: a,
                  name: n
              }) => {
                  const i = new Image;
                  if (i.name = n, e) i.src = this.resolveURI(e, s);
                  else if (void 0 !== t) {
                      const {
                          data: e
                      } = r[t], s = new Blob([e], {
                          type: a
                      });
                      i.src = URL.createObjectURL(s)
                  }
                  return i.ready = new Promise(e => {
                      i.onload = (() => e())
                  }), i
              }) : null
          }
          static parseTextures(e, t, r) {
              return t.textures ? t.textures.map(({
                  sampler: a,
                  source: n,
                  name: i,
                  extensions: o,
                  extras: c
              }) => {
                  const u = {
                          flipY: !1,
                          wrapS: e.REPEAT,
                          wrapT: e.REPEAT
                      },
                      m = void 0 !== a ? t.samplers[a] : null;
                  m && ["magFilter", "minFilter", "wrapS", "wrapT"].forEach(e => {
                      m[e] && (u[e] = m[e])
                  });
                  const l = new s.Texture(e, u);
                  l.name = i;
                  const p = r[n];
                  return p.ready.then(() => l.image = p), l
              }) : null
          }
          static parseMaterials(e, t, s) {
              return t.materials ? t.materials.map(({
                  name: e,
                  extensions: t,
                  extras: r,
                  pbrMetallicRoughness: a = {},
                  normalTexture: n,
                  occlusionTexture: i,
                  emissiveTexture: o,
                  emissiveFactor: c = [0, 0, 0],
                  alphaMode: u = "OPAQUE",
                  alphaCutoff: m = .5,
                  doubleSided: l = !1
              }) => {
                  const {
                      baseColorFactor: p = [1, 1, 1, 1],
                      baseColorTexture: f,
                      metallicFactor: d = 1,
                      roughnessFactor: h = 1,
                      metallicRoughnessTexture: y
                  } = a;
                  return f && (f.texture = s[f.index]), n && (n.texture = s[n.index]), y && (y.texture = s[y.index]), i && (i.texture = s[i.index]), o && (o.texture = s[o.index]), {
                      name: e,
                      baseColorFactor: p,
                      baseColorTexture: f,
                      metallicFactor: d,
                      roughnessFactor: h,
                      metallicRoughnessTexture: y,
                      normalTexture: n,
                      occlusionTexture: i,
                      emissiveTexture: o,
                      emissiveFactor: c,
                      alphaMode: u,
                      alphaCutoff: m,
                      doubleSided: l
                  }
              }) : null
          }
          static parseSkins(e, t, s) {
              return t.skins ? t.skins.map(({
                  inverseBindMatrices: e,
                  skeleton: r,
                  joints: a
              }) => ({
                  inverseBindMatrices: this.parseAccessor(e, t, s),
                  skeleton: r,
                  joints: a
              })) : null
          }
          static parseMeshes(e, t, s, a, i) {
              return t.meshes ? t.meshes.map(({
                  primitives: o,
                  weights: c,
                  name: u,
                  extensions: m,
                  extras: l
              }, p) => {
                  let f = 0,
                      d = !1;
                  return t.nodes && t.nodes.forEach(({
                      mesh: e,
                      skin: t
                  }) => {
                      e === p && (f++, void 0 !== t && (d = t))
                  }), {
                      primitives: o = this.parsePrimitives(e, o, t, s, a, f).map(({
                          geometry: t,
                          program: s,
                          mode: a
                      }) => {
                          const o = "number" == typeof d ? new n.GLTFSkin(e, {
                              skeleton: i[d],
                              geometry: t,
                              program: s,
                              mode: a
                          }) : new r.Mesh(e, {
                              geometry: t,
                              program: s,
                              mode: a
                          });
                          return o.name = u, o.geometry.isInstanced && (o.numInstances = f, o.frustumCulled = !1), o
                      }),
                      weights: c,
                      name: u
                  }
              }) : null
          }
          static parsePrimitives(t, s, r, a, n, i) {
              return s.map(({
                  attributes: s,
                  indices: c,
                  material: u,
                  mode: l = 4,
                  targets: p,
                  extensions: f,
                  extras: d
              }) => {
                  const h = new e.Geometry(t);
                  for (let e in s) h.addAttribute(m[e], this.parseAccessor(s[e], r, a));
                  void 0 !== c && h.addAttribute("index", this.parseAccessor(c, r, a)), i > 1 && h.addAttribute("instanceMatrix", {
                      instanced: 1,
                      size: 16,
                      data: new Float32Array(16 * i)
                  });
                  const y = new o.NormalProgram(t);
                  return void 0 !== u && (y.gltfMaterial = n[u]), {
                      geometry: h,
                      program: y,
                      mode: l
                  }
              })
          }
          static parseAccessor(e, t, s) {
              const {
                  bufferView: r,
                  byteOffset: a = 0,
                  componentType: n,
                  normalized: i = !1,
                  count: o,
                  type: c,
                  min: m,
                  max: l,
                  sparse: p
              } = t.accessors[e], {
                  data: f,
                  buffer: d,
                  byteStride: h = 0,
                  target: y
              } = s[r];
              return {
                  data: f,
                  size: u[c],
                  type: n,
                  normalized: i,
                  buffer: d,
                  stride: h,
                  offset: a,
                  count: o,
                  min: m,
                  max: l
              }
          }
          static parseNodes(e, s, r, a) {
              if (!s.nodes) return null;
              const n = s.nodes.map(({
                  camera: e,
                  children: s,
                  skin: a,
                  matrix: n,
                  mesh: i,
                  rotation: o,
                  scale: c,
                  translation: u,
                  weights: m,
                  name: l,
                  extensions: p,
                  extras: f
              }) => {
                  const d = new t.Transform;
                  l && (d.name = l), n ? (d.matrix.copy(n), d.decompose()) : (o && d.quaternion.copy(o), c && d.scale.copy(c), u && d.position.copy(u), d.updateMatrix());
                  let h = !1,
                      y = !0;
                  if (void 0 !== i && r[i].primitives.forEach(e => {
                          e.geometry.isInstanced && (h = !0, e.instanceCount ? y = !1 : e.instanceCount = 0, d.matrix.toArray(e.geometry.attributes.instanceMatrix.data, 16 * e.instanceCount), e.instanceCount++, e.instanceCount === e.numInstances && (delete e.numInstances, delete e.instanceCount, e.geometry.attributes.instanceMatrix.needsUpdate = !0)), h ? y && e.setParent(d) : e.setParent(d)
                      }), h) {
                      if (!y) return null;
                      d.matrix.identity(), d.decompose()
                  }
                  return d
              });
              return s.nodes.forEach(({
                  children: e = []
              }, t) => {
                  e.forEach(e => {
                      n[e] && n[e].setParent(n[t])
                  })
              }), n
          }
          static populateSkins(e, t) {
              e && e.forEach(e => {
                  e.joints = e.joints.map((s, r) => {
                      const a = t[s];
                      return a.bindInverse = new i.Mat4(...e.inverseBindMatrices.data.slice(16 * r, 16 * (r + 1))), a
                  }), e.skeleton && (e.skeleton = t[e.skeleton])
              })
          }
          static parseAnimations(e, t, s, r) {
              return t.animations ? t.animations.map(({
                  channels: e,
                  samplers: n,
                  name: i
              }) => {
                  const o = e.map(({
                      sampler: e,
                      target: a
                  }) => {
                      const {
                          input: i,
                          interpolation: o = "LINEAR",
                          output: c
                      } = n[e], {
                          node: u,
                          path: m
                      } = a, p = s[u], f = l[m], d = this.parseAccessor(i, t, r), h = d.data.slice(d.offset / 4, d.offset / 4 + d.count * d.size), y = this.parseAccessor(c, t, r);
                      return {
                          node: p,
                          transform: f,
                          interpolation: o,
                          times: h,
                          values: y.data.slice(y.offset / 4, y.offset / 4 + y.count * y.size)
                      }
                  });
                  return {
                      name: i,
                      animation: new a.GLTFAnimation(o)
                  }
              }) : null
          }
          static parseScenes(e, t) {
              return e.scenes ? e.scenes.map(({
                  nodes: e = [],
                  name: s,
                  extensions: r,
                  extras: a
              }) => e.reduce((e, s) => (t[s] && e.push(t[s]), e), [])) : null
          }
      }
      exports.GLTFLoader = p;
  }, {
      "../core/Geometry.js": "scsK",
      "../core/Transform.js": "rLsW",
      "../core/Texture.js": "dA10",
      "../core/Mesh.js": "u77p",
      "./GLTFAnimation.js": "in07",
      "./GLTFSkin.js": "ehrO",
      "../math/Mat4.js": "M3g6",
      "./NormalProgram.js": "emvT"
  }],
  "wspk": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), Object.defineProperty(exports, "Geometry", {
          enumerable: !0,
          get: function() {
              return e.Geometry
          }
      }), Object.defineProperty(exports, "Program", {
          enumerable: !0,
          get: function() {
              return r.Program
          }
      }), Object.defineProperty(exports, "Renderer", {
          enumerable: !0,
          get: function() {
              return t.Renderer
          }
      }), Object.defineProperty(exports, "Camera", {
          enumerable: !0,
          get: function() {
              return n.Camera
          }
      }), Object.defineProperty(exports, "Transform", {
          enumerable: !0,
          get: function() {
              return u.Transform
          }
      }), Object.defineProperty(exports, "Mesh", {
          enumerable: !0,
          get: function() {
              return o.Mesh
          }
      }), Object.defineProperty(exports, "Texture", {
          enumerable: !0,
          get: function() {
              return i.Texture
          }
      }), Object.defineProperty(exports, "RenderTarget", {
          enumerable: !0,
          get: function() {
              return a.RenderTarget
          }
      }), Object.defineProperty(exports, "Color", {
          enumerable: !0,
          get: function() {
              return s.Color
          }
      }), Object.defineProperty(exports, "Euler", {
          enumerable: !0,
          get: function() {
              return c.Euler
          }
      }), Object.defineProperty(exports, "Mat3", {
          enumerable: !0,
          get: function() {
              return p.Mat3
          }
      }), Object.defineProperty(exports, "Mat4", {
          enumerable: !0,
          get: function() {
              return b.Mat4
          }
      }), Object.defineProperty(exports, "Quat", {
          enumerable: !0,
          get: function() {
              return f.Quat
          }
      }), Object.defineProperty(exports, "Vec2", {
          enumerable: !0,
          get: function() {
              return j.Vec2
          }
      }), Object.defineProperty(exports, "Vec3", {
          enumerable: !0,
          get: function() {
              return x.Vec3
          }
      }), Object.defineProperty(exports, "Vec4", {
          enumerable: !0,
          get: function() {
              return m.Vec4
          }
      }), Object.defineProperty(exports, "Plane", {
          enumerable: !0,
          get: function() {
              return l.Plane
          }
      }), Object.defineProperty(exports, "Box", {
          enumerable: !0,
          get: function() {
              return P.Box
          }
      }), Object.defineProperty(exports, "Sphere", {
          enumerable: !0,
          get: function() {
              return d.Sphere
          }
      }), Object.defineProperty(exports, "Cylinder", {
          enumerable: !0,
          get: function() {
              return y.Cylinder
          }
      }), Object.defineProperty(exports, "Triangle", {
          enumerable: !0,
          get: function() {
              return g.Triangle
          }
      }), Object.defineProperty(exports, "Torus", {
          enumerable: !0,
          get: function() {
              return O.Torus
          }
      }), Object.defineProperty(exports, "Orbit", {
          enumerable: !0,
          get: function() {
              return q.Orbit
          }
      }), Object.defineProperty(exports, "Raycast", {
          enumerable: !0,
          get: function() {
              return T.Raycast
          }
      }), Object.defineProperty(exports, "Curve", {
          enumerable: !0,
          get: function() {
              return h.Curve
          }
      }), Object.defineProperty(exports, "Post", {
          enumerable: !0,
          get: function() {
              return G.Post
          }
      }), Object.defineProperty(exports, "Skin", {
          enumerable: !0,
          get: function() {
              return C.Skin
          }
      }), Object.defineProperty(exports, "Animation", {
          enumerable: !0,
          get: function() {
              return L.Animation
          }
      }), Object.defineProperty(exports, "Text", {
          enumerable: !0,
          get: function() {
              return S.Text
          }
      }), Object.defineProperty(exports, "NormalProgram", {
          enumerable: !0,
          get: function() {
              return M.NormalProgram
          }
      }), Object.defineProperty(exports, "Flowmap", {
          enumerable: !0,
          get: function() {
              return F.Flowmap
          }
      }), Object.defineProperty(exports, "GPGPU", {
          enumerable: !0,
          get: function() {
              return R.GPGPU
          }
      }), Object.defineProperty(exports, "Polyline", {
          enumerable: !0,
          get: function() {
              return V.Polyline
          }
      }), Object.defineProperty(exports, "Shadow", {
          enumerable: !0,
          get: function() {
              return k.Shadow
          }
      }), Object.defineProperty(exports, "KTXTexture", {
          enumerable: !0,
          get: function() {
              return w.KTXTexture
          }
      }), Object.defineProperty(exports, "TextureLoader", {
          enumerable: !0,
          get: function() {
              return v.TextureLoader
          }
      }), Object.defineProperty(exports, "GLTFLoader", {
          enumerable: !0,
          get: function() {
              return A.GLTFLoader
          }
      }), Object.defineProperty(exports, "GLTFSkin", {
          enumerable: !0,
          get: function() {
              return B.GLTFSkin
          }
      });
      var e = require("./core/Geometry.js"),
          r = require("./core/Program.js"),
          t = require("./core/Renderer.js"),
          n = require("./core/Camera.js"),
          u = require("./core/Transform.js"),
          o = require("./core/Mesh.js"),
          i = require("./core/Texture.js"),
          a = require("./core/RenderTarget.js"),
          s = require("./math/Color.js"),
          c = require("./math/Euler.js"),
          p = require("./math/Mat3.js"),
          b = require("./math/Mat4.js"),
          f = require("./math/Quat.js"),
          j = require("./math/Vec2.js"),
          x = require("./math/Vec3.js"),
          m = require("./math/Vec4.js"),
          l = require("./extras/Plane.js"),
          P = require("./extras/Box.js"),
          d = require("./extras/Sphere.js"),
          y = require("./extras/Cylinder.js"),
          g = require("./extras/Triangle.js"),
          O = require("./extras/Torus.js"),
          q = require("./extras/Orbit.js"),
          T = require("./extras/Raycast.js"),
          h = require("./extras/Curve.js"),
          G = require("./extras/Post.js"),
          C = require("./extras/Skin.js"),
          L = require("./extras/Animation.js"),
          S = require("./extras/Text.js"),
          M = require("./extras/NormalProgram.js"),
          F = require("./extras/Flowmap.js"),
          R = require("./extras/GPGPU.js"),
          V = require("./extras/Polyline.js"),
          k = require("./extras/Shadow.js"),
          w = require("./extras/KTXTexture.js"),
          v = require("./extras/TextureLoader.js"),
          A = require("./extras/GLTFLoader.js"),
          B = require("./extras/GLTFSkin.js");
  }, {
      "./core/Geometry.js": "scsK",
      "./core/Program.js": "bbEx",
      "./core/Renderer.js": "jjF1",
      "./core/Camera.js": "vwx8",
      "./core/Transform.js": "rLsW",
      "./core/Mesh.js": "u77p",
      "./core/Texture.js": "dA10",
      "./core/RenderTarget.js": "l5Ki",
      "./math/Color.js": "HHJD",
      "./math/Euler.js": "cHmA",
      "./math/Mat3.js": "Whfa",
      "./math/Mat4.js": "M3g6",
      "./math/Quat.js": "uHNF",
      "./math/Vec2.js": "eUFA",
      "./math/Vec3.js": "NC5f",
      "./math/Vec4.js": "MNUD",
      "./extras/Plane.js": "oQXH",
      "./extras/Box.js": "XpKz",
      "./extras/Sphere.js": "anTj",
      "./extras/Cylinder.js": "zH7h",
      "./extras/Triangle.js": "V0dO",
      "./extras/Torus.js": "WGXO",
      "./extras/Orbit.js": "A7ci",
      "./extras/Raycast.js": "IySF",
      "./extras/Curve.js": "anbJ",
      "./extras/Post.js": "FZKK",
      "./extras/Skin.js": "LQOF",
      "./extras/Animation.js": "bktg",
      "./extras/Text.js": "V7wg",
      "./extras/NormalProgram.js": "emvT",
      "./extras/Flowmap.js": "exaR",
      "./extras/GPGPU.js": "rrR8",
      "./extras/Polyline.js": "lEWe",
      "./extras/Shadow.js": "k8j3",
      "./extras/KTXTexture.js": "uir9",
      "./extras/TextureLoader.js": "z2gF",
      "./extras/GLTFLoader.js": "yLnd",
      "./extras/GLTFSkin.js": "ehrO"
  }],
  "FOZT": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.frag = exports.vert = exports.shaderTaggedTemplateLiteral = exports.init = void 0;
      var e = function(e) {
          return document.addEventListener("DOMContentLoaded", e)
      };
      exports.init = e;
      var r = function(e) {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
          return e.reduce(function(e, r, n) {
              return e.concat(r, t[n])
          }, []).join("")
      };
      exports.shaderTaggedTemplateLiteral = r;
      var t = r;
      exports.vert = t;
      var n = r;
      exports.frag = n;
  }, {}],
  "f5LK": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.default = void 0;
      var e = require("ogl"),
          t = require("../utils"),
          r = void 0;

      function n() {
          var e = i(["\n      precision highp float;\n      precision highp int;\n\n      varying vec2 vUv;\n\n      uniform float uTime;\n      uniform vec2 uMouse;\n      uniform float uUseMouse;\n      uniform float uNoiseMultiplier;\n      uniform sampler2D uTexture;\n      uniform sampler2D uFlow;\n      uniform vec4 uRes;\n\n      void main() {\n        vec3 flow = texture2D(uFlow, vUv).rgb;\n        vec2 uv = 0.5 * gl_FragCoord.xy / uRes.xy;\n\n        vec2 baseUV = (uv - vec2(0.5)) * uRes.zw + vec2(0.5) - flow.xy / 15.0;\n        vec2 rUV = baseUV - flow.xy / 4.0;\n        vec2 gUV = baseUV - flow.xy / 100.0;\n        vec2 bUV = baseUV - flow.xy / 50.0;\n\n        vec3 tex = vec3(\n          texture2D(uTexture, rUV).r,\n          texture2D(uTexture, gUV).g,\n          texture2D(uTexture, bUV).b\n        );\n\n        gl_FragColor = vec4(tex, 1.0);\n      }\n    "]);
          return n = function() {
              return e
          }, e
      }

      function o() {
          var e = i(["\n      attribute vec2 uv;\n      attribute vec2 position;\n\n      varying vec2 vUv;\n\n      void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0.0, 1.0);\n      }\n    "]);
          return o = function() {
              return e
          }, e
      }

      function i(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
              raw: {
                  value: Object.freeze(t)
              }
          }))
      }
      var u = function(i) {
          var u = (0, t.vert)(o()),
              a = (0, t.frag)(n()),
              s = {
                  default: i.querySelector("img")
              },
              l = {
                  frameID: -1,
                  mouse: new e.Vec2(.5),
                  velocity: new e.Vec2,
                  previousTime: null,
                  previousMouse: new e.Vec2,
                  aspect: 1,
                  image: {
                      url: "",
                      size: {
                          x: s.default.offsetWidth,
                          y: s.default.offsetHeight
                      }
                  },
                  renderer: null,
                  gl: null,
                  canvas: null,
                  flowmap: null,
                  geometry: null,
                  texture: null,
                  program: null,
                  mesh: null
              },
              f = function() {
                  var e = s.default.naturalHeight / s.default.naturalWidth,
                      t = i.offsetHeight / i.offsetWidth,
                      r = i.offsetWidth / i.offsetHeight;
                  return t < e ? {
                      ah: 1,
                      av: t / e
                  } : {
                      ah: r * e,
                      av: 1
                  }
              },
              v = function() {
                  var t = f(),
                      r = t.ah,
                      n = t.av;
                  l.mesh.program.uniforms.uRes.value = new e.Vec4(i.offsetWidth, i.offsetHeight, r, n), l.renderer.setSize(i.offsetWidth, i.offsetHeight), l.aspect = i.offsetWidth / i.offsetHeight
              },
              m = function(e) {
                  var t = e.offsetX,
                      r = e.offsetY,
                      n = {
                          x: e.x + window.pageXOffset - i.offsetLeft,
                          y: e.y + window.pageYOffset - i.offsetTop
                      };
                  void 0 === e.x && (n.x = t + window.pageXOffset - i.offsetLeft, n.y = r + window.pageYOffset - i.offsetTop), l.mouse.set(n.x / l.gl.renderer.width, 1 - n.y / l.gl.renderer.height), l.previousTime || (l.previousTime = window.performance.now(), l.previousMouse.set(n.x, n.y));
                  var o = n.x - l.previousMouse.x,
                      u = n.y - l.previousMouse.y;
                  l.previousMouse.set(n.x, n.y);
                  var a = window.performance.now(),
                      s = Math.max(10.4, a - l.previousTime);
                  l.previousTime = a, l.velocity.x = o / s, l.velocity.y = u / s, l.velocity.needsUpdate = !0
              };
          return {
              init: function() {
                  l.renderer = new e.Renderer({
                      dpr: 2,
                      alpha: !0,
                      premultipliedAlpha: !0
                  }), l.gl = l.renderer.gl, l.canvas = l.gl.canvas, l.canvas.setAttribute("id", "scene"), i.appendChild(l.canvas), l.flowmap = new e.Flowmap(l.gl, {
                      size: 512,
                      falloff: .95,
                      dissipation: .96
                  }), l.geometry = new e.Geometry(l.gl, {
                      position: {
                          size: 2,
                          data: new Float32Array([-1, -1, 3, -1, -1, 3])
                      },
                      uv: {
                          size: 2,
                          data: new Float32Array([0, 0, 2, 0, 0, 2])
                      }
                  }), l.texture = new e.Texture(l.gl, {
                      minFilter: l.gl.LINEAR,
                      magFilter: l.gl.LINEAR,
                      premultiplyAlpha: !0
                  });
                  var t = new Image;
                  t.addEventListener("load", function() {
                      return l.texture.image = t
                  }), t.src = s.default.src;
                  var n = f(),
                      o = n.ah,
                      c = n.av;
                  l.program = new e.Program(l.gl, {
                      vertex: u,
                      fragment: a,
                      uniforms: {
                          uTime: {
                              value: 0
                          },
                          uMouse: {
                              value: l.mouse
                          },
                          uUseMouse: {
                              value: 1
                          },
                          uNoiseMultiplier: {
                              value: 6
                          },
                          uTexture: {
                              value: l.texture
                          },
                          uFlow: l.flowmap.uniform,
                          uRes: {
                              value: new e.Vec4(i.offsetWidth, i.offsetHeight, o, c)
                          }
                      }
                  }), l.mesh = new e.Mesh(l.gl, {
                      geometry: l.geometry,
                      program: l.program
                  }), window.addEventListener("resize", v, !1), v(), i.addEventListener("mousemove", m, !1);
                  return l.frameID = requestAnimationFrame(function e(t) {
                      l.frameID = requestAnimationFrame(e), l.velocity.needsUpdate || l.velocity.set(0), l.velocity.needsUpdate = !1, l.flowmap.aspect = l.aspect, l.flowmap.mouse.copy(l.mouse), l.flowmap.velocity.lerp(l.velocity, l.velocity.len() ? .15 : .1), l.flowmap.update(), l.program.uniforms.uTime.value = .01 * t, l.renderer.render({
                          scene: l.mesh
                      })
                  }), s.default.style.opacity = 0, r
              },
              destroy: function() {
                  return cancelAnimationFrame(l.frameID), s.default.style.opacity = "", i.removeChild(l.canvas), r
              }
          }
      };
      exports.default = u;
  }, {
      "ogl": "wspk",
      "../utils": "FOZT"
  }],
  "GQcO": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.recalibrateOrientation = exports.getViewportState = exports.unwatchViewport = exports.watchViewport = void 0;
      const t = "undefined" == typeof window;

      function i(t, i) {
          let s = 0;
          return function(...e) {
              const h = (new Date).getTime();
              if (!(h - s < t)) return s = h, i(...e)
          }
      }

      function s(t) {
          return Math.floor(t.reduce((t, i) => t + i, 0) / t.length)
      }
      class e {
          constructor() {
              t || (this.lastX = 0, this.lastY = 0, this.lastWidth = window.innerWidth, this.lastHeight = window.innerHeight, this.lastMouseX = 0, this.lastMouseY = 0, this.lastWindowX = window.screenX, this.lastWindowY = window.screenY, this.lastAlpha = 0, this.lastBeta = 0, this.lastGamma = 0, this.currAlpha = 0, this.currBeta = 0, this.currGamma = 0, this.scrollHeight = document.body.scrollHeight, this.scrollChange = !1, this.sizeChange = !1, this.mouseChange = !1, this.positionChange = !1, this.orientationChange = !1, this.devicePixelRatioChange = !1, this.currX = 0, this.currY = 0, this.currWidth = window.innerWidth, this.currHeight = window.innerHeight, this.currMouseX = 0, this.currMouseY = 0, this.currWindowX = 0, this.currDevicePixelRatio = this.lastDevicePixelRatio = Math.max(window.devicePixelRatio || 1, 1), this.mouseXVelocity = [], this.mouseYVelocity = [], this.lastMouseXVelocity = 0, this.lastMouseYVelocity = 0, this.windowXVelocity = [], this.windowYVelocity = [], this.lastWindowXVelocity = 0, this.lastWindowYVelocity = 0, this.updating = !1, this.callbacks = [], this.update = this.update.bind(this), this.handleResize = this.handleResize.bind(this), this.handleMouse = this.handleMouse.bind(this), this.handleOrientation = this.handleOrientation.bind(this), this.recalibrateOrientation = this.recalibrateOrientation.bind(this), this.formatData = this.formatData.bind(this), this.watch = this.watch.bind(this), this.unwatch = this.unwatch.bind(this), this.handleResize = i(110, this.handleResize), this.handleMouse = i(75, this.handleMouse), window.addEventListener("resize", this.handleResize), window.addEventListener("mousemove", this.handleMouse), window.addEventListener("deviceorientation", this.handleOrientation), requestAnimationFrame(this.update))
          }
          handleResize(t) {
              this.currWidth = window.innerWidth, this.currHeight = window.innerHeight
          }
          handleMouse(t) {
              this.currMouseX = t.clientX, this.currMouseY = t.clientY
          }
          handleOrientation(t) {
              this.initialAlpha || (this.initialAlpha = t.alpha), this.initialBeta || (this.initialBeta = t.beta), this.initialGamma || (this.initialGamma = t.gamma), this.currAlpha = t.alpha, this.currBeta = t.beta, this.currGamma = t.gamma
          }
          recalibrateOrientation() {
              const t = {
                  prev: {
                      alpha: this.initialAlpha,
                      beta: this.initialBeta,
                      gamma: this.initialGamma
                  }
              };
              return this.initialAlpha = this.lastAlpha, this.initialBeta = this.lastBeta, this.initialGamma = this.lastGamma, t.current = {
                  alpha: this.initialAlpha,
                  beta: this.initialBeta,
                  gamma: this.initialGamma
              }, t
          }
          formatData() {
              return {
                  scroll: {
                      changed: this.scrollChange,
                      left: Math.floor(this.lastX),
                      right: Math.floor(this.lastX + this.lastWidth),
                      top: Math.floor(this.lastY),
                      bottom: Math.floor(this.lastY + this.lastHeight),
                      velocity: {
                          x: Math.floor(this.scrollXVelocity) || 0,
                          y: Math.floor(this.scrollYVelocity) || 0
                      }
                  },
                  size: {
                      changed: this.sizeChange,
                      x: Math.floor(this.lastWidth),
                      y: Math.floor(this.lastHeight),
                      docY: Math.floor(this.scrollHeight)
                  },
                  mouse: {
                      changed: this.mouseChange,
                      x: Math.floor(this.lastMouseX),
                      y: Math.floor(this.lastMouseY),
                      velocity: {
                          x: Math.floor(this.lastMouseXVelocity) || 0,
                          y: Math.floor(this.lastMouseYVelocity) || 0
                      }
                  },
                  position: {
                      changed: this.positionChange,
                      left: Math.floor(this.lastWindowX),
                      right: Math.floor(this.lastWindowX + this.lastWidth),
                      top: Math.floor(this.lastWindowY),
                      bottom: Math.floor(this.lastWindowY + this.lastHeight),
                      velocity: {
                          x: Math.floor(this.lastWindowXVelocity) || 0,
                          y: Math.floor(this.lastWindowYVelocity) || 0
                      }
                  },
                  orientation: {
                      changed: this.orientationChange,
                      alpha: Math.floor(this.lastAlpha - this.initialAlpha) || 0,
                      beta: Math.floor(this.lastBeta - this.initialBeta) || 0,
                      gamma: Math.floor(this.lastGamma - this.initialGamma) || 0
                  },
                  devicePixelRatio: {
                      changed: this.devicePixelRatioChange,
                      ratio: this.currDevicePixelRatio
                  }
              }
          }
          update() {
              const {
                  currWidth: t,
                  currHeight: i,
                  currMouseX: e,
                  currMouseY: h,
                  currAlpha: a,
                  currBeta: o,
                  currGamma: l,
                  currDevicePixelRatio: n
              } = this;
              if (this.updating) return !1;
              this.scrollChange = this.sizeChange = this.mouseChange = this.positionChange = this.orientationChange = this.devicePixelRatioChange = !1, this.windowXVelocity.length > 5 && this.windowXVelocity.shift(), this.windowXVelocity.push(window.screenX - this.lastWindowX), s(this.windowXVelocity) != this.lastWindowXVelocity && (this.lastWindowXVelocity = s(this.windowXVelocity), this.positionChange = !0), window.screenX != this.lastWindowX && (this.positionChange = !0, this.lastWindowX = window.screenX), this.windowYVelocity.length > 5 && this.windowYVelocity.shift(), this.windowYVelocity.push(window.screenY - this.lastWindowY), s(this.windowYVelocity) != this.lastWindowYVelocity && (this.lastWindowYVelocity = s(this.windowYVelocity), this.positionChange = !0), window.screenY != this.lastWindowY && (this.positionChange = !0, this.lastWindowY = window.screenY), window.pageXOffset == this.lastX && 0 != this.scrollXVelocity && (this.scrollXVelocity = 0, this.scrollChange = !0), window.pageYOffset == this.lastY && 0 != this.scrollYVelocity && (this.scrollYVelocity = 0, this.scrollChange = !0), window.pageXOffset != this.lastX && (this.scrollChange = !0, this.scrollXVelocity = Math.floor(window.pageXOffset - this.lastX), this.lastX = window.pageXOffset), window.pageYOffset != this.lastY && (this.scrollChange = !0, this.scrollYVelocity = Math.floor(window.pageYOffset - this.lastY), this.lastY = window.pageYOffset), t != this.lastWidth && (this.lastWidth = t, this.scrollHeight = document.body.scrollHeight, this.sizeChange = !0), i != this.lastHeight && (this.lastHeight = i, this.sizeChange = !0), this.mouseXVelocity.length > 5 && this.mouseXVelocity.shift(), this.mouseXVelocity.push(e - this.lastMouseX), s(this.mouseXVelocity) != this.lastMouseXVelocity && (this.lastMouseXVelocity = s(this.mouseXVelocity), this.mouseChange = !0), e != this.lastMouseX && (this.lastMouseX = e, this.mouseChange = !0), this.mouseYVelocity.length > 5 && this.mouseYVelocity.shift(), this.mouseYVelocity.push(h - this.lastMouseY), s(this.mouseYVelocity) != this.lastMouseYVelocity && (this.lastMouseYVelocity = s(this.mouseYVelocity), this.mouseChange = !0), h == this.lastMouseY && 0 == s(this.mouseYVelocity) || (this.lastMouseY = h, this.mouseChange = !0), a != this.lastAlpha && (this.lastAlpha = a, this.orientationChange = !0), o != this.lastBeta && (this.lastBeta = o, this.orientationChange = !0), l != this.lastGamma && (this.lastGamma = l, this.orientationChange = !0), (this.positionChange || this.sizeChange) && (this.currDevicePixelRatio = Math.max(window.devicePixelRatio || 1, 1), this.currDevicePixelRatio !== this.lastDevicePixelRatio && (this.devicePixelRatioChange = !0, this.lastDevicePixelRatio = this.currDevicePixelRatio)), (this.scrollChange || this.sizeChange || this.mouseChange || this.positionChange || this.orientationChange || this.devicePixelRatioChange) && this.callbacks.forEach(t => t(this.formatData())), this.updating = !1, requestAnimationFrame(this.update)
          }
          watch(i, s = !0) {
              if ("function" != typeof i) throw new Error("Value passed to Watch is not a function");
              if (!t) {
                  if (s) {
                      const t = this.formatData();
                      t.scroll.changed = !0, t.mouse.changed = !0, t.size.changed = !0, t.position.changed = !0, t.orientation.changed = !0, t.devicePixelRatio.changed = !0, i(t)
                  }
                  this.callbacks.push(i)
              }
          }
          unwatch(i) {
              if ("function" != typeof i) throw new Error("The value passed to unwatch is not a function");
              t || (this.callbacks = this.callbacks.filter(t => t !== i))
          }
      }
      const h = new e;
      t || (window.__TORNIS = {
          watchViewport: h.watch,
          unwatchViewport: h.unwatch,
          getViewportState: h.formatData,
          recalibrateOrientation: h.recalibrateOrientation
      });
      const a = h.watch;
      exports.watchViewport = a;
      const o = h.unwatch;
      exports.unwatchViewport = o;
      const l = h.formatData;
      exports.getViewportState = l;
      const n = h.recalibrateOrientation;
      exports.recalibrateOrientation = n;
  }, {}],
  "OSYG": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.default = void 0;
      var e = require("ogl"),
          t = require("tornis"),
          r = require("../utils"),
          n = void 0;

      function a() {
          var e = o(["\n      precision highp float;\n\n      varying vec2 vUv;\n\n      uniform vec4 uRes;\n      uniform sampler2D uTexture;\n      uniform vec2 uVelocity;\n\n      const float PI         = 3.141592653;\n      const float HALF_PI    = PI / 2.0;\n      const float QUARTER_PI = PI / 4.0;\n\n      void main() {\n        vec2 uv = 0.5 * gl_FragCoord.xy / uRes.xy;\n        vec2 baseUV = (uv - vec2(0.5)) * uRes.zw + vec2(0.5);\n\n        float baseVelocity = clamp(uVelocity.y / 150.0, -1.0, 1.0);\n        float multiplier = pow(sin(vUv.y * PI), 2.0);\n        float velocity = baseVelocity * sin(vUv.x * HALF_PI + QUARTER_PI) * 0.75 * multiplier;\n\n        vec2 rUV = baseUV + vec2(0.0, velocity * 1.2);\n        vec2 gUV = baseUV + vec2(0.0, velocity * 1.4);\n        vec2 bUV = baseUV + vec2(0.0, velocity);\n\n        vec3 tex = vec3(\n          texture2D(uTexture, rUV).r,\n          texture2D(uTexture, gUV).g,\n          texture2D(uTexture, bUV).b\n        );\n\n        gl_FragColor = vec4(tex, 1.0);\n      }\n    "]);
          return a = function() {
              return e
          }, e
      }

      function i() {
          var e = o(["\n      attribute vec2 uv;\n      attribute vec2 position;\n\n      varying vec2 vUv;\n\n      void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0.0, 1.0);\n      }\n    "]);
          return i = function() {
              return e
          }, e
      }

      function o(e, t) {
          return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
              raw: {
                  value: Object.freeze(t)
              }
          }))
      }
      var u = function(o) {
          var u = (0, r.vert)(i()),
              l = (0, r.frag)(a()),
              v = {
                  default: o.querySelector("img")
              },
              s = {
                  frameID: -1,
                  mouse: new e.Vec2(.5),
                  velocity: new e.Vec2,
                  previousTime: null,
                  previousMouse: new e.Vec2,
                  aspect: 1,
                  image: {
                      url: "",
                      size: {
                          x: v.default.offsetWidth,
                          y: v.default.offsetHeight
                      }
                  },
                  renderer: null,
                  gl: null,
                  canvas: null,
                  geometry: null,
                  texture: null,
                  program: null,
                  mesh: null
              },
              c = function(e) {
                  var t = e.scroll;
                  if (t.changed) {
                      var r = t.velocity.y
                      s.velocity.y = r
                  }
              },
              f = function() {
                  var e = v.default.naturalHeight / v.default.naturalWidth,
                      t = o.offsetHeight / o.offsetWidth,
                      r = o.offsetWidth / o.offsetHeight;
                  return t < e ? {
                      ah: 1,
                      av: t / e
                  } : {
                      ah: r * e,
                      av: 1
                  }
              },
              m = function() {
                  var t = f(),
                      r = t.ah,
                      n = t.av;
                  s.mesh.program.uniforms.uRes.value = new e.Vec4(o.offsetWidth, o.offsetHeight, r, n), s.renderer.setSize(o.offsetWidth, o.offsetHeight), s.aspect = o.offsetWidth / o.offsetHeight
              };
          return {
              init: function() {
                  s.renderer = new e.Renderer({
                      dpr: 2,
                      alpha: !0,
                      premultipliedAlpha: !0
                  }), s.gl = s.renderer.gl, s.canvas = s.gl.canvas, s.canvas.classList.add("glsl-canvas", "initialized"), o.appendChild(s.canvas), s.geometry = new e.Geometry(s.gl, {
                      position: {
                          size: 2,
                          data: new Float32Array([-1, -1, 3, -1, -1, 3])
                      },
                      uv: {
                          size: 2,
                          data: new Float32Array([0, 0, 2, 0, 0, 2])
                      }
                  }), s.texture = new e.Texture(s.gl, {
                      minFilter: s.gl.LINEAR,
                      magFilter: s.gl.LINEAR,
                      premultiplyAlpha: !0
                  });
                  var r = new Image;
                  r.addEventListener("load", function() {
                      return s.texture.image = r
                  }), r.src = v.default.src;
                  var a = f(),
                      i = a.ah,
                      d = a.av;
                  s.program = new e.Program(s.gl, {
                      vertex: u,
                      fragment: l,
                      uniforms: {
                          uTime: {
                              value: 0
                          },
                          uTexture: {
                              value: s.texture
                          },
                          uRes: {
                              value: new e.Vec4(o.offsetWidth, o.offsetHeight, i, d)
                          },
                          uVelocity: {
                              value: new e.Vec2(0)
                          }
                      }
                  }), s.mesh = new e.Mesh(s.gl, {
                      geometry: s.geometry,
                      program: s.program
                  }), window.addEventListener("resize", m, !1), m(), (0, t.watchViewport)(c);
                  return s.frameID = requestAnimationFrame(function e(t) {
                      s.frameID = requestAnimationFrame(e), s.program.uniforms.uTime.value = .01 * t, s.program.uniforms.uVelocity.value.lerp(s.velocity, s.velocity.len() ? .15 : .1), window.value = s.program.uniforms.uVelocity.value, s.renderer.render({
                          scene: s.mesh
                      })
                  }), v.default.style.opacity = .2, n
              },
              destroy: function() {
                  return cancelAnimationFrame(s.frameID), v.default.style.opacity = "", o.removeChild(s.canvas), n
              }
          }
      };
      exports.default = u;
  }, {
      "ogl": "wspk",
      "tornis": "GQcO",
      "../utils": "FOZT"
  }],
  "q66y": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }), exports.default = void 0;
      var t = n(require("imagesloaded")),
          e = n(require("./shaders/desktop")),
          r = n(require("./shaders/mobile"));
      function n(t) {
          return t && t.__esModule ? t : {
              default: t
          }
      }

      function o(t) {
          return s(t) || u(t) || a(t) || i()
      }

      function i() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }

      function a(t, e) {
          if (t) {
              if ("string" == typeof t) return c(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0
          }
      }

      function u(t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
      }

      function s(t) {
          if (Array.isArray(t)) return c(t)
      }

      function c(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
          return n
      }

      function l(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function f(t, e) {
          for (var r = 0; r < e.length; r++) {
              var n = e[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
      }

      function d(t, e, r) {
          return e && f(t.prototype, e), r && f(t, r), t
      }
      var p = function() {
          function n(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              l(this, n), this.scope = t, this.elements = "string" == typeof t ? document.querySelectorAll(t) : t, this.options = e, this.apps = []
          }
          return d(n, [{
              key: "init",
              value: function() {
                  var n = this;
                  return (0, t.default)(document.body, function() {
                      var t = "ontouchstart" in document.documentElement ? r.default : e.default;
                      n.apps = o(n.elements).map(function(e) {
                          var r = t(e, n.options);
                          return r.init(), r
                      })
                  }), this
              }
          }, {
              key: "destroy",
              value: function() {
                  return this.apps.forEach(function(t) {
                      return t.destroy()
                  }), this.apps = [], this
              }
          }]), n
      }();
      exports.default = p;
  }, {
      "imagesloaded": "lc7f",
      "./shaders/desktop": "f5LK",
      "./shaders/mobile": "OSYG"
  }],
  "Focm": [function(require, module, exports) {
      "use strict";
      var e = t(require("./wave-effect"));

      function t(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      window.WaveEffect = e.default;
  }, {
      "./wave-effect": "q66y"
  }]
}, {}, ["Focm"], null)
//# sourceMappingURL=/wave-effect.js.map
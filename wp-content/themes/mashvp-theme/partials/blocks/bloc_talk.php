<section class="talkC" id="talkC">
    <div class="talk grid12 ma wi90">
        <div class="sectiontitle tk-bely-display purple talktitle"><?= get_sub_field('title') ?></div>
        <div class="slider" id="app">
            <span onclick="changePosition(-1)">prev</span>
            <div id="theImage"></div>
            <span onclick="changePosition(1)">next</span>
        </div>
    </div>
</section>
<style>
    #app {
  display: flex;
  font-size: 100px;
  justify-content: center;
  align-items: center;
    }

    #app > span {
    padding: 30px;
    }

    #app > span:hover {
    cursor: pointer;
    }

    #theImage {
    display: flex;
    flex-flow: row wrap;
    height: 400px;
    width: 400px;
    background-repeat: none;
    }

    #buttons {
    position: absolute;
    bottom: 20px;
    }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js" integrity="sha512-UxP+UhJaGRWuMG2YC6LPWYpFQnsSgnor0VUF3BHdD83PS/pOpN+FYbZmrYN+ISX8jnvgVUciqP/fILOXDjZSwg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    const images = [
    "http://artrade.test/wp-content/uploads/2021/07/iStock-1127186686-scaled.jpg",
    "http://artrade.test/wp-content/uploads/2021/07/iStock-1309064766-Converti.jpg"
    ];

    const X_CHANGE = 1000;
const Y_CHANGE = 1000;
const BACKGROUND_POS_PERCENT = 11.1;
const TIMER_INTERVAL = 2250;
const IMAGE_PIECE_COUNT = 10;
const ROTATION = 25;
let indy = 0;
let isChanging = false;

function removeImage() {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < IMAGE_PIECE_COUNT; i++) {
      const chunk = document.getElementById(`chunk${i}`);
      TweenMax.to(chunk, 1, {
        rotation: ROTATION,
        ease: Strong.easeInOut,
        onComplete: () => {
          TweenMax.fromTo(chunk, 1, {
            x: 0,
            y: 0
          }, {
            y: i % 2 === 0 ? -Y_CHANGE : Y_CHANGE,
            x: i % 2 === 0 ? -X_CHANGE : X_CHANGE,
            ease: Strong.easeInOut,
            onComplete: () => {
              chunk.parentNode.removeChild(chunk);
              resolve(true);
            }
          });
        }
      });
    }
  });
}

function displayImage(index) {
  const src = images[index];
  const image = document.getElementById("theImage");
  let pos = 0;

  for (let i = 0; i < IMAGE_PIECE_COUNT; i++) {
    const chunk = document.createElement("div");
    chunk.id = `chunk${i}`;
    chunk.style.background = `url('${src}')`;
    chunk.style.backgroundPosition = `${pos}% ${pos}%`;
    chunk.style.height = "40px";
    chunk.style.width = "400px";
    pos += BACKGROUND_POS_PERCENT;
    theImage.appendChild(chunk);
    TweenMax.fromTo(chunk, 1, {
      x: i % 2 === 0 ? -X_CHANGE : X_CHANGE,
      y: i % 2 === 0 ? Y_CHANGE : -Y_CHANGE,
      rotation: -ROTATION
    }, {
      y: 0,
      x: 0,
      ease: Strong.easeInOut,
      onComplete: () => {
        TweenMax.to(chunk, 1, {
          rotation: 0,
          ease: Strong.easeInOut,
          onComplete: () => isChanging = false
        });
      }
    });
  }
}

function changePosition(movement) {
  //To ensure that switching does not happen if a switch is already happening
  if (!isChanging) {
    if (indy + movement < 0) {
      indy = images.length - 1;
    } else if (indy + movement > images.length - 1) {
      indy = 0;
    } else {
      indy += movement;
    }

    isChanging = true;
    removeImage().then(() => displayImage(indy));
  }
}
setTimeout(() => {
    displayImage(indy);
}, 2000);

</script>
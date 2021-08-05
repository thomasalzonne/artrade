</main>
<script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js" integrity="sha512-Gk+uNk8NWN235mIkS6B7/424TsDuPDaoAsUekJCKTWLKP6wlaPv+PBGfO7dbvZeibVPGW+mYidz0vL0XaWwz4w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js" integrity="sha512-f5HTYZYTDZelxS7LEQYv8ppMHTZ6JJWglzeQmr0CVTS70vJgaJiIO15ALqI7bhsracojbXkezUIL+35UXwwGrQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="wp-content/themes/mashvp-theme/js/wave-effect.js"></script>
<script>
    const app = new WaveEffect('.img');
    app.init();
    app.destroy();

    var rellax = new Rellax('.rellax', {
    breakpoints:[350, 800, 1201]
  });
    //Dessin du chemin
    //on regarde si le chemin est visible à l'écran
    function checkVisible(elm) {
        if(elm){
            var rect = elm.getBoundingClientRect();
            var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        }
    }
    var line = document.querySelectorAll('#line')
    Array.from(line).map(el => {
      var length = el.getTotalLength()
      el.style.strokeDasharray = length;
      el.style.strokeDashoffset = length;
      window.addEventListener("scroll", drawLine);
      function drawLine() {
          if(checkVisible(el)){
              el.style.strokeDashoffset = 0;            
          }
      }
    })

    var sections = document.querySelectorAll('section')
    var nav = document.querySelector('.navigation')
    Array.from(sections).map(el => {
        var link = document.createElement('a')
        link.classList.add('navigationlink')
        link.href = "#" + el.id
        nav.appendChild(link)
    })
    var navbuy = $('.buytok')
    var anavbuy = $(navbuy).find('a')
    $(anavbuy).html('buy token <span class="iconheader" style="background-image: url(wp-content/themes/mashvp-theme/assets/img/panierhf.svg)"></span>')
</script>
<footer class="row">
</footer>

<?php wp_footer() ?>

</body>

</html>


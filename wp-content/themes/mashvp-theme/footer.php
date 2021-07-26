</main>
<script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js" integrity="sha512-Gk+uNk8NWN235mIkS6B7/424TsDuPDaoAsUekJCKTWLKP6wlaPv+PBGfO7dbvZeibVPGW+mYidz0vL0XaWwz4w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    //Dessin du chemin
    //on regarde si le chemin est visible à l'écran
    function checkVisible(elm) {
        if(elm){
            var rect = elm.getBoundingClientRect();
            var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        }
    }
    var el;
    var line;
    var speed;
    var subPaths = [];
    window.onload = function(){
        el = document.getElementById('linebg')
        line = Snap(document.getElementById("line"));
        speed = 0.1		
        getSubPaths();
    }
    window.addEventListener("scroll", drawLine);
    function drawLine() {
        if(checkVisible(el)){
            var percentDrawn = (document.body.scrollTop + document.documentElement.scrollTop - $(el).position().top) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            var percentDrawn = Math.round(percentDrawn * 100 * speed);
            if(percentDrawn > 100){
                percentDrawn = 100
            }
            if(percentDrawn === undefined){
                percentDrawn = 0
            }
            line.attr({
                d: subPaths[percentDrawn]
            });
        }
    }
    function getSubPaths(){
        var maxLength = line.getTotalLength();
        for(var i = 0; i<101; i++){
            var currentLength = maxLength*i/100;
            subPaths[i] = line.getSubpath(0, currentLength);
        }
    }
</script>
<footer class="row">
</footer>

<?php wp_footer() ?>

</body>

</html>


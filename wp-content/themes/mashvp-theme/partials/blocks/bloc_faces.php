<section class="facesC" id="facesC">
    <div class="faces grid12 ma wi90">
        <div class="facestitle sectiontitle purple tk-bely-display"><?= get_sub_field('title') ?></div>
        <?php if(have_rows('face')): ?>
            <?php $i = 0; ?>
            <?php while(have_rows('face')): the_row() ?>
                <?php $i++; ?>
                <?php if($i == 1): ?>
                    <div class="face face<?= $i ?> rellax" data-rellax-speed="-0.15">
                <?php endif; ?>
                <?php if($i == 2): ?>
                    <div class="face face<?= $i ?> rellax" data-rellax-speed="-0.15">
                <?php endif; ?>
                <?php if($i == 3): ?>
                    <div class="face face<?= $i ?> rellax" data-rellax-speed="-0.15">
                <?php endif; ?>
                    <div class="pdp" style="background-image:url('<?= get_sub_field('image') ?>')"></div>
                    <div class="facedesc purple">
                        <div class="firstname tk-bely-display"><?= get_sub_field('prenom') ?></div>
                        <div class="lastname tk-bely-display"><?= get_sub_field('nom') ?></div>
                        <div class="poste tk-objektiv-mk1"><?= get_sub_field('poste') ?></div>
                        <div class="facedesc tk-objektiv-mk1"><?= get_sub_field('description') ?></div>
                    </div>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</section>
<script>
    var el = document.querySelector('.graph')
    function checkVisible(elm) {
        if(elm){
            var rect = elm.getBoundingClientRect();
            var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        }
    }
    function elementInViewport2(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }
    window.addEventListener("scroll", addRelax);
    function addRelax(){
        if(checkVisible(el)){
            console.log('test')
        }
    }
</script>
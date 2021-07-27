<section class="statC" id="statC">
    <div class="stat grid12 ma wi90">
        <div class="sectiontitle tk-bely-display purple stattitle"><?= get_sub_field('title') ?></div>
        <div class="graph">
            <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_1.svg" ?>
        </div>
        <div class="textquarter purple tk-objektiv-mk1"><?= get_sub_field('texte_quarter') ?></div>
        <div class="target grid12 nogrg">
            <div class="leftcontainer collec">
                <div class="sectionsubtitle green tk-objektiv-mk1"><?= get_sub_field('target_title') ?></div>
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2_LEGENDE.svg" ?>
            </div>
            <div class="pie">
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2.svg" ?>
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2.2.svg" ?>
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2.3.svg" ?>
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2.4.svg" ?>
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2.5.svg" ?>
  
            </div>
            <div class="quote purple tk-objektiv-mk1">Market distribution (USD traded) between segments - Q1 2021 report from nonfungible.com </div>
        </div>
    </div>
    <?php if(have_rows('partie_boom')): ?>
        <?php while(have_rows('partie_boom')): the_row() ?>
            <?php 
                $images = get_sub_field('images');
                $i = 0;
            ?>
            <div class="boom grid12 ma wi90">
                <?php if( $images ): ?>
                    <div class="boomgallery">
                        <?php foreach( $images as $image ): ?>
                            <?php $i++; ?>
                            <?php if($i == 1): ?>
                                <div class="img img<?= $i ?> rellax" data-rellax-speed="0.5" style="background-image: url('<?= $image ?>')"></div>
                            <?php endif; ?>
                            <?php if($i == 2): ?>
                                <div class="img img<?= $i ?> rellax" data-rellax-speed="0" style="background-image: url('<?= $image ?>')"></div>
                            <?php endif; ?>
                            <?php if($i == 3): ?>
                                <div class="img img<?= $i ?> rellax" data-rellax-speed="-0.5" style="background-image: url('<?= $image ?>')"></div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
                <div class="boomtxt">
                    <div class="boomtitle sectionsubtitle green tk-objektiv-mk1"><?= get_sub_field('title') ?></div>
                    <div class="boomdesc purple tk-objektiv-mk1"><?= get_sub_field('texte') ?></div>
                </div>
                <div class="boomsource purple tk-objektiv-mk1"><?= get_sub_field('source') ?></div>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</section>
<script>
    var elm = document.querySelector('.statC')
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
    window.addEventListener("scroll", addanim);
    function addanim(){
        console.log(elementInViewport2(el))
        if(checkVisible(elm)){
            var anim = document.querySelectorAll('.anim')
            $('.p1 .price').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $('.p2 .price').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $('.p3 .price').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            Array.from(anim).map(el => {
                el.beginElement()
                window.removeEventListener("scroll", addanim);
            })
        }
    }
</script>
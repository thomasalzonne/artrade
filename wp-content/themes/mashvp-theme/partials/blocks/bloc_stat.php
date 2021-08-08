<?php
    function setv($inom,$ival)
    {
        echo '<script>';
        echo $inom."=".$ival.";";
        echo '</script>';
    }
?>
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
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2.6.svg" ?>
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2.7.svg" ?>
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
                                <div class="img img<?= $i ?>"><img src="<?= $image ?>" alt=""></div>
                            <?php endif; ?>
                            <?php if($i == 2): ?>
                                <div class="img img<?= $i ?>"><img src="<?= $image ?>" alt=""></div>
                            <?php endif; ?>
                            <?php if($i == 3): ?>
                                <div class="img img<?= $i ?>"><img src="<?= $image ?>" alt=""></div>
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
    var elm = document.querySelector('.p3')
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
        if(checkVisible(elm)){
            var anim = document.querySelectorAll('.anim')
            var rect3a = document.querySelector('.rect3')
            console.log(rect3a)
            var rect1 = document.querySelector('.rect1')
            var rect2 = document.querySelector('.rect2')
            setTimeout(() => {
                rect3a.setAttribute('height','194')
            }, 2500);
            setTimeout(() => {
                rect1.setAttribute('height','3.9')
            }, 500);
            setTimeout(() => {
                rect2.setAttribute('height','130.9')
            }, 2000);
            $('.p1 .price').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2500,
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
                    duration: 2000,
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
     
    var putility = document.querySelector('svg#menu path#utility')
    var pgame = document.querySelector('svg#menu path#game')
    var part = document.querySelector('svg#menu path#art')
    var psport = document.querySelector('svg#menu path#sport')
    var pmetaverse = document.querySelector('svg#menu path#metaverse')
    var pcollectible = document.querySelector('svg#menu path#collectible')
    var partutility = document.querySelector('svg#UTILITY')
    var partgame = document.querySelector('svg#GAME')
    var partart = document.querySelector('svg#ART')
    var partsport = document.querySelector('svg#SPORTS')
    var partmeta = document.querySelector('svg#METAVERSE')
    var partcollectibles = document.querySelector('svg#COLLECTIBLES')
    
    if (
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i)
    ) {
    // iPhone double-click polyfill
    $(pcollectible).on("touchstart", function (e) {
        if($(".pie").find('.mobilanim')){
            el = $(".pie").find('.mobilanim')
            $(el).removeClass('mobilanim')
        }
        $(partcollectibles).addClass('mobilanim')
    });
    $(pmetaverse).on("touchstart", function (e) {
        if($(".pie").find('.mobilanim')){
            el = $(".pie").find('.mobilanim')
            $(el).removeClass('mobilanim')
        }
        $(partmeta).addClass('mobilanim')
    });
    $(psport).on("touchstart", function (e) {
        if($(".pie").find('.mobilanim')){
            el = $(".pie").find('.mobilanim')
            $(el).removeClass('mobilanim')
        }
        $(partsport).addClass('mobilanim')
    });
    $(part).on("touchstart", function (e) {
        if($(".pie").find('.mobilanim')){
            el = $(".pie").find('.mobilanim')
            $(el).removeClass('mobilanim')
        }
        $(partart).addClass('mobilanim')
    });
    $(pgame).on("touchstart", function (e) {
        if($(".pie").find('.mobilanim')){
            el = $(".pie").find('.mobilanim')
            $(el).removeClass('mobilanim')
        }
        $(partgame).addClass('mobilanim')
    });  
    }


    pcollectible.addEventListener("mouseenter", function(event){
        partcollectibles.style.opacity = 1
        partcollectibles.style.zIndex = 2
        partcollectibles.style.transitionDuration = "1s"
    })
    pcollectible.addEventListener("mouseleave", function(event){
        partcollectibles.style.opacity = 0
        partcollectibles.style.zIndex = 0
    })
    pmetaverse.addEventListener("mouseenter", function(event){
        partmeta.style.opacity = 1
        partmeta.style.zIndex = 2
        partmeta.style.transitionDuration = "1s"
    })
    pmetaverse.addEventListener("mouseleave", function(event){
        partmeta.style.opacity = 0
        partmeta.style.zIndex = 0
    })
    psport.addEventListener("mouseenter", function(event){
        partsport.style.opacity = 1
        partsport.style.zIndex = 2
        partsport.style.transitionDuration = "1s"
    })
    psport.addEventListener("mouseleave", function(event){
        partsport.style.opacity = 0
        partsport.style.zIndex = 0
    })
    part.addEventListener("mouseenter", function(event){
        partart.style.opacity = 1
        partart.style.zIndex = 2
        partart.style.transitionDuration = "1s"
    })
    part.addEventListener("mouseleave", function(event){
        partart.style.opacity = 0
        partart.style.zIndex = 0
    })
    pgame.addEventListener("mouseenter", function(event){
        partgame.style.opacity = 1
        partgame.style.zIndex = 2
        partgame.style.transitionDuration = "1s"
    })
    pgame.addEventListener("mouseleave", function(event){
        partgame.style.opacity = 0
        partgame.style.zIndex = 0
    })
    putility.addEventListener("mouseenter", function(event){
        partutility.style.opacity = 1
        partutility.style.zIndex = 2
        partutility.style.transitionDuration = "1s"
    })
    putility.addEventListener("mouseleave", function(event){
        partutility.style.opacity = 0
        partutility.style.zIndex = 0
    })
</script>
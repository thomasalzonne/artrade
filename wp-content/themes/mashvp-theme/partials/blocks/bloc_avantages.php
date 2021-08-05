<?php
$images = get_sub_field('galerie');
$i = 0;
?>
<section class="avantagesC" id="avantagesC">
    <div class="avantages grid12 wi90 ma">
        <div class="sectiontitle purple tk-bely-display avantagetitle"><?= get_sub_field('title') ?></div>
        <div class="containerav grid12">
            <?php if( $images ): ?>
                <div class="gallery">
                    <?php foreach( $images as $image ): ?>
                        <?php $i++; ?>
                        <?php if($i == 1): ?>
                            <div class="img avimg avimg<?= $i ?> rellax" data-rellax-speed="0.1" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" data-rellax-desktop-speed="0.1"><img src="<?= $image ?>" alt=""></div>
                        <?php endif; ?>
                        <?php if($i == 2): ?>
                            <div class="img avimg avimg<?= $i ?> rellax" data-rellax-speed="-0.1" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" data-rellax-desktop-speed="-0.1"><img src="<?= $image ?>" alt=""></div>
                        <?php endif; ?>
                        <?php if($i == 3): ?>
                            <div class="img avimg avimg<?= $i ?> rellax" data-rellax-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" data-rellax-desktop-speed="0"><img src="<?= $image ?>" alt=""></div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
            <div class="avantagestxt">
                <div class="avtoptxt purple tk-objektiv-mk1"><?= get_sub_field('top_right_text') ?></div>
                <?php if(have_rows('mid_right_text')): ?>
                    <?php while(have_rows('mid_right_text')): the_row() ?>
                    <div class="avbottxt purple tk-objektiv-mk1">
                        <div class="avtitle sectionsubtitle green tk-objektiv-mk1"><?= get_sub_field('title') ?></div>
                        <div class="avdesc"><?= get_sub_field('texte') ?></div>
                    </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <?php if(have_rows('titre_image_texte')): ?>
        <?php while(have_rows('titre_image_texte')): the_row() ?>
            <div class="functions grid12 wi90 ma">
                <div class="sectiontitle sectionsubtitle green tk-objektiv-mk1"><?= get_sub_field('title') ?></div>
                <div class="funcimg rellax" data-rellax-speed="-1" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" data-rellax-desktop-speed="-1" style="background-image:url('<?= get_sub_field('image') ?>')"></div>
                <div class="funcdesc purple tk-objektiv-mk1"><?= get_sub_field('texte') ?></div>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</section>
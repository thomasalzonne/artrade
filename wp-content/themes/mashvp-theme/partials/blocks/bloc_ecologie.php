<section class="ecologieC" id="ecologieC">
    <div class="ecologie grid12 ma wi90">
        <div class="ecotitle sectiontitle purple tk-bely-display"><?= get_sub_field('title') ?></div>
        <?php if(have_rows('image_texte')): ?>
            <?php while(have_rows('image_texte')): the_row() ?>
                <div class="it grid12">
                    <div class="ecoimgit rellax" data-rellax-speed="-1" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" data-rellax-desktop-speed="-1" style="background-image: url('<?= get_sub_field('image') ?>')"></div>
                    <?php if(have_rows('texte')): ?>
                        <?php while(have_rows('texte')): the_row() ?>
                            <div class="ecotxtit">
                                <div class="ecotxtittitle sectionsubtitle green tk-objektiv-mk1"><?= get_sub_field('title') ?></div>
                                <div class="ecotxtittext purple tk-objektiv-mk1"><?= get_sub_field('texte') ?></div>
                            </div>
                        <?php endwhile; ?>
                    <?php endif; ?>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
        <?php if(have_rows('text_image')): ?>
            <?php while(have_rows('text_image')): the_row() ?>
                <div class="ti grid12">
                    <?php if(have_rows('texte')): ?>
                        <?php while(have_rows('texte')): the_row() ?>
                            <div class="ecotxtti">
                                <div class="ecotxttititle sectionsubtitle green tk-objektiv-mk1"><?= get_sub_field('title') ?></div>
                                <div class="ecotxttitext purple tk-objektiv-mk1"><?= get_sub_field('texte') ?></div>
                            </div>
                        <?php endwhile; ?>
                    <?php endif; ?>
                    <div class="ecoimgti rellax" data-rellax-speed="-3" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" data-rellax-desktop-speed="-3" style="background-image: url('<?= get_sub_field('image') ?>')"></div>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</section>
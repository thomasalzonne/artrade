<section class="consciousC" id="consciousC">
    <div class="conscious grid12 ma wi90">
        <div class="sectiontitle conscioustitle purple tk-bely-display"><?= get_sub_field('title') ?></div>
        <div class="consciousimg rellax" data-rellax-speed="-1" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0" data-rellax-desktop-speed="-1" style="background-image: url('<?= get_sub_field('image') ?>')"></div>
        <div class="conscioustxt tk-objektiv-mk1 purple">
            <div class="conscioustxttop"><?= get_sub_field('top_text') ?></div>
            <div class="conscioustxtmid"><?= get_sub_field('mid_text') ?></div>
            <?php if(have_rows('bottom_text')): ?>
                <?php while(have_rows('bottom_text')): the_row() ?>
                    <div class="sectionsubtitle green consciousstitle"><?= get_sub_field('title') ?></div>
                    <div class="consciousdesc"><?= get_sub_field('texte') ?></div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>
</section>
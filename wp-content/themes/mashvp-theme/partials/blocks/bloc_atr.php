<section class="atrC" id="atrC">
    <div class="atr grid12 ma wi90">
        <div class="sectiontitle purple tk-bely-display atrtitle"><?= get_sub_field('title') ?></div>
        <?php if(have_rows('atr_token')): ?>
            <div class="points grid12">
                <?php while(have_rows('atr_token')): the_row() ?>
                    <div class="point">
                        <div class="pointimg" style="background-image: url('<?= get_sub_field('image') ?>')"></div>
                        <div class="pointtxt purple tk-objektiv-mk1"><?= get_sub_field('texte') ?></div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
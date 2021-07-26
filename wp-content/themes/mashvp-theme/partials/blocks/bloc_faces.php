<section class="facesC">
    <div class="faces grid12 ma wi90">
        <div class="facestitle sectiontitle purple tk-bely-display"><?= get_sub_field('title') ?></div>
        <?php if(have_rows('face')): ?>
            <?php $i = 0; ?>
            <?php while(have_rows('face')): the_row() ?>
                <?php $i++; ?>
                <div class="face face<?= $i ?>">
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
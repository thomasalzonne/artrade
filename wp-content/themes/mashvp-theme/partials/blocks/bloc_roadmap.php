<section class="roadmapC" id="roadmapC">
    <div class="roadmap grid12 ma wi90">
        <div class="roadmaptitle sectiontitle purple tk-bely-display"><?= get_sub_field('title') ?></div>
        <div class="linebg" id="linebg">
            <?php include  get_template_directory() . "/assets/img/road-map-mashvp.svg" ?>
        </div>
        <?php if(have_rows('event')): ?>
            <div class="events grid10">
                <?php $i = 0; ?>
                <?php while(have_rows('event')): the_row() ?>
                    <?php $i++; ?>
                    <div class="event event<?= $i ?>" style="grid-row: <?= $i ?>; grid-column: 5/span 3;">
                        <div class="eventtitle green tk-bely-display"><?= get_sub_field('title') ?></div>
                        <div class="eventdesc purple tk-objektiv-mk1"><?= get_sub_field('texte') ?></div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
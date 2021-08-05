<?php 
$linkedin = get_sub_field('linkedin')['url']
?>
<section class="facesC" id="facesC">
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
                            <div class="poste tk-objektiv-mk1"><?= get_sub_field('poste') ?>
                                <?php if(get_sub_field('description')): ?>
                                    - <?= get_sub_field('description') ?>
                                <?php endif; ?>
                            </div>
                            <div class="facedesc tk-objektiv-mk1" style="background-image: url('<?= $linkedin ?>')" onclick="window.location.href = '<?= get_sub_field('linkedin') ?>'"></div>
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
</script>
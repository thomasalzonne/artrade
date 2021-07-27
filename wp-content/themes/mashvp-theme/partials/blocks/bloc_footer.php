<div class="footerC">
    <div class="footer grid12 ma wi90 tk-objektiv-mk1 nogrg">
        <?php if(have_rows('about_us')): ?>
            <div class="footernav">
                <?php while(have_rows('about_us')): the_row() ?>
                    <div class="footernactitle green"><?= get_sub_field('title') ?></div>
                    <?php if(have_rows('link')): ?>
                        <div class="linksfooter">
                            <?php while(have_rows('link')): the_row() ?>
                                <a class="footernavlink purple" href="<?= get_sub_field('url') ?>"><?= get_sub_field('texte') ?></a>
                            <?php endwhile; ?>
                        </div>
                    <?php endif; ?>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
        <?php if(have_rows('follow_us')): ?>
            <div class="followus">
                <?php while(have_rows('follow_us')): the_row() ?>
                    <div class="followtitle purple"><?= get_sub_field('title') ?></div>
                    <?php if(have_rows('link')): ?>
                        <div class="logosfooter">
                            <?php while(have_rows('link')): the_row() ?>
                                <a class="footerlogolink" href="<?= get_sub_field('url') ?>" style="background-image: url('<?= get_sub_field('logo') ?>')"></a>
                            <?php endwhile; ?>
                        </div>
                    <?php endif; ?>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
        <div class="contact">
            <div class="contacttitle green">contact</div>
            <?php if(have_rows('contact')): ?>
                <?php while(have_rows('contact')): the_row() ?>
                    <div class="contactaddress purple"><?= get_sub_field('address') ?></div>
                    <div class="contactcp purple"><?= get_sub_field('cp_ville') ?></div>
                    <a class="contactmail purple" href="mailto:<?= get_sub_field('mail') ?>"><?= get_sub_field('mail') ?></a>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
        <?php if(have_rows('legals')): ?>
            <div class="legals">
                <?php while(have_rows('legals')): the_row() ?>
                    <a class="legallink purple" href="<?= get_sub_field('url') ?>"><?= get_sub_field('texte') ?></a>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
        <div class="copyright purple"><?= get_sub_field('copyright') ?></div>
    </div>
</div>
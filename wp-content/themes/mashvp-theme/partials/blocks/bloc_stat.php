<section class="statC">
    <div class="stat grid12 ma wi90">
        <div class="sectiontitle tk-bely-display purple stattitle"><?= get_sub_field('title') ?></div>
        <div class="graph">
            <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_1.svg" ?>
        </div>
        <div class="textquarter purple tk-objektiv-mk1"><?= get_sub_field('texte_quarter') ?></div>
        <div class="target grid12 nogrg">
            <div class="leftcontainer collec">
                <div class="sectionsubtitle green tk-objektiv-mk1 "><?= get_sub_field('target_title') ?></div>
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2_LEGENDE.svg" ?>
            </div>
            <div class="pie">
                <?php include  get_template_directory() . "/assets/img/INFOGRAPHIE_2.svg" ?>
            </div>
            <div class="quote purple">Market distribution (USD traded) between segments - Q1 2021 report from nonfungible.com </div>
        </div>
    </div>
</section>
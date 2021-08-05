<section class="talkC" id="talkC">
    <div class="talk grid12 ma wi90">
        <div class="sectiontitle tk-bely-display purple talktitle"><?= get_sub_field('title') ?></div>
        <?php if(have_rows('image')): ?>
          <?php $z = 0; ?>
          <div class="talksource">
          <?php while(have_rows('image')): the_row() ?>
            <?php $z++ ?>
            <div class="source so<?= $z ?>" style="opacity: 0">
              <div class="sourc green tk-objektiv-mk1"><?= get_sub_field('source') ?></div>
              <div class="sourcedate green tk-objektiv-mk1"><?= get_sub_field('date') ?></div>
            </div>
          <?php endwhile; ?>
          </div>
        <?php endif; ?>
        <?php if(have_rows('image')): ?>
          <?php $p = 0; ?>
          <div class="slider" id="app">
              <span class="prev"><?php include  get_template_directory() . "/assets/img/leftarrow.svg" ?></span>
              <div class="container">
                <?php while(have_rows('image')): the_row() ?>
                  <?php $p++ ?>
                  <div class="c<?= $p ?>" style="background-image: url('<?= get_sub_field('image') ?>')"></div>
                <?php endwhile; ?>
              </div>
              <span class="next"><?php include  get_template_directory() . "/assets/img/rightarrow.svg" ?></span>
          </div>
        <?php endif; ?>
    </div>
</section>
<script>
  $('.so1').css({'opacity': 1})
  $('.c1').addClass("sourceactive")
  $('.c2').addClass("sourceprev")
  $('.c3').addClass("sourcenext")
  $(function(){
    $('.next').click(function(){
      var activ = document.querySelector('.sourceactive')
      if($(activ).hasClass("c1")){
        $('.c3').removeClass('sourcenext sourceprev').addClass('sourceactive')
        $('.c1').removeClass('sourceactive').addClass('sourceprev')
        $('.c2').removeClass('sourceprev sourcenext').addClass('sourcenext')
        $('.c1').css({'opacity':'0'})
        $('.so1').css({'opacity': 0})
        $('.so2').css({'opacity': 0})
        setTimeout(() => {
          $('.c1').css({'opacity':'1'});
          $('.so3').css({'opacity': 1})
        }, 300);
      } else if($(activ).hasClass("c3")){
        $('.c2').removeClass('sourcenext sourceprev').addClass('sourceactive')
        $('.c3').removeClass('sourceactive').addClass('sourceprev')
        $('.c1').removeClass('sourceprev sourcenext').addClass('sourcenext')
        $('.c3').css({'opacity':'0'})
        $('.so3').css({'opacity': 0})
        $('.so1').css({'opacity': 0})
        setTimeout(() => {
          $('.c3').css({'opacity':'1'});
          $('.so2').css({'opacity': 1})
        }, 300);
      }else if($(activ).hasClass("c2")){
        $('.c1').removeClass('sourcenext sourceprev').addClass('sourceactive')
        $('.c2').removeClass('sourceactive').addClass('sourceprev')
        $('.c3').removeClass('sourceprev sourcenext').addClass('sourcenext')
        $('.c2').css({'opacity':'0'})
        $('.so2').css({'opacity': 0})
        $('.so3').css({'opacity': 0})
        setTimeout(() => {
          $('.c2').css({'opacity':'1'});
          $('.so1').css({'opacity': 1})
        }, 300);
      }
    });
    $('.prev').click(function(){
      var activ = document.querySelector('.sourceactive')
      if($(activ).hasClass("c1")){
        $('.c3').removeClass('sourcenext sourceprev').addClass('sourceprev')
        $('.c1').removeClass('sourceactive').addClass('sourcenext')
        $('.c2').removeClass('sourceprev sourcenext').addClass('sourceactive')
        $('.c1').css({'opacity':'0'})
        $('.so1').css({'opacity': 0})
        $('.so3').css({'opacity': 0})
        setTimeout(() => {
          $('.c1').css({'opacity':'1'});
          $('.so2').css({'opacity': 1})
        }, 300);
      } else if($(activ).hasClass("c2")){
        $('.c3').removeClass('sourcenext sourceprev').addClass('sourceactive')
        $('.c1').removeClass('sourcenext sourceprev').addClass('sourceprev')
        $('.c2').removeClass('sourceactive').addClass('sourcenext')
        $('.c2').css({'opacity':'0'})
        $('.so2').css({'opacity': 0})
        $('.so1').css({'opacity': 0})
        setTimeout(() => {
          $('.c2').css({'opacity':'1'});
          $('.so3').css({'opacity': 1})
        }, 300);
      }else if($(activ).hasClass("c3")){
        $('.c3').removeClass('sourceactive').addClass('sourcenext')
        $('.c1').removeClass('sourcenext sourceprev').addClass('sourceactive')
        $('.c2').removeClass('sourcenext sourceprev').addClass('sourceprev')
        $('.c3').css({'opacity':'0'})
        $('.so3').css({'opacity': 0})
        $('.so2').css({'opacity': 0})
        setTimeout(() => {
          $('.c3').css({'opacity':'1'});
          $('.so1').css({'opacity': 1})
        }, 300);
      }
    });
  });
</script>

<section class="headerC" id="headerC">
    <div class="header grid12 wi90 ma">
        <div class="navbar grid12">
            <div class="logo"><?php include  get_template_directory() . "/assets/img/LOGO.svg" ?></div>
            <div class="menu"><?php wp_nav_menu('mainnav') ?></div>
        </div>
        <div class="headertitle tk-objektiv-mk1 title purple"><?= get_sub_field('title') ?></div>
        <div class="ico grid12">
            <div class="countdown">
                <div class="endin tk-objektiv-mk1 purple">ICO ends in</div>
                <div class="chrono green tk-bely-display" id='countdown'></div>
            </div>
            <div class="raised">
                <div class="raisedtxt purple tk-objektiv-mk1">raised</div>
                <div class="money green tk-bely-display">230,022 $</div>
            </div>
        </div>
        <div class="buytoken purple tk-objektiv-mk1"><?= get_sub_field('buy') ?><span class="buyicon"><?php include  get_template_directory() . "/assets/img/panier.svg" ?></span></div>
        <div class="headervideo">
            <?php if(get_sub_field('video')): ?>
                <video controls>
                    <source src="<?= get_sub_field('video') ?>" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            <?php endif ?>
        </div>
    </div>
    <div class="navigation"></div>
</section>
<script>
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + "<div class='lil'>d</div>" + hours + "<div class='lil'>h</div> "
    + minutes + "<div class='lil'>m</div>" + seconds + "<div class='lil'>s</div>";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
    }, 1000);

    $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a.navigationlink").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 3000, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
    });
</script>
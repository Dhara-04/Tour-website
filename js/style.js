$(document).ready(function(){
    $("#banner").owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        dots: true
    });
    $("#D_slider").owlCarousel({
        items: 1,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        loop: true,
        dots: true
    });

    // loader
    setTimeout(function(){
        $('.loader').fadeOut();
    },3000)

    // bottom to top arrow
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.bottom_arrow').fadeIn();
            } else {
                $('.bottom_arrow').fadeOut();
            }
        });
        $('.bottom_arrow').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
        
    });
});
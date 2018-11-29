$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $('.navbar').addClass('fixed-top');
        $('.navbar').addClass('custom-bg');
    } else {
        $('.navbar').removeClass('fixed-top');
        $('.navbar').removeClass('custom-bg');
    }
});



var $grid = $('.grid').isotope({
    // options
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});


$('.filters-btns-group button').on("click", function () {
    var value = $(this).attr('data-name');
    //    console.log(value);

    $grid.isotope({
        filter: value
    })
});

$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});



//Smooth Scrolling

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


//
//    



//$(document).ready(function(){
//      
//    $("#btn-all").click(function(){
//        $(".ui_design").show(500);
//        $(".web_design").show(500);
//        $(".graphic_design").show(500);
//        $(".logo_design").show(500);
//        $(".wordpress").show(500);
//    });
//    
//    $("#btn-web").click(function(){
//        $(".ui_design").hide(500);
//        $(".web_design").show(500);
//        $(".graphic_design").hide(500);
//        $(".logo_design").hide(500);
//        $(".wordpress").hide(500);
//    });
//    
//    $("#btn-graphic").click(function(){
//        $(".ui_design").hide(500);
//        $(".web_design").hide(500);
//        $(".graphic_design").show(500);
//        $(".logo_design").hide(500);
//        $(".wordpress").hide(500);
//    });
//    
//    $("#btn-ui").click(function(){
//        $(".ui_design").show(500);
//        $(".web_design").hide(500);
//        $(".graphic_design").hide(500);
//        $(".logo_design").hide(500);
//        $(".wordpress").hide(500);
//    });
//    
//    $("#btn-logo").click(function(){
//        $(".ui_design").hide(500);
//        $(".web_design").hide(500);
//        $(".graphic_design").hide(500);
//        $(".logo_design").show(500);
//        $(".wordpress").hide(500);
//    });
//    
//    $("#btn-wordpress").click(function(){
//        $(".ui_design").hide(500);
//        $(".web_design").hide(500);
//        $(".graphic_design").hide(500);
//        $(".logo_design").hide(500);
//        $(".wordpress").show(500);
//    });
//    
//    
//});

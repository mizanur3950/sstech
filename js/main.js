$(window).scroll(function(){
    if ($(window).scrollTop() >= 500) {
        $('.navbar').addClass('fixed-top');
        $('.navbar').addClass('custom-bg');
    }
    else {
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


$('body').scrollSpy({ target: '#main-nav' });


//Smooth Scrolling
$('#main-nav a').on('click', function(e) {
    
  if(this.hash !== ''){
    
      e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 700, function() {
      
        window.location.hash = hash;
    });
  }
});








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
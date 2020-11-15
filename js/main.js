
$(".nav-bar a").click(function(){
    $("body,html").animate({
    scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
});

$(document).ready(function(){

  /* $('.carousel').carousel({
        directionNav:true, 
        shadow:false,
        hMargin:0.55, 
        vMargin:0.5, 
        frontWidth:362, 
        frontHeight:500,
        slidesPerScroll:7,
        backZoom:0.8, 
         hAlign:'center', 
         vAlign:'center',
        carouselWidth:1140, 
        carouselHeight:540, 
        left:0, 
        right:0, 
        top:0, 
        bottom:0,
        speed:250,
        autoplay:true, 
        autoplayInterval:5000, 
        pauseOnHover:true, 
        mouse:true, 
         
        reflection:false,
        backOpacity:1,
        before: function(carousel){}, 
        after: function(carousel){}
        
    });*/

    /*$('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        stagePadding:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true,
                loop:true
            },
            470:{
                items:2,
                nav:true,
                loop:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })*/

    $('.reviews__carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:`<div class="arrow-left"></div>`,
        nextArrow:`<div class="arrow-right"></div>`,
        responsive: [
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 3,
              slidesToScroll:1,
              infinite: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]// You can unslick at a given breakpoint now by adding:
        });// 


});
 


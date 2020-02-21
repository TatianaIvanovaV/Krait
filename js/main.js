$(".nav-bar a").click(function(){
    $("body,html").animate({
    scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
});
    
$(document).ready(function(){

    $('.carousel').carousel({
    
        carouselWidth:930,
        carouselHeight:330,
        directionNav:true, 
        shadow:true,
        buttonNav:'bullets',
        hAlign:'center', 
        vAlign:'center',
        hMargin:0.56, 
        vMargin:0.4, 
        frontWidth:350, 
        frontHeight:600,
        slidesPerScroll:7,
        backZoom:0.8, 
        
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        stagePadding:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })


});
   /*$('#responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow:2,
    slidesToScroll:1,
    infinite: true,
    dots: false
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false
    }
    }
    ]
    });
    */

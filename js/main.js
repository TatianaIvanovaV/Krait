$(document).ready(function () {

    $('.carousel').carousel({hAlign:'center', 
                                vAlign:'center', 
                                hMargin:0.56, 
                                vMargin:0.4, 
                                frontWidth:350, 
                                frontHeight:600, 
                                carouselWidth:930, 
                                carouselHeight:330, 
                                left:0, 
                                right:0, 
                                top:0, 
                                bottom:0, 
                                backZoom:0.8, 
                                slidesPerScroll:7, 
                                speed:500, 
                                buttonNav:'bullets', 
                                directionNav:true,
                                autoplay:true, 
                                autoplayInterval:3000, 
                                pauseOnHover:true, 
                                mouse:true, 
                                shadow:true, 
                                reflection:false, 
                                reflectionHeight:0.2, 
                                reflectionOpacity:0.5, 
                                reflectionColor:'0,0,0',
                                description:false, descriptionContainer:'.description',
                                backOpacity:1,
                                before: function(carousel){}, 
                                after: function(carousel){}
        });                      
       
    });
    
          
$(".nav-bar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
 });
                 
 
$('#responsive').slick({
dots: false,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 2,
slidesToScroll:1,
infinite: true,
dots: false
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
});


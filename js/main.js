
$(".main__nav-bar a").click(function(){
    $("body,html").animate({
    scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
});

$(document).ready(function(){
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
        ]
    });
    

    $('.screenshots__carousel').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      centerMode: true,
      variableWidth: true,
      waitForAnimate: false,
      prevArrow:`<div class="arrow-left"></div>`,
      nextArrow:`<div class="arrow-right"></div>`
      
    });
    
   
    var imgs = $('.screenshots__carousel img');
    imgs.each(function(){
      var item = $(this).closest('.screenshots__item');
      item.css({
        'background-image': 'url(' + $(this).attr('src') + ')', 
        'background-position': 'center',            
        '-webkit-background-size': 'cover',
        'background-size': 'cover', 
      });
      $(this).hide();
    });
});


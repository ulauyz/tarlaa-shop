$(function(){
    $('.sliders-wrapper').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive:[
        {
            breakpoint: 320,
            settings: {
                 slidesToShow: 1, 
                 slidesToScroll: 1,
                 centerMode: true,
                 centerPadding: '70px',
            }
        },
        {
            breakpoint: 370,
            settings: {
                 slidesToShow: 2, 
                 slidesToScroll: 1,
                 centerMode: true,
                 centerPadding: '30px',
            }
        },
        {
            breakpoint: 500,
            settings: {
                 slidesToShow: 3, 
                 slidesToScroll: 1,
                 centerMode: false,
            }
        },
        {
            breakpoint: 830,
            settings: {
                 slidesToShow: 3.5, 
                 slidesToScroll: 1
            }
        }
    ],
    mobileFirst: true,
 });
})
 $(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
 })         

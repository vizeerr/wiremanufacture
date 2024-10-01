$(document).ready(function(){
    $('.logocrawler').slick({
        slidesToShow: 6,      
        slidesToScroll: 1,    
        autoplay: true,        
        autoplaySpeed: 1200,   
        dots: false,            
        arrows: false,
        responsive: [
            {
                breakpoint: 1200, // for large devices
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992, // for medium devices
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768, // for small devices
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576, // for extra small devices
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });
});
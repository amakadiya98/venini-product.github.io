
$('.content-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: ["<div class='nav-button custum-prev'></div>", "<div class='nav-button custum-next'></div>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.slider-owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
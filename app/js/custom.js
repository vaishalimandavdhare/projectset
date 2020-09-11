function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    var element = document.getElementById("site-logo");
    element.classList.remove("acitve");
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    var element = document.getElementById("site-logo");
    element.classList.add("acitve");
}


plyr.setup("#plyr-vimeo-example");


$(document).ready(function () {
    $('.common-carousel-slick').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            }
        ]
    });
});
$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        speed: 1600,
        navigation: {
            nextEl: ".main_visual .arrows .next",
            prevEl: ".main_visual .arrows .prev",
        },
    })
})

$(function () {
    const mis = new Swiper('.main_interior_slide', {
        loop: true,
        navigation: {
            nextEl: ".main_interior .arrows .next",
            prevEl: ".main_interior .arrows .prev",
        },
        pagination: {
            el: ".page",
            clickable: true,
        },
    })
})

$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {

        e.preventDefault();
        $('.header .gnb>ul>li ul').slideUp();
        $(this).next().stop().slideDown();
    })

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul>li ul').removeAttr('style')
    })
})

// $(function () {
//     $('.header .mbtn').on('click', function () {
//         $(this).toggleClass('on');
//         $('.header .gnb').toggleClass('on');
//     });

//     $('.header .gnb>ul>li>a').on('click', function (e) {
//         if ($('.header .gnb').hasClass('on')) {
//             e.preventDefault();
//             $('.header .gnb>ul ul').stop().slideUp();
//             $(this).next().stop().slideDown()

//         }
//     })

//     $(window).on('resize', function () {
//         $('.header .mbtn').removeClass('on')
//         $('.header .gnb').removeClass('on')
//         $('.header .gnb>ul ul').removeAttr('style')
//     });


//     $('.header .gnb').on('wheel touchmove', function (e) {
//         e.preventDefault();
//     })
// })
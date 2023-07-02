import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    loop: true,
    speed: 500,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1140: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    },
});
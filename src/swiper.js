// good slider
var swiper = new Swiper(".goodSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 84,
        },
    },
});
// guest slider
var swiper = new Swiper(".guestSwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// saxonSwiper
var swiper = new Swiper(".saxonSwiper", {
    slidesPerView: 3,
    spaceBetween: 39,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 19,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 29,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 39,
        },
    },
});
// instaSlider
var swiper = new Swiper(".instaSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 9,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 19,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 29,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 39,
        },
    },
});
// descSwiper
var swiper = new Swiper(".descSwiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 36,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 26,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 26,
        },
        1280: {
            slidesPerView: 3.6,
            spaceBetween: 36,
        },
        1440: {
            slidesPerView: 3.5,
            spaceBetween: 36,
        }
    },
});
// menu collepse
function Menu(e) {
    let list = document.querySelector('ul');

    e.name === 'menu'
        ?
        (e.name = "close", list.classList.add('top-[73px]'), list.classList.add('opacity-100'))
        :
        (e.name = "menu", list.classList.remove('top-[73px]'), list.classList.remove('opacity-100'))
}

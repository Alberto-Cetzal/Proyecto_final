const menu_btn = document.querySelector('.menu_btn')
const menu = document.querySelector('.sub_menu')

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },


        // // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});

menu_btn.addEventListener('click', () => menu.classList.toggle('active'))
document.querySelector('.arriba').addEventListener('click', () => window.scrollTo({behavior:"smooth",top:0}))



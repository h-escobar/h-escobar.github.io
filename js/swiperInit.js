// const swiper = new Swiper("#slider1", {
//     effect: "cube",
//     pagination: {
//         el: "#slider1 .swiper-pagination",
//         type: 'bullets',
//         clickable: true
//     },
//     lazyLoading: true,
//     loop: true,
//     keyboard: true
// });
// const swiper2 = new Swiper("#slider2", {
//     effect: "fade",
//     pagination: {
//         el: "#slider2 .swiper-pagination",
//         type: 'bullets',
//         clickable: true
//     },
//     lazyLoading: true,
//     loop: true,
//     keyboard: true
// });


const swiper = document.querySelectorAll('.swiper');

for( i=0; i< swiper.length; i++ ) {

swiper[i].classList.add('swiper-container-' + i);

var slider = new Swiper('.swiper-container-' + i, {
// Options
direction: "horizontal",
lazyLoading: true,
loop: true,
allowTouchMove: true,
effect: "cube",

keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
// If we need pagination
pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
},
// If we need navigation
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
}

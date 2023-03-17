// Toggle de menú responsive
export const navToggle = document.querySelector(".nav-toggle");
export const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => { //si le añado e desaparece
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

//


// //Toggle de menú responsive
// const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-items");

// navToggle.addEventListener("click", () => {
//     navMenu.classList.toggle(".nav-menu-link_visible");
// });

//Botón de volver arriba
// window.addEventListener('scroll', function(){
//     var scroll = document.querySelector('scrollTop');
//     scroll.classList.toggle("active" , window.scrollY > 300)
// })

// function scrollToTop(){
//     window.scrollTo({
//         top:0
//     })
// }

// window.addEventListener('scroll', function(){
//   var scroll = document.querySelector('scrollTop');
//   scroll.classList.toggle("active", window.scrollY > 500)
// });

// function scrollToTop(){
//   window.scrollTo({
//       top:0
//   })
// }
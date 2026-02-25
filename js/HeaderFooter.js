const GlobalHeader = document.querySelector('#globalHeader');

GlobalHeader.innerHTML = '<nav id="he-nav" class="nav-container grid container p-3 animate__animated animate__fadeIn">'+
    '<a href="index.html" class="navbar-brand he-brand of-hidden">'+
       '<img src="imgs/icons/RB-logo-nav.svg" alt="Meet Richard Black logo"></a>'+
    '<button class="nav-toggle">'+
        '<i class="fa-solid fa-bars"></i>'+
    '</button>'+
    '<ul class="nav-menu d-flex align-items-center nav-items">'+
        '<li class="p-3 nav-item"><a href="index.html" class="nav-menu-link">Home</a></li>'+
        '<li class="p-3 nav-item"><a href="bio.html" class="nav-menu-link">Bio</a></li>'+
        '<li id="fp" class="fp p-3 nav-item"><a href="index.html#featured-projects" class="nav-menu-link">Client Work</a></li>'+
        '<li class="p-3 nav-item"><a href="archive.html" class="nav-menu-link moodboard-link">Archive</a></li>'+
    '</ul>'+
    '</nav>';

const GlobalFooter = document.querySelector('#globalFooter');

GlobalFooter.innerHTML = '<div class="container pt-5">'+

'<div class="row">'+

    '<div class="col-md-3 wa-menu">'+
    '<a class="wa-link p-xs-3 mb-2 d-block" href="https://wa.me/?text=Hi.%20I am%20interested%20in%20talking%20about%20your%20design%20work.`" target="_blank"><img src="imgs/icons/WhatsApp-Logo.svg" alt="Chat with me via WhatsApp"></a>'+
    '<ul class="ls-type-none">'+
        '<li class="main-sitemap-link"><a class="he-gold footer-parent-link" href="index.html#featured-projects">Home/Featured work</a></li>'+
        '<li class="main-sitemap-link"><a href="https://www.behance.net/meetrichardblack" target="_blank" class="he-gold footer-parent-link">Previous work</a></li>'+
        '<li class="main-sitemap-link"><a class="he-gold footer-parent-link" href="bio.html">Bio</a></li>'+
        '<li class="main-sitemap-link"><a class="he-gold footer-parent-link" href="archive.html">Archive</a></li>'+
    '</ul>'+
    '</div>'+

    '<div class="col-md-9 block-widget">'+
    '<a class="widget-ig-link" href="https://www.instagram.com/meetrichardblack_" target="_blank"><span class="blanco">See more on instagram</span> </a>'+
    '<iframe src="https://snapwidget.com/embed/805960" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; height:auto;"></iframe>'+
    '</div>'+
'</div>'+

'<div class="row social-links">'+
    '<div class="col-md-12 p-3">'+
    '<ul class="d-flex justify-content-end">'+
        '<li><a href="https://www.behance.net/meetrichardblack" target="_blank"><img src="imgs/icons/behance-icon.png" alt="Behance H-EscobaR"></a></li>'+
        '<li><a href="https://www.linkedin.com/in/ricardohescobar" target="_blank"><img src="imgs/icons/in-icon.png" alt="Linkedin ricardohescobar"></a></li>'+
        '<li><a href="https://www.instagram.com/meetrichardblack_" target="_blank"><img src="imgs/icons/IG-icon.png" alt="Instagram Meet Richard Black"></a></li>'+
    '</ul>'+
    '</div>'+
'</div>'+
'<div class="row disclaimer">'+
    '<div class="col-md-12 p-1 text-center">'+
    '<p class="white"><small><em>Portfolio site designed and coded with ❤ by Richard Black.</em></small></p>'+
    '</div>'+
'</div>'+

'<container-fluid>'; 

// Scroll event to modify header properties on scroll
window.addEventListener('scroll', function(){
  var scroll = document.querySelector('#globalHeader');
  scroll.classList.toggle("active", window.scrollY > 250)
});

// Toggles responsive nav
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Close menu");
  } else {
    navToggle.setAttribute("aria-label", "Open menu");
  }
});

// Hides responsive menu after clicking on the anchor link (Work) and...
const menuLinks = document.querySelectorAll('.nav-menu li a[href^="index.html#featured-projects"]');
//Don't modify this (yet) Pending to add intersection observer
menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    navMenu.classList.remove("nav-menu_visible");
  });
});

//Adds aria attribute to menu links to indicate their current page
document.querySelectorAll('.nav-menu-link').forEach
(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  } else {
    link.removeAttribute('aria-current', 'page');
  }
}
)

//Back to Top btn
window.addEventListener('scroll', function(){
  const scroll = document.querySelector('#back-to-top-btn');
  scroll.classList.toggle("active", window.scrollY > 500)
})
function scrollToTop(){
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
};

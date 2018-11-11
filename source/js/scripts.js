var menuOpen = document.querySelector(".main-nav__toggle--open");
var menuClose = document.querySelector(".main-nav__toggle--close");
var menu = document.querySelectorAll(".main-navigation");

var link = document.querySelector(".week-product__button-buy");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

var linkCatalog = document.querySelectorAll(".catalog__icon-price");

for(var i = 0; i < menu.length; i++) {
  menu[i].classList.remove("main-nav__list--nojs");
}

menuOpen.classList.remove("main-nav__toggle--nojs");

if(menuOpen) {
  menuOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    for(var i = 0; i < menu.length; i++) {
      menu[i].classList.add("menu-show");
    }
    menuClose.classList.add("main-nav__toggle-show");
    menuOpen.classList.add("main-nav__toggle-none");
  });
}

if(menuClose) {
  menuClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    for(var i = 0; i < menu.length; i++) {
      menu[i].classList.remove("menu-show");
    }
    menuClose.classList.remove("main-nav__toggle-show");
    menuOpen.classList.remove("main-nav__toggle-none");
  });
}

if(link) {
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay--opacity");
  });
};

if(linkCatalog) {
  for(var i = 0; i < linkCatalog.length; i++) {
    linkCatalog[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      overlay.classList.add("overlay--opacity");
    })
  };
}

if(overlay) {
  overlay.addEventListener("mouseup", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("overlay--opacity");
  });
}

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("overlay--opacity");
  }
});

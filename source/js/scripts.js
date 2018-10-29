var link = document.querySelector(".week-product__button-buy");
var popup = document.querySelector(".modal");
var background = document.querySelector(".modal__background");

var linkCatalog = document.querySelectorAll(".catalog__icon-price");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  background.classList.add("modal__background--opacity");
});

background.addEventListener("mouseup", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  background.classList.remove("modal__background--opacity");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt. preventDefault();
    popup.classList.remove("modal-show");
    background.classList.remove("modal__background--opacity");
  }
});


linkCatalog.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  background.classList.add("modal__background--opacity");
  console.log("Норм?");
});

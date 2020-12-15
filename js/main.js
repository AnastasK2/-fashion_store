var menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  document.querySelector(".header__block").classList.toggle("header__block--visible");

});
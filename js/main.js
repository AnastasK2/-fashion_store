var menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  document.querySelector(".header__block").classList.toggle("header__block--visible");
});

var mySwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },

})




var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal (){
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}
function closeModal (event){
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}


var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

var modalOverlay = $('.modal__overlay');
var modalDialog = $('.modal__dialog');

function openModal (){
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}
function closeModal (event){
  event.preventDefault();
  // if(event.code === 27) {
  //   modalOverlay.removeClass('modal__overlay--visible');
  //   modalDialog.removeClass('modal__dialog--visible');
  // }
  // else{
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  // }
}

modalOverlay.on('click', closeModal);


 //обработка формы
 $(".form").each(function (){
  $(this).validate({
    errorClass: "invalid",
    messages: {
      mail: {
        required: "Пожалуйста, введите адрес электронной почты",
        mail: "Ваша почта должна быть в виде name@domain.com"
      },
      pass: {
        required: "Пожалуйста, введите пароль",
        // mail: "Ваша пароль "
      }
    },
  });
});
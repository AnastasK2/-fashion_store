
  var menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function () {
    document.querySelector(".header__block").classList.toggle("header__block--visible");
  });

  document.getElementById("defaultOpen").click();

  $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  });


    var btn = $('#buttonUp'); 

    $(window).scroll(function() {     
      if ($(window).scrollTop() > 300) {
        btn.addClass('button__up--show');
      } else {
        btn.removeClass('button__up--show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });


  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  var mySwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    disableOnInteraction: false,
    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      modifierClass: 'swiper-pagination',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },

  })

  var historySwiper = new Swiper('.history-slider', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    navigation: {
      nextEl: '.history__button--next',
      prevEl: '.history__button--prev',
      // disabledClass: '.swiper-button-disabled--next',
      // disabledClass: '.swiper-button-disabled--prev'
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: true,
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
  //обработка формы
  $(".form").each(function (){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "Пожалуйста, введите адрес электронной почты",
          mail: "Ваша почта должна быть в виде name@domain.com"
        },
      },
    });
  });

// $(".history__button--next img").attr("src", "../img/arrowBNActive.png");
// $(".history__button--prev img").attr("src", "../img/arrowBPActive.png");

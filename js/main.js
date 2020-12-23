
  var menuButton = document.querySelector('.menu-button');
  var closeMenuButton = document.querySelector('.header__close--mobile--visible');
  menuButton.addEventListener('click', function () {
    document.querySelector(".header__block").classList.add("header__block--visible");
  });
  closeMenuButton.addEventListener('click', function () {
    document.querySelector(".header__block").classList.remove("header__block--visible");
  });
  document.getElementById("defaultOpen").focus();
  document.getElementById("defaultOpen").click();
 

// кнопка вверх
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
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    
    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      modifierClass: 'swiper-pagination',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },

    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
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

  modalOverlay.on('click', closeModal); //закрываем нажимая вне окна

  // document.addEventListener('keydown', closeModal);  //закрываем по нажатию
  

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

  var historyButtons = document.querySelector('.history__buttons');
  var historyButtonNext = document.querySelector('.history__button--next');
  var historyButtonPrev = document.querySelector('.history__button--prev');
  var tabIn = historyButtonPrev.getAttribute('tabindex');
      if( tabIn == -1){
        // console.log("swiper-button-disabled!");
        $(".history__image__prev").attr("src", "img/arrowBPrev.png");
      } 
      else {
        $(".history__image__prev").attr("src", "img/arrowBPActive.png");
      }

historyButtons.addEventListener("click", function () {
    var tabIn = historyButtonPrev.getAttribute('tabindex');
    var tabIn2 = historyButtonNext.getAttribute('tabindex');
      if( tabIn == -1){
        // console.log("swiper-button-disabled!");
        $(".history__image__prev").attr("src", "img/arrowBPrev.png");
      }
      else {
        $(".history__image__prev").attr("src", "img/arrowBPActive.png");
      }

      var tabIn2 = historyButtonNext.getAttribute('tabindex');
      if( tabIn2 == -1){
        // console.log("swiper-button-disabled!");
        $(".history__image__next").attr("src", "img/arrowBNext.png");
      }
      else {
        $(".history__image__next").attr("src", "img/arrowBNActive.png");
      }     
  });


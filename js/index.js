// HERO swiper

const bannerContext = document.querySelector(".banner__context")
const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
})

// раскрывашка

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header__item__btn').forEach(function(HeaderItemBtn){
    HeaderItemBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.header__item__btn').forEach(function(btn){
        btn.classList.remove('header__item__btn__active')});
      e.currentTarget.classList.add('header__item__btn__active');


      document.querySelectorAll('.header__dropdown').forEach(function(HeaderDropdown){
        HeaderDropdown.classList.remove('is-active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
    });
  });
});

new SimpleBar(document.querySelector(".simplebar"), {
  autoHide: false,
  scrollbarMaxSize: 25,
});


// Choices
document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices gallery__choices',
    },
  });
});


// gallery-swiper
let gallerySlider = new Swiper(".gallery__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
    keyboard: {
    enabled: true,
    onlyInViewport: true,
     pageUpDown: true,

  },

  grid: {
    rows: 1
  },
  spaceBetween: 50,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__swiper-button-next",
    prevEl: ".gallery__swiper-button-prev"
  },

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     grid: {
  //       rows: 1
  //     },
  //     spaceBetween: 0
  //   },
  //   576: {
  //     slidesPerView: 2,
  //     grid: {
  //       rows: 1
  //     },
  //     spaceBetween: 30
  //   },

  //   1200: {
  //     slidesPerView: 3,
  //     grid: {
  //       rows: 1
  //     },
  //     spaceBetween: 50
  //   }
  // },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

// DEVELOPMENTS
let developmentsSwiper = new Swiper(".developments__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
    keyboard: {
    enabled: true,
    onlyInViewport: true,
     pageUpDown: true,
  },
  grid: {
    rows: 1
  },
  navigation: {
    nextEl: ".developments-button-next",
    prevEl: ".developments-button-prev"
  },
  spaceBetween: 50,

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});



// accordion

$( function() {
  $( ".accordion__list" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true,
    //  active: false
   });
 } );

// CATALOG-tab

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.accordion__bottom-link').forEach(function(HeaderItemBtn){
    HeaderItemBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.accordion__bottom-link').forEach(function(btn){
        btn.classList.remove('accordion__bottom-link__active')});
      e.currentTarget.classList.add('accordion__bottom-link__active');


      document.querySelectorAll('.catalog__painter').forEach(function(HeaderDropdown){
        HeaderDropdown.classList.remove('catalog__painter__activ')});
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter__activ');
    });
  });
});

// PARTNER swiper

let projectsPartnersSwiper = new Swiper(".projects__partners-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
    keyboard: {
    enabled: true,
    onlyInViewport: true,
     pageUpDown: true,
  },
  grid: {
    rows: 1
  },
  navigation: {
    nextEl: ".partner-button-next",
    prevEl: ".partner-button-prev"
  },
  spaceBetween: 50,

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

// INPUT

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

// new window.JustValidate('.contacts__form', {

  // rules: {
  //   name: {
  //     required: true,
  //     minLength: 2,
  //     maxLength: 10,
  //   //   strength: {
  //   //     custom: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]'
  //   // }
  //   },
  //   tel: {
  //     required: true,
  //     function: (name, value) => {
  //       const phone = selector.inputmask.unmaskedvalue()
  //       return Number(phone) && phone.lenght === 10
  //     },
  //   },
  // },
  // messages: {
  //   name: {
  //     maxLength: 'Недопустимый формат'
  //   },
  //   tel: {
  //     required: 'Недопустимый формат'
  //   }

  // },
// });

const validation = new JustValidate('.contacts__form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 5,
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#tel', [
    {
      // rule: 'minLength',
      // value: 2,
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10;
      },
      errorMessage: 'Недопустимый формат tel',
    },
  ]);


// MAP
// document.addEventListener("DOMContentLoaded", function () {
//   ymaps.ready(init);
//   function init() {
//     var myMap = new ymaps.Map("map", {
//       center: [55.75, 37.60],
//       zoom: 10
//     });
//     var myPlacemark = new ymaps.Placemark([55.75, 37.60], {}, {
//       iconLayout: 'default#image',
//       iconImageHref: 'img/Placemark.svg',
//       iconImageSize: [28, 40],
//       iconImageOffset: [-3, -42]
//     });
//     myMap.geoObjects.add(myPlacemark);
//   }
// });

    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.75, 37.60],
            zoom: 15
        });
        var myPlacemark = new ymaps.Placemark([55.75, 37.60], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/Placemark.svg',
          iconImageSize: [20, 20],
          // iconImageOffset: [-3, -42]
      });
      myMap.geoObjects.add(myPlacemark);
    }

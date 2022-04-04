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

const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

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
  slidesPerView: 1,
  slidesPerGroup: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,

  },

  grid: {
    rows: 1
  },
  spaceBetween: 0,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: ".gallery__swiper-button-next",
    prevEl: ".gallery__swiper-button-prev"
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  breakpoints: {
    // 260: {
    //   slidesPerView: 1,
    //   slidesPerGroup: 1,
    //   spaceBetween: 0
    // },
    420: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },

    1120: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  // a11y: {
  //   prevSlideMessage: 'Предыдущий слайд',
  //   nextSlideMessage: 'Следующий слайд',
  // }

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
  slidesPerView: 1,
  slidesPerGroup: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  grid: {
    rows: 1
  },
  spaceBetween: 0,
  pagination: {
    el: '.developments-swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".developments-button-next",
    prevEl: ".developments-button-prev"
  },

  breakpoints: {
    // 320: {
    //   slidesPerView: 1,
    //   slidesPerGroup: 1,
    //   spaceBetween: 0
    // },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },


  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
});



// accordion

$(function () {
  $(".accordion__list").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    //  active: false
  });
});

// CATALOG-tab

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion__bottom-link').forEach(function (HeaderItemBtn) {
    HeaderItemBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.accordion__bottom-link').forEach(function (btn) {
        btn.classList.remove('accordion__bottom-link__active')
      });
      e.currentTarget.classList.add('accordion__bottom-link__active');


      document.querySelectorAll('.catalog__painter').forEach(function (HeaderDropdown) {
        HeaderDropdown.classList.remove('catalog__painter__activ')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter__activ');
    });
  });
});

// PARTNER swiper

let projectsPartnersSwiper = new Swiper(".projects__partners-swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 0,

  navigation: {
    nextEl: ".partner-button-next",
    prevEl: ".partner-button-prev"
  },

  breakpoints: {
    // 320: {
    //   slidesPerView: 1,
    //   slidesPerGroup: 1,
    //   spaceBetween: 0
    // },
    681: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  }
});

// INPUT

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);
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
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10;
      },
      errorMessage: 'Недопустимый формат',
    },
  ]);


// MAP
// ymaps.ready(init);
// function init(){
//     var myMap = new ymaps.Map("map", {
//         center: [55.75, 37.60],
//         zoom: 15
//     });
//     var myPlacemark = new ymaps.Placemark([55.75, 37.60], {}, {
//       iconLayout: 'default#image',
//       iconImageHref: 'img/Placemark.svg',
//       iconImageSize: [20, 20],
//   });
//   myMap.geoObjects.add(myPlacemark);
// }

ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: 'img/Placemark.svg',
      iconImageSize: [20, 20],
      // iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

// BURGER

document.querySelector(".header__btn-open").addEventListener("click", function () {
  document.querySelector(".header__top__nav").classList.add("active");
})
document.querySelector(".header__nav__close").addEventListener("click", function () {
  document.querySelector(".header__top__nav").classList.remove("active");
})

// ЛУПА
function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    }
  });

  search.addEventListener('click', function (evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    this.disabled = true;

    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }
  });

  closeBtn.addEventListener('click', function () {
    openBtn.disabled = false;
    search.classList.add(params.hiddenClass);
  });

  document.body.addEventListener('click', function (evt) {
    if (!evt._isSearch && search._isOpened) {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    }
  });
}

setSearch({
  openBtnClass: "header__top__search", // класс кнопки открытия
  closeBtnClass: "header__top__search-close", // класс кнопки закрытия
  searchClass: "header__top__form", // класс формы поиска
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});

// TOOLTIP

(() => {
  tippy('.js-tooltip-btn', {
    theme: 'tooltip',
    maxWidth: 264,
  });
})();


// MODAL

const gallerySlide = document.querySelectorAll('.gallery__slide');
const modalOverlay = document.querySelector('.gallery__modal-overlay');
const modals = document.querySelectorAll('.gallery__modal');
const modalBtn = document.querySelectorAll('.gallery__modal__btn');
console.log(modalBtn);

gallerySlide.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('gallery__modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal--visible');
    modalOverlay.classList.add('gallery__modal-overlay--visible');
  });
});

modalBtn.forEach( function (el){
  el.addEventListener('click', (e) => {
    modalOverlay.classList.remove('gallery__modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('gallery__modal--visible');
    });
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('gallery__modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('gallery__modal--visible');
    });
  }
});

// scroll-catalog
const MOBILE_WIDTH = 960;

function getWindowWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

function scrollToContent(link, isMobile) {
  if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
    return;
  }

  const href = link.getAttribute('href').substring(1);
  const scrollTarget = document.getElementById(href);
  const elementPosition = scrollTarget.getBoundingClientRect().top;

  window.scrollBy({
    top: elementPosition,
    behavior: 'smooth'
  });
}

document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    scrollToContent(this, true);
  });
});

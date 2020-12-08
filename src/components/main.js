function LazyLoadFunction() {
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy",
  });
  lazyLoad.update();
}

$(document).ready(function () {
  LazyLoadFunction();
  $(".header__menu--item").each((index, element) => {
    $(element).has(".header__menu--submenu").addClass("has-submenu");
  });

  var position = $(window).scrollTop();

  $(window).scroll(function () {
    if (document.documentElement.scrollTop > 90) {
      document.querySelector(".stuff__top").style.visibility = "visible";
      document.querySelector(".stuff__top").style.opacity = "1";
    } else {
      document.querySelector(".stuff__top").style.visibility = "hidden";
      document.querySelector(".stuff__top").style.opacity = "0";
    }

    var scroll = $(window).scrollTop();
    if (scroll > position && scroll >= 90) {
      console.log("scrollDown");
      document.querySelector(".header__navigate").classList.add("fixed");
    } else {
      document.querySelector(".header__navigate").classList.remove("fixed");
      console.log("scrollUp");
    }
    position = scroll;
  });

  new Swiper(".swiper__customer .swr__carousel .swiper-container", {
    speed: 1000,
    slidesPerView: 4,
    loop: true,
    //#region lazy load swiper
    preloadImages: false,
    lazy: true,
    //#endregion
    navigation: {
      nextEl: ".swiper__customer .swr__button--next",
      prevEl: ".swiper__customer .swr__button--prev",
    },
    pagination: {
      el: ".swiper__customer .swr__pagination",
      type: "fraction",
      currentClass: "swr__pagination--current",
      totalClass: "swr__pagination--total",
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          "<span class='mx-1'>/</span>" +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
      formatFractionCurrent: function (number) {
        if (number < 10) return "0" + number;
        return number;
      },
      formatFractionTotal: function (number) {
        if (number < 10) return "0" + number;
        return number;
      },
    },
  });

  new Swiper(".news__container .swr__carousel .swiper-container", {
    speed: 1000,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 42,
    //#region lazy load swiper
    preloadImages: false,
    lazy: true,
    //#endregion
    simulateTouch: false, // tắt kéo-thả chuột khi chuyển slide
    navigation: {
      nextEl: ".news__container .swr__button--next",
      prevEl: ".news__container .swr__button--prev",
    },
  });

  new Swiper(".banner__container.swiper-container", {
    speed: 1500,
    slidesPerView: 1,
    loop: true,
    simulateTouch: false,
    //#region effect
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    //#endregion
    navigation: {
      nextEl: ".banner__container .swr__button--next",
      prevEl: ".banner__container .swr__button--prev",
    },
  });

  $(".our_service__tab--item").click(function () {
    const dataTab = $(this).data("tab");

    $(".our_service__tab--item").removeClass("active");
    $(this).addClass("active");

    $(".our_service__tab--content").removeClass("active");
    $(`.our_service__tab--content[data-tab='${dataTab}']`).addClass("active");
  });

});

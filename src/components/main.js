function LazyLoadFunction() {
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy",
  });
  lazyLoad.update();
}

$(document).ready(function () {
  LazyLoadFunction();
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
});

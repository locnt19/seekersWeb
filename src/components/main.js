function LazyLoadFunction() {
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy",
  });
  lazyLoad.update();
}

$(document).ready(function () {
  LazyLoadFunction();
});

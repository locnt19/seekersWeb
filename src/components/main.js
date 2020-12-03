function LazyLoadFunction() {
  // function logElementEvent(eventName, element) {
  // 	console.log(Date.now(), eventName, element.getAttribute("data-src"));
  // }
  // var callback_enter = function (element) {
  // 	logElementEvent("🔑 ENTERED", element);
  // };
  // var callback_exit = function (element) {
  // 	logElementEvent("🚪 EXITED", element);
  // };
  // var callback_loading = function (element) {
  // 	logElementEvent("⌚ LOADING", element);
  // };
  // var callback_loaded = function (element) {
  // 	logElementEvent("👍 LOADED", element);
  // };
  // var callback_error = function (element) {
  // 	logElementEvent("💀 ERROR", element);
  // 	element.src = `https://via.placeholder.com/256/?text=Not found`;
  // };
  // var callback_finish = function () {
  // 	logElementEvent("✔️ FINISHED", document.documentElement);
  // };
  var lazyLoad = new LazyLoad({
    elements_selector: '.lazy',
    // log
    // callback_enter: callback_enter,
    // callback_exit: callback_exit,
    // callback_loading: callback_loading,
    // callback_loaded: callback_loaded,
    // callback_error: callback_error,
    // callback_finish: callback_finish
  });
  lazyLoad.update();
}

$(document).ready(function () {
  LazyLoadFunction();
});

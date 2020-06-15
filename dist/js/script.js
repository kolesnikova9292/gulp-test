"use strict";

var debounce = function debounce(fn) {
  var frame;
  return function () {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(function () {
      fn.apply(void 0, params);
    });
  };
};

var storeScroll = function storeScroll() {
  document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener("scroll", debounce(storeScroll), {
  passive: true
});
storeScroll();
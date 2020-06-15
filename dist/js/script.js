"use strict";

console.log(55555); // The debounce function receives our function as a parameter

var debounce = function debounce(fn) {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  var frame; // The debounce function returns a new function that can receive a variable number of arguments

  return function () {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    } // Queue our function call for the next frame


    frame = requestAnimationFrame(function () {
      // Call our function and pass any params we received
      fn.apply(void 0, params);
    });
  };
}; // Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets


var storeScroll = function storeScroll() {
  document.documentElement.dataset.scroll = window.scrollY;
}; // Listen for new scroll events, here we debounce our `storeScroll` function


document.addEventListener('scroll', debounce(storeScroll), {
  passive: true
}); // Update scroll position for first time

storeScroll();
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LANDSCAPE = 'LANDSCAPE';
var PORTRAIT = 'PORTRAIT';

var resizePositionProportionally = function resizePositionProportionally(windowW, windowH, contentW, contentH, orientation) {
  var aspectRatio = contentW / contentH;
  var scale = void 0;
  if (orientation !== undefined) {
    switch (orientation) {
      case LANDSCAPE:
        scale = windowW / contentW * 1;
        break;
      case PORTRAIT:
        scale = windowH / contentH * 1;
        break;
      default:
        scale = windowW / contentW * 1;
    }
  } else {
    scale = windowW / windowH < aspectRatio ? windowH / contentH * 1 : windowW / contentW * 1;
  }
  var newW = contentW * scale;
  var newH = contentH * scale;
  return {
    width: newW,
    height: newH,
    left: (windowW >> 1) - (newW >> 1),
    top: (windowH >> 1) - (newH >> 1),
    scale: scale
  };
};

exports.default = resizePositionProportionally;
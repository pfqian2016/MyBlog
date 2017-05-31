/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var caesars = function () {
  var strToEncode = void 0;
  var encodedStr = void 0;
  var decodedStr = void 0;
  return {
    getStr: function getStr(str) {
      strToEncode = str.toUpperCase();
    },
    encode: function encode() {
      //TODO encode str
      var encodedArr = rot13(strToEncode);
      return encodedStr = encodedArr.map(function (val) {
        return String.fromCharCode(val);
      }).join('');
    },
    decode: function decode() {
      //TODO decode str
      var decodedArr = rot13(strToEncode);
      return decodedStr = decodedArr.map(function (val) {
        return String.fromCharCode(val);
      }).join('');
    }
  };
}();

function rot13(str) {
  var codeArr = [];
  for (var i = 0; i < str.length; i++) {
    codeArr.push(str.charCodeAt(i));
  }
  var ret = codeArr.map(function (val) {
    if (val >= 65 && val <= 77) {
      return val + 13;
    } else if (val >= 78 && val <= 90) {
      return val - 13;
    } else {
      return val;
    }
  });
  return ret;
}
module.exports = caesars;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var caesars = __webpack_require__(0);

window.onload = function () {
  var btnEncode = document.getElementById('btn-encode');
  var btnDecode = document.getElementById('btn-decode');
  btnEncode.addEventListener('click', function (e) {
    var textEncode = document.getElementById('text-encode');
    caesars.getStr(textEncode.value);
    var ret = caesars.encode();
    var result = document.getElementById('result');
    result.innerHTML = ret;
  }, true);
  btnDecode.addEventListener('click', function (e) {
    var textDecode = document.getElementById('text-decode');
    caesars.getStr(textDecode.value);
    var ret = caesars.decode();
    var result = document.getElementById('result');
    result.innerHTML = ret;
  }, true);
};

/***/ })
/******/ ]);
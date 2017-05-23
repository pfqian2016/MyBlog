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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);
$(document).ready(function () {
  $(".navbar-nav").click(function (event) {
    if ($(event.target).is("a")) {
      $(".navbar-nav").children().removeClass("active");
      $(event.target).parent().addClass("active");
    }
  });
  //鼠标滚动时，nav随滚动区域变化高亮的item
  $(document).scroll(function () {
    var scroll_distance = $(this).scrollTop();
    var $section = $("#main").find("section");
    var currentId = "";
    $section.each(function () {
      var $that = $(this);
      var top = $that.offset().top;
      if (scroll_distance > top - 50) {
        currentId = $that.attr("id");
      }
    });

    var $cur_link = $("#nav-header-collapse ul").find(".active");
    if (currentId && $cur_link.attr("id").split("-")[1] != currentId) {
      $cur_link.removeClass("active");
      $cur_link.parent().find("#" + "tab-" + currentId).addClass("active");
    }
  });
  //预加载图片
  (function () {
    var images = document.getElementsByClassName('img');
    for (var i = 0; i < images.length; i++) {
      var src = '../asset/img/' + images[i].alt + '.jpg';
      preloadNode(images[i]).setSrc(src);
    }

    function _setSrc(src) {
      this.src = src;
    }
    function preloadNode(node) {
      var img = new Image();
      img.onload = function () {
        _setSrc.call(node, this.src);
      };
      return {
        setSrc: function setSrc(src) {
          _setSrc.call(node, '/asset/img/loading.gif');
          img.src = src;
        }
      };
    }
  })();
  $("#submit").click(function (event) {
    event.preventDefault();
    alert("Not supported for now");
  });
});

/***/ })
/******/ ]);
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
  var index = 1; //当前为第几张图片
  var timeoutId = void 0;
  var moving = false;
  timeoutId = setTimeout(autoMove, 5000);
  //为左右翻页添加点击事件
  $("#left").click(function (event) {
    event.preventDefault();
    if (!moving) {
      index -= 1;
      activeBtn();
      move(480);
    }
  });
  $("#right").click(function (event) {
    event.preventDefault();
    if (!moving) {
      index += 1;
      activeBtn();
      move(-480);
    }
  });
  //为下方按钮添加点击事件
  $(".button-group").click(function (event) {
    var $target = $(event.target);
    if ($target.is("span")) {
      if (!moving) {
        var cur_index = parseInt($(this).find(".active").attr("index"));
        index = parseInt($target.attr("index"));
        activeBtn();
        move(-480 * (index - cur_index));
      }
    }
  });
  $(".focus").mouseenter(function (event) {
    $(".arrow").css("visibility", "visible");
    clearTimeout(timeoutId); //取消自动轮播
  }).mouseleave(function (event) {
    $(".arrow").css("visibility", "hidden");
    timeoutId = setTimeout(autoMove, 5000); //重新设置自动轮播
  });
  /**
  * 这个函数用于移动图片，接收一个移动参数
  * @param dis为需要移动的距离
  */
  function move(dis) {
    moving = true;
    var $picture = $(".picture");
    var left = parseInt($picture.css("left"));
    left += dis;
    $picture.animate({ left: left }, 400, "linear", function () {
      if (left > -480) {
        left = -2880;
      }
      if (left < -2880) {
        left = -480;
      }
      $picture.css("left", left + "px");
      moving = false;
    });
  }
  /**
  * 这个函数是用于点亮下方的几个小按钮的
  */
  function activeBtn() {
    if (index < 1) {
      index = 6;
    }
    if (index > 6) {
      index = 1;
    }
    var $cur_active = $(".button-group").find(".active");
    if ($cur_active.attr("index") !== index) {
      $cur_active.removeClass("active");
      $(".button-group").find('[index=' + index + ']').addClass("active");
    }
  }
  /**
   * 实现焦点图自动轮播
   */
  function autoMove() {
    index += 1;
    activeBtn();
    move(-480);
    timeoutId = setTimeout(autoMove, 5000);
  }
});

/***/ })
/******/ ]);
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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
__webpack_require__(0);
$(document).ready(function () {
  //从服务器拉取博客简介
  var loadBlogs = function () {
    $.getJSON('blogs.json', function (data) {
      for (var i = 0; i < Math.min(data.length, 10); i++) {
        composeBlog(data[i]);
      }
    });
  }();
  //将JSON数据组装成一条博客简介
  function composeBlog(_ref) {
    var title = _ref.title,
        pubtime = _ref.pubtime,
        path = _ref.path,
        abstract = _ref.abstract;

    var html = '';
    html = '<article class="article">\n      <div class="head">\n        <h1 class="title"><a href="' + path + '">' + title + '</a></h1>\n        <p class="pubtime">' + pubtime + '</p>\n      </div>\n      <div class="entry">\n        <blockquote>\n          <p>\u539F\u6587: <a href="' + path + '">http://www.qianpengfei.com' + path + '</a></p>\n        </blockquote>\n        <p class="abstract">' + abstract + '</p>\n        <p class="more"><a href="' + path + '">\u9605\u8BFB\u539F\u6587&gt;&gt;</a></p>\n      </div>\n    </article>';
    $('.article-list').append(html);
  }

  var $main = $("#main");
  $("#about").click(function (event) {
    event.preventDefault();
    $main.load("aboutme.html .about-container");
    $("#sidebar").removeClass("nav-show");
  });
  $("#links").click(function (event) {
    event.preventDefault();
    $main.load("friendlink.html .link-container");
    $("#sidebar").removeClass("nav-show");
  });
  $("#demo").click(function (event) {
    event.preventDefault();
    $main.load("demo.html .demo-container");
    $("#sidebar").removeClass("nav-show");
  });
  $("#nav-btn").click(function (event) {
    event.preventDefault();
    $("#sidebar").toggleClass("nav-show");
  });
  //移动终端情况下，打开了sidebar过后点击其他地方隐藏sidebar
  $("#main").click(function () {
    $("#sidebar").removeClass("nav-show");
  });
});

/***/ })
/******/ ]);
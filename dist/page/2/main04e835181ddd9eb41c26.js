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
    $.getJSON('/blogs.json', function (data) {
      var pages = Math.ceil(data.length / 8);
      addPagesNav(pages, $('#main'));
      initPagesCtrl(pages, $('.pages'));
      for (var i = 0; i < Math.min(data.length - 8, 8); i++) {
        composeBlog(data[i + 8]);
      }
    });
  }();
  //分页函数
  function addPagesNav(pages, appendToDom) {
    if (pages === 1) return;
    var html = '';
    html += '<div class="pages">\n    <a href="#" data-control="prev"><i class="fa fa-chevron-left"></i> Previous</a>\n    <ul class="page-control">';
    for (var i = 1; i <= pages; i++) {
      html += '<li data-index="' + i + '"><a href="#">' + i + '</a></li>';
    }
    html += '</ul>\n    <a href="#" data-control="next">Next <i class="fa fa-chevron-right"></i></a>';
    $(appendToDom).append(html);
  }
  //初始化分页的点击事件
  function initPagesCtrl(pages, pagesDom) {
    $(pagesDom).find('a[data-control="prev"]').prop('href', '/');
    $(pagesDom).find('a[data-control="next"]').prop('href', 'javascript:;').addClass('btn-disable');
    $(pagesDom).find('.page-control li > a').each(function (index, element) {
      if (index === 0) {
        $(this).prop('href', '/');
      } else {
        self = $(this);
        $(this).prop('href', 'javascript:;').addClass('btn-disable');
      }
    });
  }
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
    $main.load("/aboutme.html .about-container");
    $("#sidebar").removeClass("nav-show");
  });
  $("#links").click(function (event) {
    event.preventDefault();
    $main.load("/friendlink.html .link-container");
    $("#sidebar").removeClass("nav-show");
  });
  $("#demo").click(function (event) {
    event.preventDefault();
    $main.load("/demo.html .demo-container");
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

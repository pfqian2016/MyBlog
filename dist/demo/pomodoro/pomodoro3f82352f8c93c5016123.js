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
  var $breakLength = $(".control .break-ctrl span");
  var $sessionLength = $(".control .session-ctrl span");
  var $time = $(".timer .time");
  var $type = $(".timer .type");
  var breakTime = $breakLength.text();
  var sessionTime = $sessionLength.text();
  // let countSession = sessionTime * 60;
  // let countBreak = breakTime * 60;
  // $time.text(sessionTime);
  //add time control click listener
  $time.text($sessionLength.text());
  $(".wrapper").click(function (event) {
    var target = event.target;
    switch (target.id) {
      case "break-minus":
        if (breakTime === 1) {
          $("#break-minus").prop("disabled");
          break;
        } else {
          breakTime--;
          $breakLength.text(breakTime);
          // countBreak = breakTime * 60;
          timer.initData();
          break;
        }
      case "break-plus":
        $("#break-minus").removeProp("disabled");
        breakTime++;
        $breakLength.text(breakTime);
        // countBreak = breakTime * 60;
        timer.initData();
        break;
      case "session-minus":
        if (sessionTime === 1) {
          $("#session-minus").prop("disabled");
          break;
        } else {
          sessionTime--;
          $sessionLength.text(sessionTime);
          $time.text(sessionTime);
          // countSession = sessionTime * 60;
          timer.initData();
          break;
        }
      case "session-plus":
        $("#session-minus").removeProp("disabled");
        sessionTime++;
        $sessionLength.text(sessionTime);
        $time.text(sessionTime);
        // countSession = sessionTime * 60;
        timer.initData();
        break;
    }
  });
  var id = void 0; //定时器Id
  var OffState = function OffState(timer) {
    this.timer = timer;
  };
  OffState.prototype.panelWasClicked = function () {
    console.log('start a timer');
    counter(this.timer).start();
    this.timer.setState(this.timer.onState);
  };
  var OnState = function OnState(timer) {
    this.timer = timer;
  };
  OnState.prototype.panelWasClicked = function () {
    console.log('stop a timer');
    counter(this.timer).stop();
    this.timer.setState(this.timer.offState);
  };
  var Timer = function Timer(btn) {
    this.offState = new OffState(this);
    this.onState = new OnState(this);
    this.btn = btn;
  };
  Timer.prototype.setState = function (nextState) {
    this.currState = nextState;
  };
  Timer.prototype.getType = function () {
    return this.type;
  };
  Timer.prototype.setType = function (type) {
    this.type = type;
  };
  Timer.prototype.initData = function () {
    this.sessionSeconds = $sessionLength.text() * 60;
    this.breakSeconds = $breakLength.text() * 60;
    this.currCount = this.sessionSeconds;
    this.totalCount = this.sessionSeconds;
    this.type = 'SESSION';
    this.currState = this.offState;
  };
  Timer.prototype.initCtrl = function () {
    var self = this;
    $(this.btn).on('click', 'p', function (e) {
      self.currState.panelWasClicked();
    });
  };
  var timer = new Timer($('.timer'));
  timer.initData();
  timer.initCtrl();
  var counter = function counter(timer) {
    //TODO then return a object
    return {
      start: function start() {
        var _this = this;

        console.log('counter start');
        $(".control button").attr("disabled", "true");
        if (timer.currCount) {
          id = setInterval(function () {
            timer.currCount--;
            var minute = Math.floor(timer.currCount / 60);
            var second = Math.floor(timer.currCount % 60);
            if (second < 10) {
              second = "0" + second;
            }
            $type.text(timer.getType());
            $time.text(minute + ":" + second);
            var fillHeight = (1 - timer.currCount / timer.totalCount) * 100 + "%";
            var fillColor = "#03bb7a";
            $(".fill").css({
              height: fillHeight,
              background: fillColor
            });
            //倒计时为0时，切换另外一种模式
            if (!timer.currCount) {
              clearInterval(id);
              changeType(timer);
              _this.start();
            }
          }, 1000);
        }
      },
      stop: function stop() {
        $(".control button").removeAttr("disabled");
        clearInterval(id);
      }
    };
  };
  function changeType(timer) {
    function isSession(timer) {
      return timer.getType() === 'SESSION';
    }
    if (isSession(timer)) {
      timer.currCount = timer.breakSeconds;
      timer.totalCount = timer.breakSeconds;
      timer.setType('BREAK');
    } else {
      timer.currCount = timer.sessionSeconds;
      timer.totalCount = timer.sessionSeconds;
      timer.setType('SESSION');
    }
  }
});

/***/ })
/******/ ]);
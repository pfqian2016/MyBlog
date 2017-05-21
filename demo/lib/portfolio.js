"use strict";

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
      var src = 'img/' + images[i].alt + '.jpg';
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
          _setSrc.call(node, '/images/loading.gif');
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
'use strict';

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
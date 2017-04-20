$(document).ready(function(){
  let $main = $("#main");
  $("#about").click(function(event){
    event.preventDefault();
    $main.load("aboutme.html .about-container");
    $("#sidebar").removeClass("nav-show");
  });
  $("#links").click(function(event){
    event.preventDefault();
    $main.load("friendlink.html .link-container");
    $("#sidebar").removeClass("nav-show");
  });
  $("#demo").click(function(event){
    event.preventDefault();
    $main.load("demo.html .demo-container");
    $("#sidebar").removeClass("nav-show");
  });
  $("#nav-btn").click(function(event){
    event.preventDefault();
    $("#sidebar").toggleClass("nav-show");
  });
  //移动终端情况下，打开了sidebar过后点击其他地方隐藏sidebar
  $("#main").click(function(){
    $("#sidebar").removeClass("nav-show");
  });
});

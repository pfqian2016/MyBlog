$(document).ready(function(){
  let $main = $("#main");
  $("#about").click(function(event){
    event.preventDefault();
    $main.load("aboutme.html .about-container");
  });
  $("#links").click(function(event){
    event.preventDefault();
    $main.load("friendlink.html .link-container");
  });
  $("#demo").click(function(event){
    event.preventDefault();
    $main.load("demo.html .demo-container");
  });
});

$(document).ready(function(){
  $("#sidebar .buttons").click(function(event){
    let $target = $(event.target);
    if($target.is("a")){
      let $main = $("#main");
      event.prevendDefault();
      switch ($target.attr("title")){
        case "about":
          $main.load("aboutme.html");
          break;
        case "links":
          $main.load("friendlink.html");
          break;
        case "demo":
          $main.load("demo.html");
          break;
      }
    }
  })
});

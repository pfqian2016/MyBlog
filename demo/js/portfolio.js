$(document).ready(function(){
  $(".navbar-nav").click(function(event){
    if($(event.target).is("a")){
      $(".navbar-nav").children().removeClass("active");
      $(event.target).parent().addClass("active");
    }
  });
  $(document).scroll(function(){
    let scroll_distance = $(this).scrollTop();
    let $section = $("#main").find("section");
    let currentId = "";
    $section.each(function(){
      let $that = $(this);
      let top = $that.offset().top;
      if(scroll_distance > top - 50){
        currentId = $that.attr("id");
      }
    });

    let $cur_link = $("#nav-header-collapse ul").find(".active");
    if(currentId && $cur_link.attr("id").split("-")[1] != currentId){
      $cur_link.removeClass("active");
      $cur_link.parent().find("#"+"tab-"+currentId).addClass("active");
    }
    console.log();
  });
});

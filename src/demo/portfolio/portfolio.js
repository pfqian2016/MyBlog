require('./portfolio.css');
$(document).ready(function(){
  $(".navbar-nav").click(function(event){
    if($(event.target).is("a")){
      $(".navbar-nav").children().removeClass("active");
      $(event.target).parent().addClass("active");
    }
  });
  //鼠标滚动时，nav随滚动区域变化高亮的item
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
  });
  //预加载图片
  (function(){
    var images = document.getElementsByClassName('img');
    for(let i = 0; i < images.length; i++) {
      let src ='../asset/img/' + images[i].alt + '.jpg';
      preloadNode(images[i]).setSrc(src);
    }

    function setSrc(src) {
      this.src = src;
    }
    function preloadNode(node) {
      let img = new Image;
      img.onload = function() {
        setSrc.call(node, this.src);
      }
      return {
        setSrc(src) {
          setSrc.call(node, '/asset/img/loading.gif');
          img.src = src;
        }
      };
    }
  })();
  $("#submit").click(function(event){
    event.preventDefault();
    alert("Not supported for now");
  });
});

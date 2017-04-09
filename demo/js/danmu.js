/**
 * This version has problem debugging in Safari
 */
$(document).ready(function(){
  $("#post").click(function(){
    var $edit=$("#edit");
    var text=$edit.val();
    if(!text){
      alert("Please enter something");
    }
    var $danmu=$('<p class="danmu"></p>')
    var randomPos=Math.floor((parseInt($("#screen").innerHeight())-40)*Math.random())-20;
    var randomColor=""+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16);
    $danmu .css({"top":randomPos+"px",
                  "color":"#"+randomColor});//left screenwidth
    $danmu.text(text);
    $danmu.prependTo("#screen");
    var pWidth=$danmu.innerWidth();//declaration influence the value
    $edit.val("");//clear input
    $edit.attr("autofocus","true");
    var randomTime=Math.floor(Math.random()*5000+5000);
    $danmu.animate({left:-pWidth},randomTime,function(){
      $(this).remove();
    });
  });
  $("#clear").click(function(){
    $("#screen").html("");
  });
});

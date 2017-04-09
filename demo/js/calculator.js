$(document).ready(function(){
  let text="";
  $(".buttons").click(function(event){
    let $screen=$("#screen");
    let $target=$(event.target);
    if($target.is("button")){
      if($target.text()==="="){
        //TODO calculate the value
        let value=eval($screen.val());
        $screen.val(value);
      }else if ($target.text()==="AC") {
        text=""
        $screen.val(text);
      }else if ($target.text()==="CE") {
          let newText=text.slice(0,text.length-1);
          $screen.val(newText);
      }else{
        text+=$target.text();
        $screen.val(text);
      }
    }
  })
});

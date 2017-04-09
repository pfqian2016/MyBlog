$(document).ready(function(){
  const quotes=[["Life isn't simple. But the beauty of it is, you can always start over. It'll get easier.","Alacia Bessette"],
              ["There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.","Alfred Korzybski"],
              ["The first step to getting the things you want out of life is this: Decide what you want.","Ben Stein"],
              ["If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.","Albert Einstein"],
              ["A great secret of success is to go through life as a man who never gets used up.","Albert Schweitzer"],
              ["Find somebody to be successful for. Raise their hopes. Think of their needs.","Barack Obama"],
              ["Misfortune shows those who are not really friends.","Aristotle"],
              ["A good friend can tell you what is the matter with you in a minute. He may not seem such a good friend after telling.","Arthur Brisbane"],
              ["Friendship make prosperity more shining and lessens adversity by dividing and sharing it.","Cicero"],
              ["You see things; and you say, 'Why?' But I dream things that never were; and I say, 'Why not?'","George Bernard Shaw"],
              ["Human beings have an inalienable right to invent themselves.","Germaine Greer"],
              ["They say dreams are the windows of the soul--take a peek and you can see the inner workings, the nuts and bolts.","Henry Bromel,"],
              ["The discovery of a new dish does more for human happiness than the discovery of a new star.","Anthelme Brillat-Savarin"],
              ["Content makes poor men rich; discontentment makes rich men poor.","Benjamin Franklin"],
              ["The pursuit of happiness is a most ridiculous phrase; if you pursue happiness you'll never find it.","C. P. Snow"],
              ["Complaining is good for you as long as you're not complaining to the person you're complaining about.","Lynn Johnston "],
              ["A strong positive mental attitude will create more miracles than any wonder drug.","Patricia Neal"],
              ["Human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives.","William James"],
              ["Nearly all men can stand adversity, but if you want to test a man's character, give him power.","Abraham Lincoln"],
              ["Many a man's reputation would not know his character if they met on the street.","Elbert Hubbard"]];
  let randomQuote=Math.floor(Math.random()*20);
  let randomColor="#"+Math.floor(Math.random()*256).toString(16)+Math.floor(Math.random()*256).toString(16)+Math.floor(Math.random()*256).toString(16);
  var $body=$("body");
  var $blockquote=$("blockquote");
  var $author=$("#author");
  var $button_group=$(".button-group a");
  var $blockquote_text=$("blockquote span");
  var $blockquote_author=$("#author span");
  var $twitter=$("#twitter");
  var $new_quote=$("#new-quote");
  //set quote and author
  $blockquote_text.text(quotes[randomQuote][0]);
  $blockquote_author.text(quotes[randomQuote][1]);

  //set background color
  $body.css("background-color",randomColor);
  $blockquote.css("color",randomColor);
  $author.css("color",randomColor);
  $button_group.css("color",randomColor);
  //set twitter button
  let text=encodeURIComponent('"'+$blockquote_text.text()+'"');
  let author=encodeURIComponent('"'+$blockquote_author.text()+'"');
  let uri="https://twitter.com/intent/tweet?"
          +"hashtags=quotes"+"&"
          +"text="+text
          +author;
  $twitter.attr("href",uri);

  $new_quote.click(function(event){
    event.preventDefault();
    randomQuote=Math.floor(Math.random()*20);
    randomColor="#"+Math.floor(Math.random()*256).toString(16)+Math.floor(Math.random()*256).toString(16)+Math.floor(Math.random()*256).toString(16);
    $body.css("background-color",randomColor);
    $blockquote.css("color",randomColor);
    $author.css("color",randomColor);
    $button_group.css("color",randomColor);
    $blockquote_text.text(quotes[randomQuote][0]);
    $blockquote_author.text(quotes[randomQuote][1]);

    //set twitter button
    text=encodeURIComponent('"'+$blockquote_text.text()+'"');
    author=encodeURIComponent('"'+$blockquote_author.text()+'"');
    uri="https://twitter.com/intent/tweet?"
            +"hashtags=quotes"+"&"
            +"text="+text
            +author;
    $twitter.attr("href",uri);
  });
  $("#weibo").click(function(event){
    event.preventDefault();
    alert("Not supported for now");
  });
});

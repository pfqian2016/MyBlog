$(document).ready(function(){
  //从服务器拉取博客简介
  let loadBlogs = (function() {
    $.getJSON('blogs.json', (data) => {
      for(let i = 0; i < Math.min(data.length, 10); i++) {
        composeBlog(data[i]);
      }
    });
  })();
  //将JSON数据组装成一条博客简介
  function composeBlog({title, pubtime, path, abstract}) {
    let html = '';
    html = `<article class="article">
      <div class="head">
        <h1 class="title"><a href="${path}">${title}</a></h1>
        <p class="pubtime">${pubtime}</p>
      </div>
      <div class="entry">
        <blockquote>
          <p>原文: <a href="${path}">http://www.qianpengfei.com${path}</a></p>
        </blockquote>
        <p class="abstract">${abstract}</p>
        <p class="more"><a href="${path}">阅读原文&gt;&gt;</a></p>
      </div>
    </article>`
    $('.article-list').append(html);
  }

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


/**
 * Ajax with javascript
 */
// window.onload = function(){
//   let btn_ajax = document.getElementById("ajax");
//   btn_ajax.addEventListener("click",function(event){
//     event.preventDefault();
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//       if (xhr.readyState == 4){
//         if((xhr.status >= 200 && xhr.status <=300) || xhr.status == 304){
//           //TODO handle the returned data
//           let data = JSON.parse(xhr.responseText);
//           alert(data["reason"]);
//         }else {
//           alert("Request was unsuccessful");
//         }
//       }
//     }
//     let location = "成都";
//     let uri = encodeURIComponent(location);
//     let requestURI = "http://v.juhe.cn/weather/index?format=2" +
//                       "&cityname=" + uri +
//                       "&key=" + "0f020205d64b8e54776a1bed6aa3d741";
//     let testURI = "weather.json";
//     xhr.open("GET",testURI,true);
//     xhr.setRequestHeader("Content-Type","application/json;charset=utf-8");
//     xhr.send(null);
//   },false);
// };

/**
 * Ajax with jQuery
 */

 $(document).ready(function(){
   const location = "成都";
   const uri = encodeURIComponent(location);
   let btn = $("#ajax");
   //weather.json is for test
     $.ajax({
       type: "GET",
      //  url: "weather.json",
       url: "http://v.juhe.cn/weather/index?format=2" +
            "&cityname=" + uri +
            "&key=" + "0f020205d64b8e54776a1bed6aa3d741",
       dataType: "json",
       success: function(data){
         handleDatas(data);
       },
       error: function(jqXHR){
         alert(jqXHR.status);
       }
     });
     $.ajax({
       type: "GET",
       url: "http://web.juhe.cn:8080/environment/air/pm?" +
            "city=" + location +
            "&key=" + "dd536747a8de2f295d022958e0cddd4d",
       dataType: "json",
       success: function(data){
         handleAirDatas(data);
       },
       error: function(jqXHR){
         alert(jqXHR.status);
       }
     });
     function handleAirDatas(data){
       let result = data.result;
       $("#pm25 span").text(result[0]["PM2.5"]);
       $("#pm10 span").text(result[0]["PM10"]);
       $("#aqi span").text(result[0]["AQI"]);
       $("#quality span").text(result[0]["quality"]);
       $("#time span").text(result[0]["time"]);
     }
     function handleDatas(data){
       let result = data.result;
       $("#current-temp span").text(result.sk.temp);
       $("#city span").text(result.today.city);
       $("#date span").text(result.today.date_y);
       $("#today-temp span").text(result.today.temperature);
       $("#dressing-index span").text(result.today.dressing_index);
       $("#uv-index span").text(result.today.uv_index);
       let $future = $(".future-temp");
       for(let i = 0;i < 7;i++){
         $future.eq(i).find(".day").text(result.future[i].week);
         $future.eq(i).find(".temperature").text(result.future[i].temperature);
         $future.eq(i).find(".weather").text(result.future[i].weather);
       }
     }
 });

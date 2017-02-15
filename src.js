function submit(){
console.log(document.getElementById("search").value);
var myRequest = new XMLHttpRequest();



 myRequest.onreadystatechange = function() {
   if (myRequest.readyState === 4 && myRequest.status === 200) {
       var data = myRequest.responseText;
       var store = [];

       JSON.parse(data)['hits'].reduce(function(res, elem,idx){
         store.push(elem['fields']['brand_name']);

      },0);

  var ul =document.getElementById('brands');

  store.forEach(function(ele){
    var opt =document.createElement("a");

    opt.setAttribute("class", "item");
    opt.setAttribute("href", "javascript:;");


opt.textContent=ele;



ul.appendChild(opt);
  })
      // for(var i =0 ;i< store.length; i++){
      //   var res = "<li><a class=\"item\" href=\"javascript:;\">"+store[i]+"</a></li>";
      //   console.log(res);
      //   document.getElementById("brands").innerHTML = res;
      // }
 }};

 myRequest.open("GET", "https://api.nutritionix.com/v1_1/search/"+document.getElementById("search").value+"?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=22abaad9&appKey=f286963aed1edb4e49a2b3f179bff498", true);
 myRequest.send();

};

function functionName() {
  var cls = document.getElementsByClassName("item");
  for(var i=0; i < cls.length;i++){
    cls[i].onclick = function(){
      document.getElementById("hero").style.display = "none";
      document.getElementById("res").style.display = "block";
      console.log("test");
    }
  }
}





var myRequest2 = new XMLHttpRequest();

  myRequest2.onreadystatechange = function() {
    if (myRequest2.readyState === 4 && myRequest2.status === 200) {
        var data2 = JSON.parse(myRequest2.responseText);
         //console.log(data2);
      document.getElementById("img1").innerHTML.src = data2['value'][2]['contentUrl'];
    }
  };

  myRequest2.open(
      "POST","https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + value,
      true
  );
  myRequest2.setRequestHeader("Content-Type","multipart/form-data");
  myRequest2.setRequestHeader("Ocp-Apim-Subscription-Key","46fa6f32bc44492d87b34c95e1a37a10");
  myRequest2.send();

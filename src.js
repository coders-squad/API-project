var waterfall = function(arg) {
    var i = 0;
    while (i < arg.length) {
        arg[i]();
        i++;
    }
}
var arr = [];
function submit() {
    setTimeout(function() {
        document.getElementById("hero").style.display = "block";
        document.getElementById("res").style.display = "none";
        console.log(document.getElementById("search").value);
        var myRequest = new XMLHttpRequest();



        myRequest.onreadystatechange = function() {
            if (myRequest.readyState === 4 && myRequest.status === 200) {
                var data = myRequest.responseText;
                var store = [];

                JSON.parse(data)['hits'].reduce(function(res, elem, idx) {
                store.push(elem['fields']['brand_name']);
                arr.push(elem['fields']);
                // console.log(elem['fields']);
                }, 0);

                var div = document.getElementById('brands');
                div.innerHTML = "";
                store.forEach(function(ele) {
                    var opt = document.createElement("a");

                    opt.setAttribute("class", "item");
                    opt.setAttribute("href", "javascript:;");
                    opt.setAttribute("value", ele);

                    opt.textContent = ele;



                    div.appendChild(opt);
                });

            }
        };

        myRequest.open("GET", "https://api.nutritionix.com/v1_1/search/" + document.getElementById("search").value + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=22abaad9&appKey="+keys.food_key, true);
        myRequest.send();
    }, 500);
};

function getBrands() {
    setTimeout(function() {
        var cls = document.getElementsByClassName("item");
        for (var i = 0; i < cls.length; i++) {
            
            cls[i].onclick = function() {
                document.getElementById("hero").style.display = "none";
                document.getElementById("res").style.display = "block";
                var itemVal = this.getAttribute("value");
                console.log(itemVal);
                for (var j = 0; j < arr.length; j++) {
                    if(itemVal == arr[j].brand_name){
                        document.getElementById("calories").innerHTML = arr[j].nf_calories;
                        document.getElementById("fats").innerHTML = arr[j].nf_total_fat;
                    }
                }
                
            }
        }
    }, 2000);
}

function getImage() {
    setTimeout(function() {
        var myRequest2 = new XMLHttpRequest();

        myRequest2.onreadystatechange = function() {
            if (myRequest2.readyState === 4 && myRequest2.status === 200) {
                var data2 = JSON.parse(myRequest2.responseText);
                var imageUrl = data2.queryExpansions[2].thumbnail.thumbnailUrl;
                console.log(imageUrl);
                document.getElementById("meal_img").setAttribute("src", imageUrl);
            }
        };
        var val = document.getElementById("search").value;
        myRequest2.open(
            "POST", "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + val,
            true
        );
        myRequest2.setRequestHeader("Content-Type", "multipart/form-data");
        myRequest2.setRequestHeader("Ocp-Apim-Subscription-Key", keys.image_key);
        myRequest2.send();
    }, 1000);
}
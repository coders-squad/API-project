var test = QUnit.test;

test("check if the function waterfall exists",function(t){
  t.ok(window.waterfall,"it exists");
});

test("check if the function submit exists",function(t){
  t.ok(window.submit,"it exists");
});

test("check if the function getBrands exists",function(t){
  t.ok(window.getBrands,"it exists");
});

test("check if the function getImage exists",function(t){
  t.ok(window.getImage,"it exists");
});

QUnit.test( "When I click on the submit button it should implement waterfall function", function( t ) {
  var done = t.async();
  var done2 = t.async();
  var done3 = t.async();
  var done4 = t.async();
  var input = document.getElementById("btn").onclick = function(){
        waterfall([
          submit,
          getBrands,
          getImage
        ]);
    setTimeout(function() {
      var val = document.getElementById("brands").textContent;
      t.equal(typeof(val), "string", "Should insert a sting");
      done2();
    },2000);

    setTimeout(function(){
        var calories = document.getElementById('calories').textContent;
        console.log(calories);
        var fats = document.getElementById('fats').textContent;
        console.log(fats);
        t.equal(calories, "383.03", "When shearch egg and click on Nutritionix brand calories should be 383.03");
        t.equal(fats, "25.97", "When shearch egg and click on Nutritionix brand fats should be 25.97");
        done3();
    },7000);
    setTimeout(function() {
      var imageUrl = document.getElementById("meal_img").getAttribute("src");
      t.equal(imageUrl, "https://tse4.mm.bing.net/th?q=Deviled+Eggs&pid=Api&mkt=en-XA&adlt=strict&t=1", "should return image url");
      done4();
    },8000);  
  };
  
});

// var waterfall = function(value, arg ,cb) {

//   if( arg.length === 0){
//     cb(value);
//  }

//   arg[0](value,function(total){
//      waterfall(total,arg.slice(1),cb)
//   });
// }

// function add_one (n,cb) {
//   setTimeout(function(){
//     const total = n + 1;
//     cb(total);
//   },200);
// }

// function less_one (n,cb) {
//   setTimeout(function(){
//     const total = n - 1;
//     cb(total);
//   },200);
// }

// function multiply_two (n,cb) {
//   setTimeout(function(){
//     const total = n * 2;
//     cb(total);
//   },200);
// }
// function start (n,cb) {
//   setTimeout(function(){
//     const total = parseInt(n)
//     cb(total);
//   },200);
// }

// waterfall('5', [
//   start,
//   add_one,
//   multiply_two,
//   less_one
// ], function(res) {
//   console.log(res); // => 3
// });
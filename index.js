// var numbers = Array(45);
// var fill = numbers.fill();
// var mapping = fill.map(function (element, index) {
//   return index + 1;
// });


var numbers = Array(45)
.fill()
.map(function (element, index) {
  return index + 1;
})


var shuffle = [];
while (numbers.length > 0) {
  var moveNumber = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
  shuffle.push(moveNumber);
}
console.log(shuffle);
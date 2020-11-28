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
var bonus = shuffle[shuffle.length - 1];
var answer = shuffle.slice(0, 6) // 0부터 6째 자리까지, 6은 포함안됨. 실제로는 5까지
console.log('당첨숫자들 ' + answer + ', 보너스 ' + bonus)
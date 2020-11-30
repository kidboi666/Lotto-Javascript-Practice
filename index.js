// var numbers = Array(45);
// var fill = numbers.fill();
// var mapping = fill.map(function (element, index) {
//   return index + 1;
// });

var numbers = Array(45) // 45 empty 배열 생성
.fill() // 45개로 쪼개진 undefined 배열 생성
.map(function (element, index) {
  return index + 1; // 
})

var shuffle = [];
while (numbers.length > 0) {
  var moveNumber = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
  shuffle.push(moveNumber);
}

console.log(shuffle);
var bonus = shuffle[shuffle.length - 1];
var answer = 
  shuffle.slice(0, 6) // 0부터 6째 자리까지, 6은 포함안됨. 실제로는 5까지
  .sort(function(p, c) { return p - c }); 

console.log(`당첨숫자들 ${answer} 보너스 ${bonus}`);

var result = document.querySelector('.result');

function ballColoring(num, result) {
  var ball = document.createElement('div');
  ball.textContent = num;
  ball.style.display = 'inline-block';
  ball.style.border = '1px solid black';
  ball.style.borderRadius = '50%';
  ball.style.width = '40px';
  ball.style.height = '40px';
  ball.style.textAlign = 'center';
  ball.style.fontSize = '40px';
  ball.style.marginRight = '10px';
  ball.style.padding = '20px';
  var backgroundColor;
  if (num <= 10) {
    backgroundColor = 'red';
  } else if (num <= 20) {
    backgroundColor = 'orange';
  } else if (num <= 30) {
    backgroundColor = 'yellow';
  } else if (num <= 40) {
    backgroundColor = 'blue';
  } else {
    backgroundColor = 'green';
  }
  ball.style.background = backgroundColor;
  result.appendChild(ball);
}

setTimeout(function getSecond() {
  ballColoring(answer[0], result);
}, 1000);
setTimeout(function getSecond() {
  ballColoring(answer[1], result);
}, 2000);
setTimeout(function getSecond() {
  ballColoring(answer[2], result);
}, 3000);
setTimeout(function getSecond() {
  ballColoring(answer[3], result);
}, 4000);
setTimeout(function getSecond() {
  ballColoring(answer[4], result);
}, 5000);
setTimeout(function getSecond() {
  ballColoring(answer[5], result);
}, 6000);

setTimeout(function getSecond() {
  var bonusBlank = document.querySelector('.bonus');
  ballColoring(bonus, bonusBlank);
}, 7000);

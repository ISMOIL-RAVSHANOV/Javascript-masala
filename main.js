// 1;
function getAverage(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

console.log(getAverage([4, 2, 3]));
// //2
const arr = [-1, 2, 3];
const inverted = [];

for (let i = 0; i < arr.length; i++) {
  inverted.push(-arr[i]);
}

console.log(inverted);
3;
function getBonus(amount, condition) {
  if (condition) {
    return amount * 10;
  } else {
    return amount;
  }
}

const result4 = getBonus(500, true);
console.log(result4);
//4
function solution(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const result3 = solution("drow");
console.log(result3);
//5
function formatMoney(amount) {
  let amountStr = amount.toFixed(2);
  let formatted = "$";

  for (let i = 0; i < amountStr.length; i++) {
    formatted += amountStr[i];
  }

  return formatted;
}

const result = formatMoney(39.99);
console.log(result);
//6
function position(letter) {
  return letter.toLowerCase().charCodeAt(0) - 96;
}

const result2 = position("a");
console.log(result2);

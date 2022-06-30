// Давайте запишем в новый массив только те элементы,
// сумма первых двух цифр в которых равна сумме вторых двух цифр.

let array = [1524, 1321, 4563, 7144, 2879];

// function checkDigitsPairsSum(arr) {
//   let arr1 = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let elem = String(arr[i]);
//     console.log(elem);
//     if (+elem[0] + +elem[1] == +elem[2] + +elem[3]) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1;
// }

// console.log(checkDigitsPairsSum(array));

function checkDigitsPairsSum(num) {
  strNum = String(num);
  for (let i = 0; i <= strNum.length - 1; i++) {
    if (+strNum[0] + +strNum[1] == +strNum[2] + +strNum[3]) {
      return true;
    }
  }
  return false;
}

let arr1 = [];

for (let i = 0; i <= array.length - 1; i++) {
  if (checkDigitsPairsSum(array[i])) {
    arr1.push(array[i]);
  }
}
console.log(arr1);

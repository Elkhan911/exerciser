// getDivisors - находит все делители, возвращает массив
// inArray - проверяет наличие-отсутствие элемента в массиве
// getDiff - находит наличие общих элементов (делителей)
// getGreatestCommonDivisor - находит наибольший общий делитель

let num1 = 8;
let num2 = 15;

function getDivisors(num) {
  let divisorsArray = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      divisorsArray.push(i);
    }
  }
  return divisorsArray;
}

// console.log(getDivisors(24));

function inArray(element, array) {
  for (let elem of array) {
    return array.indexOf(element) !== -1;
  }
}

// console.log(inArray(2, getDivisors(24)));

function getDiff(arr1, arr2) {
  let res = [];
  for (let elem of arr1) {
    if (inArray(elem, arr2) == 1);
    res.push(elem);
  }
  return res;
}

function getInt(arr1, arr2) {
  let intersectionsArray = [];
  for (let elem of arr1) {
    if (inArray(elem, arr2)) {
      intersectionsArray.push(elem);
    }
  }
  return intersectionsArray;
}

// console.log(getInt(getDivisors(12), getDivisors(18)));

// console.log(getDiff(getDivisors(num1), getDivisors(num2)));
console.log(getDiff(getDivisors(10), getDivisors(100)));

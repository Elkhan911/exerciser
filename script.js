let arr = [4, 2, 5, 19, 13, 0, 10];

let sum = 0;
let result = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  sum += arr[i];
  result = Math.sqrt(sum);
}

console.log(sum);
console.log(result);

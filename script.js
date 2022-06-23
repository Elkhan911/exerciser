let arr = ["a", "b", "c", "d", "e"];

let obj = {};

for (let i = 1; i <= arr.length - 1; i++) {
  obj[arr[i - 1]] = i;
}

console.log(obj);

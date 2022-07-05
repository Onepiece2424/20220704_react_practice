//スプレッド構文
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

//分割代入時に要素をまとめる
const arr2 = [1, 2, 3, 4, 5];

const [num1, num2, ...arr3] = arr2;

console.log(num1);
console.log(num2);
console.log(...arr3);

//スプレッド構文
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// //分割代入時に要素をまとめる
// const arr2 = [1, 2, 3, 4, 5];

// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(...arr3);

//スプレッド構文の要素のコピーと結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];

// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//複数のオブジェクトの結合
// const obj4 = { val1: 10, val2: 20 };
// const obj5 = { val3: 30, val4: 40 };

// const obj6 = { ...obj4 };
// const obj7 = { ...obj4, ...obj5 };

// console.log(obj6);
// console.log(obj7);

//スプレッド構文を用いたコピー
const arr4 = [10, 20];
const arr8 = [...arr4];
arr8[0] = 100;
console.log(arr4);
console.log(arr8);

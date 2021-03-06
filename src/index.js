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
// const arr4 = [10, 20];
// const arr8 = [...arr4];
// arr8[0] = 100;
// console.log(arr4);
// console.log(arr8);

///プロパティ名と変数名が同一の場合

// const name = "田中";
// const age = 24;

// const user = {
//   name: name,
//   age: age
// };

// console.log(user);

// ///プロパティ名と変数名が同一の場合2
// const name = "田中";
// const age = 24;

// const user = {
//   name,
//   age
// };
// console.log(user);

//従来のfor文
// const nameArr = ["田中", "佐藤", "木村"];

// //for文は、初期値、限界値、加算値で設定する
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

//配列.map()
//配列を定義
// const nameArr = ["田中", "佐藤", "木村"];
// //引数（name）に配列の値が設定される
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//map関数の使用
// const nameArr = ["田中", "佐藤", "木村"];
// nameArr.map((name) => console.log(name));

//filter関数の使用
//filter関数は、条件に一致する値のみ配列の中から取り出す。

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

//for文のindexで配列の要素順を取り出す
// const nameArr = ["田中", "佐藤", "木村"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は、${nameArr[index]}です。`);
// }

//map関数の引数で配列の要素順を取り出す
// const nameArr = ["田中", "佐藤", "木村"];
// nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));

//map関数を用いた実装例
// const nameArr = ["田中", "佐藤", "木村"];
// const newNameArr = nameArr.map((name) => {
//   if (name === "田中") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

//?と:を使った処理の例
// const val1 = 1 > 0 ? "trueです。" : "falseです。";
// console.log(val1);

//数値を変換して出力する関数
// const printFormattedNum = (num) => {
//   const formattedNum =
//     typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
//   console.log(formattedNum);
// };

// printFormattedNum(1300);
// printFormattedNum("1300");

//関数のreturn部で三項演算子を用いる
//2つの引数の合計値が100を超えているか判定する関数
// const checkSumOver100 = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です。";
// };
// console.log(checkSumOver100(50, 40));
// console.log(checkSumOver100(50, 70));

//論理演算子を用いた条件分岐
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("フラグのどちらかはtrueです。");
// }

// if (flag1 && flag2) {
//   console.log("フラグの両方はtrueです。");
// }

//論理演算子「&&」「||」を使用してみる。
//「||」は左側がfalse判定なら右側を返す。
// const num = null;
// const fee = num || "全額未設定です。";
// console.log(fee);

// const num = 100;
// const fee = num || "全額未設定です。";
// console.log(fee);

// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("フラグのどちらかはtrueです。");
// }

//「&&」は左側がtrue判定なら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);

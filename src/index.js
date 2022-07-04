//従来の関数（例1）
// function func1(value) {
//   return value;
// }

//従来の関数（例２）
// const func1 = function (value) {
//   return value;
// };

//通常のアロー関数
// const func2 = (value) => {
//   return value;
// };

//（）を省略したアロー関数
// const func2 = (value) => {
//   return value;
// };
// console.log(func2("func2です。"));

//引数が２つ以上の時のアロー関数
// const func3 = (value1, value2) => {
//   return value1 + value2;
// };

// console.log(func3(1, 2));

//returnの省略時のアロー関数
// const func4 = (num1, num2) => num1 + num2;

// console.log(func4(1, 2));

//かっこで囲んで１行としてまとめる
// const func5 = (val1, val2) => ({
//   name: val1,
//   age: val2
// });
// console.log(func5("主田", 24));

//分割代入を使用しない文字列を出力
const myProfile = {
  name: "田中",
  age: 24
};

const message = `私の名前は、${myProfile.name}です。年齢は、${myProfile.age}です。`;

console.log(message);

//分割代入を使用しない文字列を出力
// const myProfile = {
//   name: "田中",
//   age: 24
// };

// const message = `私の名前は、${myProfile.name}です。年齢は、${myProfile.age}です。`;

// console.log(message);

//分割代入
const myProfile = {
  name: "田中",
  age: 24
};

const { name, age } = myProfile;

const message = `わたその名前は、${name}です。年齢は、${age}歳です。`;

console.log(message);

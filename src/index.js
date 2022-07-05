//分割代入を使用しない文字列を出力
// const myProfile = {
//   name: "田中",
//   age: 24
// };

// const message = `私の名前は、${myProfile.name}です。年齢は、${myProfile.age}です。`;

// console.log(message);

//分割代入
// const myProfile = {
//   name: "田中",
//   age: 24
// };

// const { name, age } = myProfile;

// const message = `わたその名前は、${name}です。年齢は、${age}歳です。`;

// console.log(message);

//一部のみ分割代入
// const myProfile = {
//   name: "田中",
//   age: 24
// };

// const { name } = myProfile;

// const message = `わたその名前は、${name}です。年齢は、${myProfile.age}歳です。`;

// console.log(message);

//順番を変えた時の分割代入
// const myProfile = {
//   name: "田中",
//   age: 24
// };

// const { age, name } = myProfile;

// const message = `わたその名前は、${name}です。年齢は、${age}歳です。`;

// console.log(message);

//抽出したプロパティに別名をつける
// const myProfile = {
//   name: "田中",
//   age: 24
// };

// const { name: newName, age: newAge } = myProfile;

// const message = `私の名前は${newName}です。年齢は${newAge}歳です。`;

// console.log(message);

//配列の分割代入
const myProfile = ["主田", 24];
const [name, age] = myProfile;

const message = `私の名前は、${name}です。年齢は、${age}です。`;
console.log(message);

//メッセージを出力する関数の書き方
// const sayHello = (name) => console.log(`こんにちは！${name}さん。`);
// sayHello("主田");

//引数が渡されなかった時
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん。`);
// sayHello();
// sayHello("田中");

//存在しないプロパティの出力
// const myProfile = {
//   age: 24
// };

// const { name } = myProfile;

// const message = `こんにちは！${name}さん。`;
// console.log(message);

//分割代入時にデフォルト値の設定
const myProfile = {
  age: 24
};
const { name = "田中" } = myProfile;
const message = `こんにちは！${name}さん！`;
console.log(message);

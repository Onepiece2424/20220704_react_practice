//メッセージを出力する関数の書き方
// const sayHello = (name) => console.log(`こんにちは！${name}さん。`);
// sayHello("主田");

//引数が渡されなかった時
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん。`);
sayHello();
sayHello("田中");

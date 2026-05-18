// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu = Number(kaisu+1);
  let yosokaisu = kaisu;
  let p = document.querySelector('span#kaisu');
  p.textContent = yosokaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let x = document.querySelector('input[name="kazu"]');
  let x2 = x.value;
  let a = Number(x2);
  let yoso;
  yoso = Number(a);
  let q = document.querySelector('span#yosou');
  q.textContent = yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if (Number(a)===Number(kotae)){
    let m = document.querySelector('p#result');
  m.textContent = '正解です．おめでとう!';
  }
  if (Number(a)!==Number(kotae)&&Number(kaisu)<4){
    m = document.querySelector('p#result');
  m.textContent = 'まちがい．残念でした答えは '+kotae+' です．';
  }
  // 　　　　  正解/不正解のときのメッセージを表示する

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let z = document.querySelector('button#kaito');

z.addEventListener('click',hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録

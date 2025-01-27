// カウンターの初期値を設定
let count = 0;

// DOMの読み込みが完了したら実行
window.onload = function() {
  const resultDiv = document.getElementById('js-result');
  
  // カウンター表示用の要素を作成
  const counterDisplay = document.createElement('p');
  counterDisplay.id = 'counter';
  counterDisplay.textContent = '回数: 0';
  resultDiv.appendChild(counterDisplay);
  
  // ボタンを作成
  const incrementButton = document.createElement('button');
  incrementButton.textContent = 'カウントアップ';
  resultDiv.appendChild(incrementButton);
  
  // ボタンクリック時の処理
  incrementButton.addEventListener('click', function() {
    count++;
    counterDisplay.textContent = '回数: ' + count;
  });
};

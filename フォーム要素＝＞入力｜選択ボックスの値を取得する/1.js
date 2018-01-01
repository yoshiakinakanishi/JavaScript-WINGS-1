
document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById('btn').addEventListener('click', function() { // id属性(btn)をクリックしたときのイベントリスナー
        var name = document.getElementById('name'); // id属性(name)であるテキストボックスを変数nameに代入
        console.log(name.value) //変数nameにvalueプロパティでアクセスして、入力した値を取得する
    }, false);
}, false);

/*
テキスト欄に文字を入れて送信ボタンを押すと、コンソール画面にその値が表示される
*/

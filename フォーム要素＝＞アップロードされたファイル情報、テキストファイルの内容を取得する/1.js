window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('file').addEventListener('change', function() { // clickではなくchangeにする
        var input = document.getElementById('file').files[0]; // 選択されたファイルを取得　＊単一選択なので0で決め打ち
        var reader = new FileReader();
        reader.addEventListener('load', function() { // FileReaderオブジェクトを利用するには、まずloadイベントリスナーを定義する
            // loadイベントリスナーの配下では、FileReader.resultプロパティで読み込んだテキストにアクセスできる
            // textContetプロパティでresultプロパティの戻り値をそのまま<pre id="result">要素に反映させる
            document.getElementById('result').textContent = reader.result; 
        }, false);
        // readAsTextメソッドでファイルを読み込む
        reader.readAsText(input, 'UTF-8');
    }, false);
});

/*
テキストファイルの内容を取得する
FileReaderオブジェクトを利用することで、取得したFileオブジェクトの内容を読み込むこともできます
まずは、ファイルの内容がテキストである前提で内容を読み込み、その結果をページに反映する
*/
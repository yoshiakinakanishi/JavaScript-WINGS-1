document.addEventListener('DOMContentLoaded', function() {
    
    var getRadio = function() {
        var result = ''; // 空の値を設定する変数resultを作成する
        var elems = document.getElementsByName('food');

        for(var i = 0; i < elems.length; i++) {
            var elem = elems.item(i);

            // チェックされている項目の値を配列に追加する
            if(elem.checked) {
                result = elem.value;
                break;　//チェック状態にあるものが見つかったタイミングで即ループを脱出(なくても動く)
            }
        }

        //returnで変数resultを返さないとダイアログに表示されない
        //先ほどは変数resultにtoString()メソッドでダイアログに文字列を返していた
        return result;
        
    };


    // 送信ボタンクリック時に選択項目をダイアログ表示する
    document.getElementById('btn').addEventListener('click', function() {
        window.alert(getRadio());
    }, false);

}, false);

/*
ラジオボタンを選択して、送信ボタンを押すと選択したものがダイアログが表示される
*/
document.addEventListener('DOMContentLoaded', function() {
    // 送信ボタンのid属性(btn)を取得する
    document.getElementById('btn').addEventListener('click', function() {

        // 選択値を格納するための配列
        var result = [];
        var foods = document.getElementsByName('food'); // チェックボックスの全てのname属性を一緒にしておくことがミソ!!

        for(var i = 0; i < foods.length; i++) {
            var food = foods.item(i);　// すべての要素を取得する(for分ループ + item(i)=>i番目の要素を取得)

            // チェックされている項目の値を配列に追加する
            if(food.checked) { // foodが選択された場合は・・・(checkedプロパティ)
                result.push(food.value); 
                // 先ほど空配列を設定した変数resultを使用する
                // pushメソッドで配列の最後に要素を追加する
                // valueプロパティで値を取得する　＊各々のcheckbocのvalue属性にはラーメン/焼肉/カレーが設定済み
            }
        }

        // 配列の内容をダイアログに出力
        window.alert(result.toString()); // 空配列の変数resultにtoString()メソッドを使用する(文字列として返す)

    }, false);
}, false);

/*
チェックボックスを選択して、送信ボタンを押すと選択したものがダイアログが表示される
*/
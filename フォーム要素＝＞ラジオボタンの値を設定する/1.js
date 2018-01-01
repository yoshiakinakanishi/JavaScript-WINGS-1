document.addEventListener('DOMContentLoaded', function() {
    var setRadio = function(name, value) {
        var elems = document.getElementsByName('food');
        
        for(var i = 0; i < elems.length; i++) {
            var elem = elems.item(i);

            if(elem.value === value) {
                elem.checked = true;
                break; // 合致した要素が見つかったところでforループを脱出する
            }
        }
    };

    setRadio('food', 'カレー');

}, false)


/*
ラジオボタンfoodの初期値を設定する(今回は最後の要素のカレー)
*/  

/*
・ラジオボタンの値を設定する
・NodeListオブジェクトを取得する
・forループで個々の要素にアクセス
・個々の要素を取り出せた後は、設定したい値と同じvalue値を持つラジオボタンを探す
・合致した要素のcheckedプロパティをtrueに設定する
*/
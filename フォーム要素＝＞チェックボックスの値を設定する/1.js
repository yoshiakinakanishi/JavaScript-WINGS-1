document.addEventListener('DOMContentLoaded', function() {
    var setCheck = function(name, value) {
        var elems = document.getElementsByName('food'); 

            for(var i = 0; i < elems.length; i++) {
                var elem = elems.item(i);

                // 配列valueにvalue属性と等しい値が含まれる場合は選択状態に
                // indexOf()メソッドで配列に指定された要素が存在しない場合は-1を返す
                // -1より大きいかどうかで存在を判定している
                if(value.indexOf(elem.value) > -1) {
                    elem.checked = true;
                }
            } 
    };

    // 上で定義したsetCheck関数を呼び出し
    // 引数nameにはfoodを渡す
    // 引数valueには配列をす(今回はラーメンとカレー)
    setCheck('food', ['ラーメン', 'カレー']);

}, false)

/*
チェックボックスの初期値を最初の要素と最後の要素にする
*/
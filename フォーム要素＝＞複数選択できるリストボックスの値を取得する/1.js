document.addEventListener('DOMContentLoaded', function() {
    
    var getSelect = function() {
        var result = [];
        // optionsプロパティにアクセス
        // optionsプロパティは戻り値としてoption要素群を返す
        var opts = document.getElementById('food').options;

        for(var i = 0; i < opts.length; i++) {
            var opt = opts.item(i);

            if(opt.selected) { // option要素が選択されているかを確認するのは、checkedプロパティではなくselectedプロパティ
                result.push(opt.value);
            }
        }

        return result;
    };
    
    document.getElementById('btn').addEventListener('click', function() {
        window.alert(getSelect());
    }, false)

}, false)

/*
リストボックスを複数選択して、送信ボタンを押すとダイアログに表示される
*/
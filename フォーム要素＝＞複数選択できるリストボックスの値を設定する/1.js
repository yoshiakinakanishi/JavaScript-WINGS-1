document.addEventListener('DOMContentLoaded', function() {
    var setSelect = function(value) {
        var opts = document.getElementById('food');
        
        for(var i = 0; i < opts.length; i++) {
            var opt = opts.item(i);

            if(value.indexOf(opt.value) > -1) {
                opt.selected = true;
        }
    }
};

    setSelect( ['ラーメン','カレー']);

}, false);

/*
リストボックスの初期値は最初と最後の要素
*/
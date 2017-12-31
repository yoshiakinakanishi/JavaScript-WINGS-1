
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        window.alert('OK');
    }, false);
}, false);

/*
onイベント名は同一の要素、同一のイベントに対して、複数のイベントハンドラをひも付けられない
そこで「イベントリスナー」を使って解決できる
イベントリスナーは「同一の要素の同一イベントに対して、複数ひも付けられるイベントハンドラー」のこと
イベント名にonは付けず、onを抜いたイベントの種類のみにするのがポイント
*/

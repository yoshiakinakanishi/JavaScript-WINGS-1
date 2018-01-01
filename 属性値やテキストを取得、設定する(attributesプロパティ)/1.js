document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('logo') // <img id='logo'>を取得
    var attrs = logo.attributes; // img要素に含まれるすべての属性を一覧取得
    for(var i = 0; i < attrs.length; i++) {
        var attr = attrs.item(i);
        console.log(attr.name + ':' + attr.value);
    }
}, false)

/*
特定の要素ノードに属するすべての属性を取得する場合はattributesプロパティを使用する
*/
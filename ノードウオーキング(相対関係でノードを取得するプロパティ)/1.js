
var food = document.getElementById('food');
var opts = food.childNodes;　//select要素配下の全ての子ノードを取得する
for(var i = 0; i < opts.length; i++) { //子ノードを順番に取得する
    var opt = opts.item(i);
    if(opt.nodeType === 1) { //子ノードが要素ノードの場合(戻り値は1)
        console.log(opt.value); 
    }
}

/*
childeNodesプロパティはすべての子ノードを取ってしまうので、
option要素だけを取り出す場合は、取り出したノードが要素ノードであるかどうかを確認する必要がある
そこで、ノードの種類を判定するために、nodeTypeプロパティをつかいます！
*/

/*
ラーメン
寿司
カレー
*/
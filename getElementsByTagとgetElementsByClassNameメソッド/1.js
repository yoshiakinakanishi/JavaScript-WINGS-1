
var list = document.getElementsByTagName('a');
for(var i = 0; i < list.length; i++) {
    console.log(list.item(i).href);
};

var my = document.getElementsByClassName('my');
for(var i = 0; i < my.length; i++) {
    console.log(my.item(i).href);
}
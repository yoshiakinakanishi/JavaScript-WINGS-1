
var list = document.getElementsByTagName('a');
for(var i = 0; i < list.length; i++) {
    console.log(list.item(i).href);
};

/*
https://www.google.com
https://www.google.co.jp
https://www.dmm.com
https://www.dmm.co.jp
*/

var my = document.getElementsByClassName('my');
for(var i = 0; i < my.length; i++) {
    console.log(my.item(i).href);
}

/*
https://www.dmm.com
https://www.dmm.co.jp
*/
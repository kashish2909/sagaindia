//var images=['img/factory/1.jpg','img/factory/2.jpg','img/factory/3.jpg'];
var i=0;
$('#intro').backstretch([
  "img/factory2/11.jpg",
  "img/factory2/3.jpg",  
  "img/factory2/1.jpg",
  "img/factory2/4.jpg",
  "img/Saga Clients/1.jpg",
  "img/factory2/8.jpg",
  "img/factory2/13.jpg",
"img/Saga Clients/6.jpg"
  
  
 ], {duration: 3000, fade: 750});
 

window.onload=init;
function init(){

  var h= document.querySelector('#services').style.height;
  document.querySelector('#services').querySelector('div').style.height=h;

}

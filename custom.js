var dogum_gun = prompt("Lütfen Gün Giriniz : ");
var dogum_ay = prompt("Lütfen AY Giriniz : ");
var dogum_yil = prompt("Lütfen Yıl Giriniz : ");

var gun = new Date().getDay();
var ay = new Date().getMonth();
var yil = new Date().getFullYear();

var yas = yil-dogum_yil;
document.writeln(yas);
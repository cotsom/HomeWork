alert('Задание 1.');

var tc = +prompt('Введите, сколько градусов по цельсию вы хотите перевести в градусы по фаренгейту');
var tf = (9 / 5) * tc + 32;
alert(tc + ' ' + 'градусов по цельсию = ' + tf + ' ' + 'градусов по фаренгейту.');


alert('Задание 2.');

var a = 10;
var b = 11;
alert('переменная a = ' + a);
alert('переменная b = ' + b);
a += b;
b -= a;
a -= b;
alert(a);
alert(b);


alert('Задание 3.');

var name = 'Василий';
var admin = name;
alert(admin);


alert('Задание 4.');

//var a = 1000 + '108';
var a = 1000 ;
var b = '108';
alert(a + b);
let num1, num2, message = "Введите число";
num1 = +prompt(message + "num1");
num1 = +prompt(message + "num2");
if (num1<= 1) alert("Переменная num1 меньше или равна 1");
if (num2 >=3) alert("Переменная num2 больше или равна 3");




let test = true;
console.log(true ? '+++': '---' );




let day = Math.ceil(Math.random() *31 +1);
if (day >= 1 && day <=10){
    console.log(`Число ${day} находится в перывой декаде`)
}
else if (day >= 10 && day <=20){
    console.log(`Число ${day} находится во второй декаде`)
}
else if (day >= 20 && day <=31){
    console.log(`Число ${day} находится в третий декаде`)
}




let userNumber = prompt('Введите число');
let hundreds = (userNumber - userNumber % 100) / 100
let units = userNumber % 10;
let tens = (userNumber % 100 - units) / 10;

console.log(`В числе ${userNumber}:
количество сотен: ${hundreds},
десятков: ${tens},
единиц: ${units}`);
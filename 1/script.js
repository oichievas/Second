// let x = 5;
// let geekteck = 'Bob';
// geekteck = 78;

// const a = 6;
// // const b = 5;
// // b = 1;

// console.log(geekteck);

// Правила объявления переменных
// 1. Не могут начаться с цифр
// Не разрешён дефис. Используется camelCase
// let. class, function и return

// типы переменных

let a = "Geekteck"; //string

let c = 9; //number

let bool1 = true; //boolean
let bool2 = false;

console.log(typeof bool1);

let obj = { //object
  key: "value",
  username: "Nemo",
  count: 10,
  data: {
    first_name: "Nick",
    last_name: "Gessl"
  } 
}

console.log(obj.data.last_name);

let arr = ["yes", 7, true, false]
console.log(arr[2])
console.log(arr.length)

console.log(80 + 20);
console.log("Hello" + " " + "world");
console.log("Мне " + obj.count + " лет");

// let age = prompt("как вас зовут?");
// console.log(age);

// let ask = confirm("Вам есть 18?");
// console.log(ask);

// let info = alert("Входитею Вы взрослый!");
// console.log(info);

// Операторы сравнения
// > , < , >= , <=, ==, === , !=, !==
// console.log(5 === '5');

// если(условие) {
//   выражение
// } иначе {
//   выражение
// }

// let year = prompt("В каком году стала независимой КР?");
// if(year == 1991) {
//   alert("Ты крут!")
// } else {
//   alert("А вот и неправильно!")
// }

let dogYear = prompt("Сколько Даймону?");

if(dogYear > 5 && dogYear < 20) {
  console.log("Поменьше")
} else if (dogYear > 20) {
  console.log("Слишком много. Ему меньше чем 10")
} 
else if (dogYear < 5) {
  console.log("Недобор") 
} 
else {
  console.log("Да, ему 5")
}




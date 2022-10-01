// function имя(параметры){
//   // тело функции (ваш код)
// }

// let message = "Hello"; //внешней переменной

// function showMessage(){
// let message = "New message"; //локальная переменная
//   console.log(message);
// }
// showMessage();

// Параметры, аргументы

// function calcSum (numOne = 1, numTwo = 10) {
//   console.log("пемеренная numOne " + numOne);
//   console.log("пемеренная numTwo " + numTwo);

//   let sum = numOne + numTwo;
//   console.log("Сумма " + sum);
// }

// calcSum(20, 6);

// function helloStudents (one, two, three) {
//   alert(one + " " + two + three)
// }

// helloStudents('Привет', "студентам ", "Geekteck");

// Функции коллбеки - это функция, которая должна быть выполнена после того как другая функция завершила выполнение

// function calcSum(one, two, more, less) {
//   let sum = one + two; // 2

//   if(sum > 3) {
//     more();
//   } else {
//     less();
//   }

// }

// function showMoreMesssage() {
//   console.log("Сумма больше чем 3")
// }

// function showLessMessage() {
//   console.log("Сумма меньше чем 3")
// }

// calcSum(12, 1, showMoreMesssage, showLessMessage );

// return - возврат верзультата

// С  return функция возвращает результат работы функции  к программе, которая её вызвала.

// function calcWord(word) {
//   let two_words ="Hello" + word;
//   return (
//     console.log(two_words)
//   );
//   console.log("hjchbrhcbrh"); //код после return не работает
// }
 
// let result = calcWord(" Alina");

// function calcWord(word) {
//   let two_words = "Hello" + word;
//   return two_words;
// }
 
// let result = calcWord(" Alina");
// console.log(result);

// Задание
// Есть функция. Она должна задать вопрос (question) и , в зависимости от того как ответит пользователь вызвать функцию yes() или no()

// а функции yes содержит текст ("Входи") или ("Вы согласны")
// функция no почти так же


// function ask (text, yes, no) {
//   let question = confirm(text); //false 
      
//   if(question == true) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   alert("Заходите. Можно вам");
// }

// function showCancel() {
//   alert("Нельзя вам входить")
// }


// ask("Тебе есть 18?", showOk, showCancel);


function question(answer,yes , no){ 
  if(answer == "Да"){ 
      yes(); 
  } 
  else{ 
      no(); 
  } 
} 
let answer = prompt("Тебе 18 лет?"); 
question(answer,Yes,No); 
function Yes(){ 
  alert("Ты можешь входить"); 
} 
function No(){ 
  alert("Тебе нельзя"); 
}





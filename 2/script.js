// || или

// alert( true || true ); 
// alert( false || true ); 
// alert( true || false );  
// alert( false || false ); 

// let hour = prompt("Который час?");
// let isWeekend = true;
// // c 10:00 lj 18:00
 
// if(hour < 10 || hour > 18 ) {
//   alert("Офис закрыт")
// } else {
//   alert('оТКРЫТ!')
// }

// && И

// alert( true && true);
// alert( false && true);
// alert( true && false);
// alert( false && false);

// let hour  = prompt("Hour");
// let minute = prompt("Minute");

// console.log('The time is ' + hour + ':' + minute);

// ! НЕ

// console.log(!!true); 
// console.log(!0);

// let one = prompt("One");
// let two = prompt("Two");

// if(one > two) {
//   console.log("One > Two")
// } else if(one == two) {
//   console.log("Они равны")
// }
// else{
//   console.log("One < Two")
// }

// let arr = [
//   {
//     name: "Bob 1",
//     last_name: "Spanch"
//   },
//   {
//     name: "Bob 2",
//     last_name: "Spanch"
//   },
//   {
//     name: "Bob 3",
//     last_name: "Spanch"
//   },
//   {
//     name: "Bob 4",
//     last_name: "Spanch"
//   },
//   {
//     name: "Bob 5",
//     last_name: "Spanch"
//   }
// ]

// console.log(arr[0].name)
// console.log(arr[1].name)
// console.log(arr[2].name)
// console.log(arr[3].name)
                
// for(let i = 0; i < arr.length; i++) {
//   if(i == 2) {
//     break;
//   }
//   console.log(arr[i].name + " " + arr[i].last_name)
// }

// FOR OF

// for(let i of arr) {
//   console.log(i.name)
// }

// FOR IN

const obj = {
  key1: 'a1',
  key2: 'a2',
  key3: 'a3',
  key4: 'a4',
  key5: 'a5'
}

// console.log(obj.key3)

for(let user in obj){
  console.log(obj[user])
}

// while

// let i = 2;

// while(i > -3) {
//   console.log("Hello")
//   i--
// }

// let i = 0;

// while ( i < 3 ) {
//   alert(i)
//   i++;
// }

// Методы массивов

let arr = [2, "item", 0];

// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.

console.log(arr)


const robots = [
  {
    username: 'Misha',
    sila: 3
  },
  {
    username: 'Andrei',
    sila: 50
  },
  {
    username: 'Olya',
    sila: 2
  },
  {
    username: 'Kate',
    sila: 13
  },
  {
    username: 'Piter',
    sila: 20
  },
]











/*
var a = 3;
var b = 1;
var c = 2;
console.log((a + b) / 2);

a = 5;
!!a > true
0 Nan > false

if (3 > 1) {
  console.log(2);
}
if (3 < 1) {
  console.log(3);
}
console.log(4);

var a = 52;
if (a >= 18 && a <= 21){
  console.log("Привет");
}else if (a > 21) { 
  console.log("здарова");
}else{
  console.log("здравствуйте");
}

a > 18 ? console.log("Привет"):console.log("buy");

var a = 3;
var b = 4;
if (a > b){
  console.log(a + b);
}else{
  a = a + b;
  console.log(a);
}
if (a > b){
  console.log(a + b);
}else{
  console.log(a - b);
}
a > b? console.log(a+ b) : console.log(a+ b);



let user = {
  adress: { 
    street: "temp"
  }
};


let isUserHaveAddres = user && user.addres && user.adress.street;
alert(isUserHaveAddres);



let age = prompt('сколько вам лет');
console.log(age);

let numberAge = +age;
if (numberAge > 18){
  alert('Hello');
}else{
  alert('byu');
}
let role = prompt('Role');
switch(role){
  case "admin":
    alert('succsess');
    break;
  case "user":
    alert('Hello');
    
    default:
      alert('We dont know you');
      break;
}

let sum = 0;
for( let i = 0; i < 10; i++){
  sum += i;
}
console.log(sum);

let sum = 0;
let i = 0;
while(i < 10){
sum += i;
i++;
}
console.log(sum);

let sum = 0;
let i = 0;
do {
  ++i;
sum += i;
}while(i < 10);
console.log(sum);

let sum = 0;
let i = 0;
do {
++i;
if( i%2 === 0){
  sum += i;
  continue;
}
if(i > 5){
  sum += i;
  break;
}
}while(i < 10);
console.log(sum);

//пример
let mass = ['1', false, 1, {}];

let mass = ['H', 'E', 'L', 'L', 'O'];
for(let i = 0; i < mass.length; i++){
  console.log(mass[i]);
}
let mass = ['H', 'E', 'L', 'L', 'O'];
mass.forEach((item, i) => {
  console.log(item);
  console.log(i);
});
let mass = ['H', 'E', 'L', 'L', 'O'];
let sub = mass.splice(1, 2, "text");
console.log(sub);
console.log(mass);

let mass = ['H', 'E', 'L', 'L', 'O'];
let sub = mass.slice(1);
console.log(sub);
console.log(mass);

console.log(`${3+5} text`);

let name = 'Alex';
let helloMsg = `Hello ${name} my dear friend`;
console.log(helloMsg);

let msg = 'text \"text\"kkk';
console.log(msg);

let text = "1234567";
if( text.includes('345')){
alert(text);
}

let text = "1234567";
if(text.indexOf('12') !== -1){
  alert(text);
}
*/  
let text = 'text 123 false';
let splittedText = text.split(" ");  //сделали массив
console.log(splittedText);
splittedText.splice(1, 0, 'true'); //добали в массив даные
let out = splittedText.join(' ');  // из массива в строку
console.log(out); 

// JSON.stringify  прочитать дома



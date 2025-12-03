const firstname = "gabriel";
const age = 17;
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const length = text.length;
let text1 = "HELLO WORLD";
let char = text1.charAt(0);


// const data = "My name is: " + firstname + " and I am " + age + " old";

const data = `My name is: ${firstname}  and I am ${age} old`;

console.log(data);
console.log(length);
console.log(char);
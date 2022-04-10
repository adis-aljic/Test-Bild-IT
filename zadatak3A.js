/*
Napisati program koji za bilo koji cijeli pozitivni broj ispisuje sumu cifara tog broja. Za broj: 341
Output: Zbir cifara broja 341 je 8.
*/

let sum = 0;
let number =Math.trunc(Math.random()*10000);
let broj = number;
let ostatak;
while(number>0)
{ostatak = number%10;
sum += ostatak;
number = Math.trunc(number/10);
}
console.log("Zbir cifara broja " + broj + " je " + sum)
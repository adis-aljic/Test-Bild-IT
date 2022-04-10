// 4. Sabrati cifre bilo kojeg cijelog broja veceg od nule.

// let broj = Math.trunc(Math.random()*1000);
let broj = 123
let zbir = 0;
let orginaliBroj = broj;

while (broj>0) {
    zbir += broj % 10;
    broj = Math.floor(broj / 10);
}

console.log("Zbir cifara broja " + orginaliBroj + " je " + zbir + "." );

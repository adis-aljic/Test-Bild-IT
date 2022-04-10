
// 1.u matricu ubaciti brojeve od -20 do 20 te sabrati njihove apsolutne vrijednosti

let niz =[];
let min= -20;
let max= 20;
let suma=0;

for (i=0; i<10; i++)
{
    let broj = Math.trunc( min + Math.random()*(max-min) );
    niz.push(broj)
}
console.log(niz)
for (let j = 0; j < niz.length; j++) {
    const element = Math.abs(niz[j]);
    suma += element;
}
console.log("Suma absolutnih vrijednosti elementata u matrici " + niz + " je: " +  suma)
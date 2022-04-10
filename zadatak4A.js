/*
Napisati program koji generise 4x5 matricu, nasumicno je ispunjava brojevima u rasponu od 11 do 21
te ispisuje korisniku matricu kao i sve neparne brojeve iz matrice.
*/
let matrica = [];
let matrica1 = [];
let matrica2 = [];
let matrica3 = [];
let matrica4 = [];
let suma =0;
for (let i = 0; i < 5; i++) {
    let broj = Math.trunc(11+Math.random()*10);
    matrica1.push(broj);
}
for (let i = 0; i < 5; i++) {
    let broj = Math.trunc(11+Math.random()*10);
    matrica2.push(broj);
}
for (let i = 0; i < 5; i++) {
    let broj = Math.trunc(11+Math.random()*10);
    matrica3.push(broj);
}
for (let i = 0; i < 5; i++) {
    let broj = Math.trunc(11+Math.random()*10);
    matrica4.push(broj);
}

matrica.push(matrica1, matrica2, matrica3, matrica4)

for (let i = 0; i < 4; i++) {
for (let j = 0; j < 5; j++) {
if (matrica[i][j]%2==1 )
{
    suma+= matrica[i][j];
}

}    
}
console.log("Nasumicno generisana matrica 4x5 je:")
console.log(matrica)
console.log("Suma neparnih elemenata u matrici je: " + suma)
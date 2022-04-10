// 2.ispisait sve clanove od kojih se sastoji proizvoljan broj
let broj = 24;
let faktori = [];
let ostatak; 

for (let i = 1; i < broj+1; i++) {
    
    if (broj%i==0)
{
    faktori.push(i);
}

}
console.log("Faktori broja " + broj + " su " + faktori + ".")

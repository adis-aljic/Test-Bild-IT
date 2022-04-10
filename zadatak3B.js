//3. Ispisati prvih 20 prostih brojeva

let broj = [];
let brojac = 0;
let prostiBrojevi = [];
let neparniBrojevi = []; 
for (let k = 0; k<100; k++) {  // ispisati brojeve - kasnije pokusat izbaciti i ubaciti while petljui brojac do 20 kad god pusha broj ++
    broj.push(k);

}
console.log(broj)

    for (let i = 0; i < broj.length; i++) { 
        /* proci kroz brojeve i provjeriti da li je broj neparan  zatim ispisati da li je broj neparan broj jer prosti broj
           mora biti neparan, izuzetak je broj 2. zatim ako broj nema svojih faktora onda je primaran
                                            NE RADI*/

    
        if (broj[i] % 2 == 1 || broj[i] == 2 )
        {
            neparniBrojevi.push(broj[i])
        }
        // for (let j = 0; j < neparniBrojevi.length; j++) {
        //     if (neparniBrojevi[i]%(i+1)  == 1) {

        //         prostiBrojevi.push(neparniBrojevi);

        //     }
    }
console.log(neparniBrojevi.length)
    for (let i = 0; i < neparniBrojevi.length; i++) {
    
        if (neparniBrojevi[i]%(i+1) !== 0) // ispitati je li postoji ostatak broja tj da li se moze djeliti taj broj sa nekim od ostataka
    {
        prostiBrojevi.push(neparniBrojevi[i]);
    }
    
    }




console.log(neparniBrojevi + "nep")
console.log(prostiBrojevi )

// ako je djeljiv sam sa sobom je uslov
// 1 uslov da je djeljiv sa sobom to izpada je ostakatak nula

/*
Napisati program da dati niz ispisuje sve unikatne brojeve iz datog niza.
Koristiti niz: [4, 3, 1, 5, 6, 8, 4, 2, 1, 4, 3, 5, 6, 1]
Output: Unikatni brojevi u datom nizu su: 4, 3, 1, 5, 6, 8, 2
*/

let niz = [4, 3, 1, 5, 6, 8, 4, 2, 1, 4, 3, 5, 6, 1];
let unikatniBrojevi=[];

for (let i = 0; i < niz.length; i++) {
    for (let j = 0; j < niz.length; j++) {
        if (niz[i]==niz[j] && !unikatniBrojevi.includes(niz[i])) {
            unikatniBrojevi.push(niz[i]);
        }    
    }    
}
console.log("Unikatni brojevi u nizu " + niz + " su: " +  unikatniBrojevi + ".")

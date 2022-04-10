/* 
1. Napisati program koji za proizvoljan string, dodaje crtice(-) sa lijeve i desne strane svakog samoglasnika(a e i o u).
Za string: "Carpe Diem"
Output: C-a-rp-e-D-i--e-m */


let string = "Carpe Diem";
let samoglasnici = ["a", "e", "i", "o" ,"u"];
let element;

for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < samoglasnici.length; j++) {
        
        if (string.charAt(i) == samoglasnici[j])   
        element=  "-" + string.charAt(i) + "-";
        string += element;
    }
    
}

// console.log(element)
console.log(string)

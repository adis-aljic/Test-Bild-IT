/*
Collatz conjecture/Hailstone sekvenca moze biti generisana tako sto krenemo od pozitivnog cijelog broja n te slijedimo sljedeca pravila:
Ukoliko je n=1, sekvenca zavrsava.
Ukoliko je n paran broj sljedeci n u sekvenci je jednak n/2
Ukoliko je n neparan broj sljedeci n u sekvenci je jednak 3n +1
Collatz conjecture nalaze da ce sekvenca biti prekinuta za bilo koji pocetni broj. 
Napisati program koji za proizvoljni pocetni broj ispisuje ovu sekvecu.
Pocetni broj: 6
Output: Hailstone sekvenca za broj 6 je: 6 3 10 5 16 8 4 2 1
Pocetni broj: 256
Output: Hailstone sekvenca za broj 256 je: 256 128 64 32 16 8 4 2 1
*/
let n = 6;
let sekvenca = [n];
console.log(n)
while (n != 1) {

    {    if (n % 2 == 0) {
        n /=2;
        sekvenca.push(n);
    }
    else {
        n = (3 * n) + 1;
        sekvenca.push(n);
    }
}
}
console.log("Hailstone sekvenca za broj "+ sekvenca[0] + " je: " + sekvenca + ".")

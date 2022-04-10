// 5. Potrebno je string hacker speak kodirati tako da je a = 4, e=3 , i =1, o =0 i s=5.

let string = "hacker speak";
let orginalniString = string;


for (let i = 0; i < string.length; i++) {
    
    string  = string.replace("e", "3");    
    string  = string.replace("a", "4"); 
    string  = string.replace("i", "1"); 
    string  = string.replace("o", "0"); 
    string  = string.replace("s", "5"); 
}


console.log("String " + orginalniString + " kodiran izgleda: " + string + ".")
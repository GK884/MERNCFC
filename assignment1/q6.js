// 6. Write a program to reverse a number (9735 -> 5379)

let num = 56412343;

let revnum = 0;
let pow = 0;
while(num!=0){
    let rem = num%10;
    num = Math.floor(num/10);
    revnum = revnum*10 + rem;
}

console.log(revnum);

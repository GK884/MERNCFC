// 5. Write a program to count the number of digits in a number.

let num = 51265;
let ctn = 0;
while(num != 0){
    num = Math.floor(num/10);
    ctn+=1
}

console.log(ctn);
// 4. Write a program to print even numbers after odd times jump.
// E.g: 2, 6, 14, 26, …
// 2 (then jump 1 even number 4) -> 6
// 6 (then jump 3 even numbers 8, 10, 12) -> 14
// 14 (then jump 5 even numbers 16,18,20,22,24) -> 26

let i = 2;
let n =100;
let k =1;
while(i<=n){
    process.stdout.write(i+', ');
    i=i+( 4*k);
    k = k+1;
    
}
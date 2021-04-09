// 3. Write the pseudocode & the program to calculate GCD of two numbers.

let num1 = 24;
let num2 = 18;
flag = 1
while(flag){
    if (num1 == num2){
        console.log(num1);
        flag = 0;
        break;
    }
    else if(num1 > num2){
        num1 = num1-num2;
    }
    else if(num1 < num2){
        num2 = num2 - num1;
    }
}
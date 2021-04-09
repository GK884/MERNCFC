// Q 7c.

let n = 4;
let row=0;
while(row<n){
    let col = 1;
    while(col<= n-row){
        process.stdout.write(' ');
        col+=1;
    }
    col = 1;
    while(col <= row){
        process.stdout.write(col+' ');
        col+=1;
    }
    while(col > 0){
        process.stdout.write(col+' ');
        col-=1;
    }
    row+=1;
    console.log('\n');

}
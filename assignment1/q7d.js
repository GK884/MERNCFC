// Q 7d.

let n = 4;
let row=0;
let k =1;
while(row<n){
    let col = 1;
    while(col<= n-row){
        process.stdout.write(' ');
        col+=1;
    }
    col = 1;
    while(col <= row){
        process.stdout.write(k+',');
        col+=1;
        k-=1;
    }
    while(col > 0){
        process.stdout.write(k+' ');
        col-=1;
        k-=1;
    }
    row+=1;
    console.log('\n');

}
let n = 5;
let row = 0;
let rowMirror = 0;


while (rowMirror < 2*n-1) {
    let col = 0;
    let col_mirror = 0;
    while (col_mirror < 2*n -1  ) {
    	if (col <= row) {
    		process.stdout.write("* ");
    	} else {
    		process.stdout.write(" ");
    	}
        if(col_mirror < n-1){
            col+=1;
        }
        else{
            col-=1;
        }
        col_mirror += 1;
    }
    process.stdout.write("\n");

    if (rowMirror < n - 1) {
        row  += 1;
    }  else {
        row -= 1;
    }
    
    rowMirror += 1;
}


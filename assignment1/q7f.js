
//Diamond
let n = 5;
row = 0;
rowMirror = 0;

while (rowMirror < 2*n-1) {
    
    let col = 0;
    let colMirror = 0;
    
    while (colMirror < 2*n-1) {
    	
    	if (col < n - row) {
    		process.stdout.write("  ");
    	} else {
    		process.stdout.write("* ");
    	}

    	if (colMirror < n-1) {
    		col += 1;
    	} else {
    		col -= 1;
    	}
        
        colMirror += 1;
    }
    process.stdout.write("\n");

    if (rowMirror < n - 1) {
        row  += 1;
    }  else {
        row -= 1;
    }
    
    rowMirror += 1;
}
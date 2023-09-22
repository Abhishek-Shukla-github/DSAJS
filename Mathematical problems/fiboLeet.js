var fib = function(n) {
    let seqArr = [0,1];
    let sum = 1;
    for(let i=2; i<n && seqArr[i-1] + seqArr[i-2] < n; i++){
      seqArr[i] = seqArr[i-1] + seqArr[i-2];
    }
    sum = seqArr[seqArr.length-1] + seqArr[seqArr.length-2]
    console.log("seqArr",seqArr)
    console.log("sum",sum)
    return sum;
}

fib(2)
fib(3)
fib(4)
fib(5)
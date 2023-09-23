function isPowerOfTwo(n){
    //x is power of 2 if 2**x === n
    //loop from i=0 to i=x and for every iteration check if number === n, do this till 2**x is less than n

    for(let i=0; Math.pow(2,i)<=n; i++){
        if(Math.pow(2,i) === n) return true;
    }
    return false;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(128));
console.log(isPowerOfTwo(259));
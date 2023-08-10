//assign a result variable with 1
//Loop till i is equal to 1
//for every iteration multiply i with result and reduce the count

function factorial(n){
    let result = 1;
    for(let i = n; i>0; i--){
        result=result*i;
    }
    return result
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))

//BIG -> O(n)
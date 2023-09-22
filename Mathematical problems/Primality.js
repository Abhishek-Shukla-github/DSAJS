function checkPrimality(n){
    if(n<2) return "Is Not a Prime";
    for(let i=2; i<n;i++){
        if(n % i === 0 ) return "Is Not a Prime"
    }
    return "Is Prime"
}

console.log(checkPrimality(8))
console.log(checkPrimality(5))
console.log(checkPrimality(6))
console.log(checkPrimality(1))
console.log(checkPrimality(7))
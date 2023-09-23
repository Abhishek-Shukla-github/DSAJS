function LinearSearch(arr, n){
    for(let i=0; i<= arr.length-1; i++){
        if(arr[i] === n) return i
    }
    return "Not Found!"
}

console.log(LinearSearch([1,4,56,7,89,-1], 89))
console.log(LinearSearch([1,4,56,7,9], 81))
console.log(LinearSearch([-1],-1))
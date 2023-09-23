function binarySearch(array, element){
    if(array.length === 0) return -1
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        // console.log("MI",middleIndex)
        if(array[middleIndex] === element) return 1
        if(element < array[middleIndex]){
            rightIndex = middleIndex - 1;
        }
        else leftIndex = middleIndex + 1;
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8],1))
console.log(binarySearch([-12141,24,354,421,500,632,712,831],831546))
console.log(binarySearch([-12141,24,354,421,500,632,712,831],-12141))
var twoSum = function(nums, target) {
    //define a hashmap
    //Loop over the array
    //Calc the difference of target - nums[i]
    //if it exists in Hashmap return the [hash[diff], i]
    //else add the entry to hashmap in val:index format

    let hash = {}
    for(let i=0; i<=nums.length-1; i++){
        let diff = target - nums[i];
        // console.log(hash[String(diff)], diff)
        console.log(hash[String(diff)])
        if(hash.hasOwnProperty(String(diff))) return [hash[diff], i];
        else {
            hash[nums[i]] = i
        }
        // console.log(hash)
    }
};

twoSum([2,7,11,15], 9)
// fib(2)=> [0,1]
// fib(3)=> [0,1,1]
// fib(7)=> [0,1,1,2,3,5]
// fib(9)=> [0,1,1,2,3,5,8]

function fibo(n){
  //Have an array of sequence initialized with [0,1]
  //Loop over the array
  //calculate sum of last 2 element, push it in the array
  //Loop till the array count is equal to the n provided

  let seqArr = [0,1];
  for(let i=2; i<n; i++){
    seqArr[i] = seqArr[i-1] + seqArr[i-2];
  }
  return seqArr;
}

fibo(3);  //[0,1,1]
fibo(7);  //[0,1,1,2,3,5,8]
fibo(11); //[0, 1,  1,  2,  3,5, 8, 13, 21, 34,55]

//BIG -> O(n)
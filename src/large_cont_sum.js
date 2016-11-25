// ## Largest Continuous Sum JavaScript
// Problem
// Given an array of integers (positive and negative) find the largest continuous sum.
// Input:
// `large_cont_sum([1,2,-1,3,4,10,10,-1])`
// Output:
// `29`


const large_cont_sum = (arr)=> {
  let current_sum, max_sum;
  current_sum = max_sum = arr[0];

  for(let i=1; i<arr.length; i++){
    current_sum = Math.max(current_sum+arr[i], arr[i]);
    max_sum = Math.max(current_sum, max_sum);
  }

  return max_sum;
}


export default large_cont_sum;

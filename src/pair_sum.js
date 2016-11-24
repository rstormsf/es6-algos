// Problem
// Given an integer array, output all the unique pairs that sum up to a specific value k.
// So the input:
// pair_sum([1,3,2,2],4)
//
// would return 2 pairs:
//  (1,3)
//  (2,2)

const removeDublicates = (arr)=> {
  const output = arr.slice();
  for(let i=0; i<output.length; i++ ){
      if(arr[i+1]){
          const str = output[i].toString();
          const str2 = output[i+1].toString();
        if(str === str2){
          output.splice(i, 1);
        }
      }
  }
  return output;
}

const pair_sum = (arr, k)=> {
  const seen = [];
  const output = [];

  for(let num of arr){
    const target = k - num;

    if(seen.includes(target)){
      const pair = [Math.min(num, target), Math.max(num, target)];
      output.push(pair);
    } else {
      seen.push(num);
    }
  }
  const result = {
    pairs: output.length,
    found: output,
    unique: removeDublicates(output)
  }
  return result;
}

export default pair_sum;

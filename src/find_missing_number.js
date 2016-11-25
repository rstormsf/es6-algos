//
// Find the Missing Element
// Problem
// Consider an array integers. A second array is formed by shuffling the elements of the first array and deleting a random element.
// Given these two arrays, find which element is missing in the second array.
// Here is an example input, the first array is shuffled and the number 5 is removed to construct the second array.
// Input:
// find_missing_number([1,2,3,4,5,6,7],[3,7,2,1,4,6])
//
// Output:
// [5]

const find_missing_number = (arr1, arr2) => {
  arr2.forEach((v)=> {
    const index = arr1.indexOf(v);
    arr1.splice(index, 1);
  })

  return arr1;
}

export default find_missing_number;

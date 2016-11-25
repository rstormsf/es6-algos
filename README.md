##JavaScript Algorithms

# Arrays
## Anagram check
  Problem  
  Given two strings, check to see if they are anagrams. An anagram is when the two strings can be written using the exact same letters (so you can just rearrange the letters to get a different phrase or word).

  **Source**: [anagram.js](src/anagram.js)  
  **Test**: [anagram_test.js](test/anagram_test.js)

## Array Pair sum

  Problem  
  Given an integer array, output all the unique pairs that sum up to a specific value k.  
  So the input:
  `pair_sum([1,3,2,2],4)`
  would return 2 pairs:
  `
 (1,3)
 (2,2)`

**Source**: [pair_sum.js](src/pair_sum.js)  
**Test**: [pair_sum_test.js](test/pair_sum_test.js)


## Find the Missing Element
Problem  
Consider an array integers. A second array is formed by shuffling the elements of the first array and deleting a random element.  
Given these two arrays, find which element is missing in the second array.  
Here is an example input, the first array is shuffled and the number 5 is removed to construct the second array.  

Input:
`find_missing_number([1,2,3,4,5,6,7],[3,7,2,1,4,6])`  
Output:
`[5]`

**Source**: [find_missing_number.js](src/find_missing_number.js)  
**Test**: [find_missing_number_test.js](test/find_missing_number_test.js)
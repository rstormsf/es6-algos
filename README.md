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


## Largest Continuous Sum
Problem  
Given an array of integers (positive and negative) find the largest continuous sum.  
Input:
`large_cont_sum([1,2,-1,3,4,10,10,-1])`  
Output:
`29`

**Source**: [large_cont_sum.js](src/large_cont_sum.js)  
**Test**: [large_cont_sum_test.js](test/large_cont_sum_test.js)



## Sentence Reversal
Problem  
Given a string of words, reverse all the words. For example:  
Input:
`'This is the best'`

Return:
`'best the is This'`

As part of this exercise you should remove all leading and trailing whitespace. So that inputs such as:
`'  space here'`  and `'space here      '`

both become:
`'here space'`

**Source**: [reverse_words.js](src/reverse_words.js)  
**Test**: [reverse_words_test.js](test/reverse_words_test.js)



## String Compression
Problem  
Given a string in the form `'AAAABBBBCCCCCDDEEEE'` compress it to become `'A4B4C5D2E4'`.  
For this problem, you can falsely "compress" strings of single or double letters.   
For instance, it is okay for `'AAB'` to return `'A2B1'` even though this technically takes more space.  
The function should also be case sensitive, so that a string `'AAAaaa'` returns `'A3a3'`.

**Source**: [string_compression.js](src/string_compression.js)  
**Test**: [string_compression_test.js](test/string_compression_test.js)



## Unique Characters in String
Problem  
Given a string, determine if it is compreised of all unique characters.  
For example, the string `'abcde'` has all unique characters and should return `true`. The string `'aabcde'` contains duplicate characters and should return `false`.

**Source**: [uniq_chars.js](src/uniq_chars.js)  
**Test**: [uniq_chars_test.js](test/uniq_chars_test.js)

## Balanced Brackets(Paranthesis)
Problem  
A bracket is considered to be any one of the following characters: `(, ), {, }, [, or ].`

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is considered to be balanced if the following conditions are met:

It contains no unmatched brackets.
The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, print `true` ; otherwise, print `false`.


**Source**: [balanced_brackets.js](src/balanced_brackets.js)  
**Test**: [balanced_brackets_test.js](test/balanced_brackets_test.js)

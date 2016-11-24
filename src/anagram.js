// Problem
// Given two strings, check to see if they are anagrams.
// An anagram is when the two strings can be written using the exact same letters
// (so you can just rearrange the letters to get a different phrase or word).

const anagram_check = (str1, str2) => {
  //remove all whitespaces and convert to an array
  let arr_str1 = str1.replace(/\s+/g, '').toLowerCase().split('');
  let arr_str2 = str2.replace(/\s+/g, '').toLowerCase().split('');

  //sort the arrays
  arr_str1 = arr_str1.sort();
  arr_str2 = arr_str2.sort();

  return arr_str1.length === arr_str2.length && arr_str1.every((v,i)=> v === arr_str2[i]);

}

export default anagram_check;

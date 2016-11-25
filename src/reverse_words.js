export const reverse_words = (str)=> {
  const arr = str.split(' ');
  return arr.reverse().join(' ');
}

export const reverse_words2 = (str)=> {
  const arr = str.split(' ');
  const reverse_array = [];
  for(let i=arr.length; i>=0; i--){
    reverse_array.push(arr[i]);
  }
  return reverse_array.join(' ').slice(1);
}

export const reverse_words3 = (str)=> {
  const length = str.length;
  let words = [];
  let i = 0;
  while(i < length){
    if (str[i] !== ' ') {
      let word_start = i;

      while(i < length && str[i] !== ' '){
        i += 1;
      }
      words.push(str.slice(word_start, i));
    }
    i += 1;
  }
  
  const reverse_array = [];
  for(let i=words.length; i>=0; i--){
    reverse_array.push(words[i]);
  }
  return reverse_array.join(' ').slice(1);
}

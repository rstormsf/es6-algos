export const hasUniqChars = (str) => {
  return str.length === new Set(str).size
}

export const hasUniqChars2 = (str) => {
  const array = str.split('');
  let dict = {};

  for(let i=0; i<array.length; i++){
    const v = array[i];
    if(dict[v]){
      return false;
    } else {
      dict[v] = 1;
    }
  }

  return true;
}

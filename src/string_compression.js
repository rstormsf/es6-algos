const string_compression = (str) => {
  str = str.replace(/\s+/g, '');
  const array = str.split('');
  let result = "";
  let dict = {};
  array.forEach((v, i) => {
    if(dict[v]){
      dict[v] += 1;
    } else {
      dict[v] = 1;
    }
  });

  for(let key of Object.keys(dict)){
    result += `${key}${dict[key]}`;
  }
  return result;
}




export default string_compression;

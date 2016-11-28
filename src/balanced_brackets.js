export default function balanced_brackets (input) {
  if(input.length <= 1) {
    return false
  }

  let regex = /{|\[|\(|}|\]|\)/g;
  let arr_str = input.match(regex).join('');

  if(arr_str.length % 2 !== 0) {
    return false;
  }

  let stack = [];
  let isBalanced = false;

  for(let i=0; i < arr_str.length; i++){
    const character = arr_str[i]; 
    if(character === '(' || character === '[' || character === '{'){
      stack.push(character);
    }

    if(character === ')' || character === ']' || character === '}'){

      const opening = stack[stack.length - 1];
      if(character === ')' && opening === '('){
        stack.pop();
      }
      if(character === ']' && opening === '['){
        stack.pop();
      }

      if(character === '}' && opening === '{'){
        stack.pop();
      }

    }

  }
  if(input.length > 0 && stack.length === 0){
    isBalanced = true;
  }    

  return isBalanced;

}
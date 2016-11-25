import {assert} from 'chai';
import find_missing_number from '../src/find_missing_number';


describe('find_missing_number', function(){

  it('works with non negative numbers', function(){
    const array = [1,5,4,4,3,5,3];
    const random_index = Math.floor(Math.random() * array.length);
    const removed_number = array[random_index];
    let shuffled_array = array.slice();
    shuffled_array.splice(random_index, 1);
    shuffled_array = shuffle(shuffled_array);
    const out = find_missing_number(array, shuffled_array);
    assert.deepEqual(out, [removed_number]);
  });

  it('works with negative numbers', function(){
    const out = find_missing_number([1,5,4,-44,3,-5,3, 100, -1235], [1,-44,4,3,3, -1235]);
    assert.deepEqual(out, [5,-5, 100]);
  });

})


function shuffle(a) {
  const out = a.slice();
    for (let i = out.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [out[i - 1], out[j]] = [out[j], out[i - 1]];
    }

  return out;
}

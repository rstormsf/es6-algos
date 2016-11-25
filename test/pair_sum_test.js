import {assert} from 'chai';
import pair_sum from '../src/pair_sum';


describe('pair_sum', function(){
  it('finds pairs that their sum equals to k', function(){
    const out = pair_sum([1,5,4,4,3,5,3], 8);
    assert.deepEqual({pairs: 3,
                           found: [[4,4], [3,5], [3,5]],
                           unique: [[4,4], [3,5]]}, out);
  });

  it('doesnot find pairs that their sum equals to k', function(){
    const out = pair_sum([1,5,4,4,3,5,3], 88);
    assert.deepEqual({pairs: 0,
                           found: [],
                           unique: []}, out);
  })
})

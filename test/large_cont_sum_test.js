import {assert} from 'chai';
import large_cont_sum from '../src/large_cont_sum';


describe('large_cont_sum', function(){
  it('works with all positive numbers', function(){
    const out = large_cont_sum([1,5,4,4,3,5,3]);
    assert.equal(out, 25);
  });

  it('works with negative numbers', function(){
    const out = large_cont_sum([1,2,-1,3,4,10,10,-1, -9]);
    assert.equal(out, 29)
  });
})

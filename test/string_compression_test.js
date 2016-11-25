import {assert} from 'chai';
import string_compression from '../src/string_compression';


describe('string_compression', function(){
  it('from AABB returns A2B2', function(){
    const out = string_compression('AABB');
    assert.equal('A2B2', out);
  })

  it('AABCCC to A2B1C3', function(){
    const out = string_compression('AABCCC');
    assert.equal('A2B1C3', out);
  })

  it('AAaab AAaab', function(){
    const out = string_compression('AAaab AAaab');
    assert.equal('A4a4b2', out);
  })

  it('lower case, upper case, mixed, spaces', function(){
    const out = string_compression('public relations');
    assert.equal('p1u1b1l2i2c1r1e1a1t1o1n1s1', out);
  })
})

import {assert} from 'chai';
import {hasUniqChars, hasUniqChars2} from '../src/uniq_chars';


describe('hasUniqChars', function(){
  it('from AABB returns A2B2', function(){
    const out = hasUniqChars('AABB');
    assert.isFalse(out);
  })

  it('AABCCC to A2B1C3', function(){
    const out = hasUniqChars('AABCCC');
    assert.isFalse(out);
  })

  it('AAaab AAaab', function(){
    const out = hasUniqChars('AAaab AAaab');
    assert.isFalse(out);
  })

  it('lower case, upper case, mixed, spaces', function(){
    const out = hasUniqChars('public relations');
    assert.isFalse(out);
  })
})


describe('hasUniqChars2', function(){
  it('from AABB returns A2B2', function(){
    const out = hasUniqChars2('AABB');
    assert.isFalse(out);
  })

  it('AABCCC to A2B1C3', function(){
    const out = hasUniqChars2('AABCCC');
    assert.isFalse(out);
  })

  it('AAaab AAaab', function(){
    const out = hasUniqChars2('AAaab AAaab');
    assert.isFalse(out);
  })

  it('lower case, upper case, mixed, spaces', function(){
    const out = hasUniqChars2('public relations');
    assert.isFalse(out);
  })
})

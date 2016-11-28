import {assert} from 'chai';
import balanced_brackets from '../src/balanced_brackets';


describe('balanced_brackets', function(){
  it('returns true if given equal amount of brackets', function(){
    const out = balanced_brackets('[[]]');
    assert.isTrue(out);
  })

  it('returns true if given odd amount of brackets', function(){
    const out = balanced_brackets('[[]');
    assert.isFalse(out);
  })

  it('returns true if given even amount of brackets', function(){
    const out = balanced_brackets('{[]}][[]{{()}}])');
    assert.isTrue(out);
  })

  it('returns true if given odd amount of brackets', function(){
    const out = balanced_brackets('(())[[]]{{}})');
    assert.isFalse(out);
  })
})

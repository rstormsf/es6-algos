import {assert} from 'chai';
import anagram from '../src/anagram';


describe('anagram', function(){
  it('returns true if given 2 strings are anagrams', function(){
    const out = anagram('dog', 'god');
    assert.isTrue(out);
  })

  it('returns true if given 2 strings containing whitespaces are anagrams', function(){
    const out = anagram('public relations', 'crap built on lies');
    assert.isTrue(out);
  })
})

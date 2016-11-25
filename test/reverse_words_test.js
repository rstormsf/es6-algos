import {assert} from 'chai';
import {reverse_words, reverse_words2, reverse_words3} from '../src/reverse_words';


describe('reverse_words', function(){
  it('works', function(){
    const out = reverse_words("Hi friends");
    assert.equal(out, "friends Hi");
  });

  it('works with multple words', function(){
    const out = reverse_words("Hi friends! This is Roman");
    assert.equal(out, "Roman is This friends! Hi");
  })
})


describe('reverse_words2', function(){
  it('works', function(){
    const out = reverse_words2("Hi friends");
    assert.equal(out, "friends Hi");
  });

  it('works with multple words', function(){
    const out = reverse_words2("Hi friends! This is Roman");
    assert.equal(out, "Roman is This friends! Hi");
  })
})

describe('reverse_words3', function(){
  it('works', function(){
    const out = reverse_words3("Hi friends");
    assert.equal(out, "friends Hi");
  });

  it('works with multple words', function(){
    const out = reverse_words3("Hi friends! This is Roman");
    assert.equal(out, "Roman is This friends! Hi");
  })

  it('works with multple words and spaces', function(){
    const out = reverse_words3("   Hi     friends!       This     is  Roman    ");
    assert.equal(out, "Roman is This friends! Hi");
  })
})

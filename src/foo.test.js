import { expect } from 'chai';
import foo from './foo';

describe('foo()', () => {
  it('is magic', () => {
    expect(foo()).to.equal(42);
  });
});

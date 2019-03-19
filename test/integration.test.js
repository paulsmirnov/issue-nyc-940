/* eslint import/no-unresolved:
    ['error', { commonjs: true, caseSensitive: true, ignore: ['^\.\.$'] }] */
import { expect } from 'chai';
import { foo, bar } from '..';

describe('foo() and bar()', () => {
  it('work together', () => {
    expect(foo() / bar()).to.equal(2);
  });
});

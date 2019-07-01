const sum = require('../../src/index');

describe('My First Test', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('Does not do much!', () => {
    expect(true).to.equal(false);
  });
});

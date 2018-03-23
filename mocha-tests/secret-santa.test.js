const { expect } = require('chai');
const secretSanta = require('../js/secret-santa');

describe('secret santa', () => {
  describe('getRandomNumber', () => {
    it('should return a random number between 0 and max', () => {
      const randomNumber = secretSanta.getRandomNumber(5);
      console.log(randomNumber);
      expect(randomNumber).to.be.above(-1);
      expect(randomNumber).to.be.below(5);
    });
  });
});


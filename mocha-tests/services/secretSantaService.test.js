const { expect } = require('chai');
const secretSantaService = require('../../api/services/secretSantaService');

// For a distribution check everyone has picked someone that's not themselves
const checkResult = (result) => {
  const filteredResult =
    result.filter(({ player, playerChosen }) => player === playerChosen || !playerChosen);
  expect(filteredResult.length).to.equal(0);
};

describe('secretSantaService', () => {
  let expectedError;
  let result;
  let players;

  describe('pickNames', () => {
    beforeEach(() => {
      players = ['cat', 'badger', 'hedgehog'];
    });

    it('should randomly assign given players so that no one has themselves', () => {
      result = secretSantaService.pickNames(players);

      expect(result.cat).to.not.equal('cat');
      expect(result.badger).to.not.equal('badger');
      expect(result.hedgehog).to.not.equal('hedgehog');
    });

    it('should return an error if a single name is passed in', () => {
      players = ['cat'];
      result = secretSantaService.pickNames(players);
      expectedError = { error: 'Unable to distribute - only one name passed in' };

      expect(result).to.eql(expectedError);
    });

    // Test to give confidence that the randomness doesnt break things
    it('should return correctly every time when called multiple times', () => {
      for (let i = 0; i < 25; i += 1) {
        checkResult(secretSantaService.pickNames(players));
      }
    });
  });
});


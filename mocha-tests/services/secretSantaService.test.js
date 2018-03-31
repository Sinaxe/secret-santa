const { expect } = require('chai');
const secretSantaService = require('../../api/services/secretSantaService');

describe('secret santa', () => {
  describe('pickNames', () => {
    it('should randomly assign given players so that no one has themselves', () => {
      const players = ['cat', 'badger', 'hedgehog'];
      const result = secretSantaService.pickNames(players);

      expect(result.cat).to.not.equal('cat');
      expect(result.badger).to.not.equal('badger');
      expect(result.hedgehog).to.not.equal('hedgehog');
    });

    it('should return an error if a single name is passed in', () => {
      const players = ['cat'];
      const result = secretSantaService.pickNames(players);
      const expectedError = { error: 'Unable to distribute - only one name passed in' };

      expect(result).to.eql(expectedError);
    });
  });
});


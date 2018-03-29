const { expect } = require('chai');
const secretSanta = require('../../api/services/secretSantaService');

describe('secret santa', () => {
  describe('pickNames', () => {
    it('should randomly assign given players so that no one has themselves', () => {
      const players = ['cat', 'badger', 'hedgehog'];
      const result = secretSanta.pickNames(players);

      expect(result.cat).to.not.equal('cat');
      expect(result.badger).to.not.equal('badger');
      expect(result.hedgehog).to.not.equal('hedgehog');
    });
  });
});


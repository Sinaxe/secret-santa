
const sinon = require('sinon');
const { assert } = require('chai');
const rewire = require('rewire');

const secretSantaController = rewire('../../api/controllers/secretSantaController');
let secretSantaServiceMock;
let restore;

describe.only('secretSantaController', () => {
  before(() => {
    secretSantaServiceMock = {
      pickNames: sinon.spy(),
    };
    restore = secretSantaController.__set__('secretSantaService', secretSantaServiceMock);
  });

  after(() => {
    restore();
  });

  it('should call secretSantaService with names from the request', () => {
    const players = ['cat', 'badger', 'hamster'];

    secretSantaController(players);

    assert.isTrue(secretSantaServiceMock.pickNames.calledWith(players));
  });
});

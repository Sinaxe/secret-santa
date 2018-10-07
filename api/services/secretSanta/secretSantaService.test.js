const secretSantaService = require('./secretSantaService');

const players = ['scott', 'susie', 'barney'];
let selections;

test('secretSantaService should be defined', () => {
  expect(secretSantaService).toBeDefined();
});

describe('getSelections', () => {
  beforeEach(() => {
    selections = secretSantaService.getSelections(players);
  });

  test('getSelections should return with no player drawing themselves', () => {
    selections.forEach(selection => expect(selection.player).not.toEqual(selection.selection));
  });

  test('getSelections should return selections with all players passed in', () => {
    const playersFromSelections = selections.map(selection => selection.player);
    expect(playersFromSelections.length).toBe(players.length);
    expect(playersFromSelections.includes(players));

    const selectionsFromSelections = selections.map(selection => selection.selection);
    expect(selectionsFromSelections.length).toBe(players.length);
    expect(selectionsFromSelections.includes(players));
  });
});

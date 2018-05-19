const getRandomNumber = max => Math.floor(Math.random() * max);

const getAvailablePlayers = (currentPlayer, players, alreadyPicked) => {
  const availablePlayers = players.filter(availablePlayer => (
    availablePlayer !== currentPlayer && !alreadyPicked.includes(availablePlayer)
  ));
  return availablePlayers;
};
/**
 * Simulates each player picking a name one at a time and rerolling if they get themselves
 */
const pickFromBagOfNames = (players) => {
  console.log('Running pickFromBag of names with players:', players);
  let num;
  let availablePlayers;
  let playerChosen;
  const output = [];
  const names = [...players];
  const playersPicked = [];

  if (names.length === 1) {
    console.log('Only one player passed in, unable to proceed');
    /*
    * Don't think the controller should deal with how the error is returned to client
    * Handle at route level but return error object?
    */
    return { error: 'Unable to distribute - only one name passed in' };
  }

  /** Problem (due to RNG happens like 1 in 10):
   * - Pass 4 names in
   * - 1 picks 2
   * - 2 picks 3
   * - 3 picks 1
   * - 4 has no one to pick
   */
  players.forEach((player) => {
    availablePlayers = getAvailablePlayers(player, players, playersPicked);
    num = getRandomNumber(availablePlayers.length);
    playerChosen = availablePlayers[num];
    playersPicked.push(playerChosen);
    output.push({ player, playerChosen });
  });

  console.log('Players have finished picking, output:', output);
  return output;
};

exports.pickNames = pickFromBagOfNames;

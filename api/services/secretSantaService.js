const getRandomNumber = max => Math.floor(Math.random() * max);

const getAvailablePlayers = (currentPlayer, players, alreadyPicked) => {
  const availablePlayers = players.filter(availablePlayer => (
    availablePlayer !== currentPlayer && !alreadyPicked.includes(availablePlayer)
  ));
  return availablePlayers;
};
/**
 * Simulates each player picking a name one at a time and rerolling if they get themselves
 *
 * Function in now recursive, if the last person has no one to pick we start again
 */
const pickFromBagOfNames = (players) => {
  let num;
  let availablePlayers;
  let playerChosen;
  let output = [];
  const names = [...players];
  const playersPicked = [];

  if (names.length === 1) {
    console.log('Only one player passed in, unable to proceed');
    /*
    * Don't think the controller should deal with how the error is returned to client
    * Handle at route level but return error object?
    */
    // todo: make error a constant
    return { error: 'Unable to distribute - only one name passed in' };
  }

  players.forEach((player) => {
    availablePlayers = getAvailablePlayers(player, players, playersPicked);
    if (availablePlayers.length === 0) {
      console.log('No available players for last person to pick from! Starting again...');
      output = pickFromBagOfNames(players);
    } else {
      num = getRandomNumber(availablePlayers.length);
      playerChosen = availablePlayers[num];
      playersPicked.push(playerChosen);
      output.push({ player, playerChosen });
    }
  });

  return output;
};

exports.pickNames = pickFromBagOfNames;

const getRandomNumber = max => Math.floor(Math.random() * max);
/**
 * Simulates each player picking a name one at a time and rerolling if they get themselves
 */
const pickFromBagOfNames = (players) => {
  console.log('Running pickFromBag of names with players:', players);
  let num;
  const output = {};
  const names = [...players];

  if (names.length === 1) {
    console.log('Only one player passed in, unable to proceed');
    /*
    * Don't think the controller should deal with how the error is returned to client
    * Handle at route level but return error object?
    */
    return { error: 'Unable to distribute - only one name passed in' };
  }

  players.forEach((player) => {
    let name = player;
    while (player === name) {
      num = getRandomNumber(names.length);
      name = names[num];
    }
    output[player] = names[num];
    names.splice(num, 1);
  });

  console.log('Players have finished picking, output:', output);
  return output;
};

exports.pickNames = pickFromBagOfNames;

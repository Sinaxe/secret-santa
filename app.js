const participants = ['A', 'B', 'C'];

/**
 * Simulates each player picking a name one at a time and rerolling if they get themselves
 */
const pickFromBagOfNames = (players) => {
  let num;

  const output = {};
  const names = [...players];

  const getRandomNumber = (max) => {
    Math.floor(Math.random() * max);
  };

  players.forEach((player) => {
    let name = player;
    while (player === name) {
      num = getRandomNumber(names.length);
      name = names[num];
    }
    output[player] = names[num];
    names.splice(num, 1);
  });

  return output;
};

pickFromBagOfNames(participants);

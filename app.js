const participants = ['A', 'B', 'C'];

const output = {};

const drawNames = names => {
    pickFromBagOfNames(names);
}

/**
 * Simulates each player picking a name one at a time and rerolling if they get themselves
 */
const pickFromBagOfNames = players => {
    const names = [...players];
    let num;
    const output = {};
    players.forEach(player => {
        let name = player;
        while(player == name){
            num = getRandomNumber(names.length);
            name = names[num];
        }
        output[player] = names[num];
        names.splice(num,1);
    });
    console.log(output);
}

const getRandomNumber = max => {
    return Math.floor(Math.random()*max);
}

drawNames(participants);
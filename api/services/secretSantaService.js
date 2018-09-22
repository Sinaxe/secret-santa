const perfectMatchingAlgorithm = (players) => {
  console.log('Matching players', players.length);

  let randomNumber;
  let selectedConnection;
  let allConnections = getConnections(players);

  let selections = [];
  let player;
  while (allConnections.length > 0) {
    const singleConnections = getSingleConnections(allConnections, players);
    if (singleConnections.length > 0) {
      selections = [...selections, ...singleConnections];
      allConnections = removeSingleConnections(singleConnections, allConnections);
    }
    if (allConnections.length > 0) {
      [{ player }] = allConnections;
      const playerConnections = getConnectionsForPlayer(allConnections, player);
      randomNumber = getRandomNumber(playerConnections.length);
      selectedConnection = playerConnections[randomNumber];
      selections.push(selectedConnection);
      allConnections = removeUsedConnection(allConnections, selectedConnection);
    }
  }

  console.log('selections', selections);
  return selections;
};

const removeSingleConnections = (singleConnections, allConnections) => {
  let connections = allConnections;
  singleConnections.forEach((singleConnection) => {
    connections = removeUsedConnection(connections, singleConnection);
  });
  return connections;
};

const getRandomNumber = max => Math.floor(Math.random() * max);

const getConnections = (players) => {
  let connections = [];

  players.forEach((player) => {
    const playersCopy = [...players];
    playersCopy.splice(playersCopy.indexOf(player), 1);
    const playerConnections = playersCopy.map(connection => ({ player, connection }));
    connections = [...connections, ...playerConnections];
  });

  return connections;
};

const getConnectionsForPlayer = (connections, player) =>
  connections.filter(connection => connection.player === player);

const removeUsedConnection = (connections, selectedConnection) => {
  const filteredConnections = connections
    .filter(connection => connection.player !== selectedConnection.player)
    .filter(fConnection => fConnection.connection !== selectedConnection.connection);
  return filteredConnections;
};

const getSingleConnections = (connections, players) => {
  const singleConnections = [];
  let playerConnections;
  players.forEach((player) => {
    if (connections.length > 0) {
      playerConnections = getConnectionsForPlayer(connections, player);
      if (playerConnections && playerConnections.length === 1) {
        singleConnections.push(playerConnections[0]);
      }
    }
  });

  return singleConnections;
};

module.exports = {
  getSelections: perfectMatchingAlgorithm,
};

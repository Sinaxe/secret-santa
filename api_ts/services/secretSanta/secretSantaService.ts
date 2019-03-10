interface connection {
  player: string,
  connection: string
}

const perfectMatchingAlgorithm = (players: string[]) => {
  console.log('Matching players', players.length);

  let randomNumber;
  let selectedConnection;
  let allConnections = getConnections(players);

  let selections: connection[] = [];
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

const removeSingleConnections = (singleConnections: connection[], allConnections: connection[]) => {
  let connections = allConnections;
  singleConnections.forEach((singleConnection) => {
    connections = removeUsedConnection(connections, singleConnection);
  });
  return connections;
};

const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

const getConnections = (players: string[]) => {
  let connections: connection[] = [];

  players.forEach((player) => {
    const playersCopy = [...players];
    playersCopy.splice(playersCopy.indexOf(player), 1);
    const playerConnections = playersCopy.map(connection => ({ player, connection }));
    connections = [...connections, ...playerConnections];
  });

  return connections;
};

const getConnectionsForPlayer = (connections: connection[], player: string) =>
  connections.filter(connection => connection.player === player);

const removeUsedConnection = (connections: connection[], selectedConnection: connection) => {
  const filteredConnections = connections
    .filter(connection => connection.player !== selectedConnection.player)
    .filter(fConnection => fConnection.connection !== selectedConnection.connection);
  return filteredConnections;
};

const getSingleConnections = (connections: connection[], players: string[]) => {
  const singleConnections: connection[] = [];
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

export { perfectMatchingAlgorithm as default };

const team = {
  _players: [
    {
      firstName: 'Jerry',
      lastName: 'Rice',
      age: 58,
    },
    {
      firstName: 'Tom',
      lastName: 'Brady',
      age: 43,
    },
    {
      firstName: 'Lawrence',
      lastName: 'Taylor',
      age: 62,
    },
  ],
  _games: [
    {
      opponent: 'Arizona Wranglers',
      teamPoints: 31,
      opponentPoints: 9,
    },
   {
      opponent: 'Kansas City Chiefs',
      teamPoints: 38,
      opponentPoints: 40,
    },
   {
      opponent: 'New Orleans Saints',
      teamPoints: 23,
      opponentPoints: 33,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      games: lastName,
      age: age,
    };
    this.players.push(player);
  },
  addGame(opponentsName, teamsPoints, opponentsPoints) {
    const game = {
    opponent: opponentsName,
    teamPoints: teamsPoints,
    opponentPoints: opponentsPoints,
    };
    this.games.push(game);
  },

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame('Tampa Bay Buccaneers', 32, 13);
team.addGame('Cleveland Browns', 12, 29);
team.addGame('Green Bay Packers', 21, 23);

console.log(team._games);
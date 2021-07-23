const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}


const getComputerChoice = () => {
  getRandomNumber = Math.floor(Math.random() * 3);
  if (getRandomNumber === 0) {
    return 'rock';
  } else if (getRandomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game was a time';
  } else if (userChoice === 'bomb') {
    return 'You won big time!'
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won.';
    } else {
      return 'You won.';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won.';
    } else {
      return 'You won.';
    }
  } else {
    if (computerChoice === 'rock') {
      return 'The computer won.';
    } else {
      return 'You won.';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log('You chose ' + userChoice + ' and the computer chose ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();


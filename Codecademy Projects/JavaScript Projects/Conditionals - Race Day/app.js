let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 18;

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log('You\'ll race at 9:30am and your race number will be ' + raceNumber + '.');
} else if (runnerAge > 18 && !registeredEarly) {
  console.log('You\'ll race at 11:00am and your race number will be ' + raceNumber + '.');
} else if (runnerAge < 18) {
  console.log('You\'ll race at 12:30pm and your race number will be ' + raceNumber + '.');
} else {
  console.log('Please, see the registration desk.');
}


const getSleepHours = day => {
  switch (day) {
    case 'Monday':
    return 7.5;
    break;
    case 'Tuesday':
    return 7;
    break;
    case 'Wednesday':
    return 6;
    break;
    case 'Thursday':
    return 6.5;
    break
    case 'Friday':
    return 12;
    break
    case 'Saturday':
    return 5;
    break
    case 'Sunday':
    return 7;
    break
  }  
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = idealHours => {
  idealHours = idealHours * 7;
  return idealHours;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(5);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep this week.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) +' more sleep hours than needed');
  } else {
    console.log('You should get ' + (idealSleepHours - actualSleepHours) + ' more hours of rest.');
  }
}

calculateSleepDebt();
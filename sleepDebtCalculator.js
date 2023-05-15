const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 7;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 9;
      break;
    default:
      return "Please choose a day!";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    return "You have slept the right amount of hours this week!";
  } else if (actualSleepHours > idealSleepHours) {
    return `Wow, you slept even more than what you were supposed to! Precisely ${
      actualSleepHours - idealSleepHours
    } hour(s) more.`;
  } else if (actualSleepHours < idealSleepHours) {
    return `Mhm... you should get some rest! You slept ${
      idealSleepHours - actualSleepHours
    } hour(s) less than what you are supposed to.`;
  }
};

console.log(calculateSleepDebt());

const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 7;
      break;
    case "tuesday":
      return 8;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 10;
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

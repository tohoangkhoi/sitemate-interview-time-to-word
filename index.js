// expecting time to be a string in the format like '8:15' or '12:30'

const numberToText = {
  0: "o`clock",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty-one",
  22: "twenty-two",
  23: "twenty-three",
  24: "twenty-four",
  25: "twenty-five",
  26: "twenty-six",
  27: "twenty-seven",
  28: "twenty-eight",
  29: "twenty-night",
  30: "half",
  45: "quarter",
};
function convertTimeToWords(time) {
  // TODO: real code goes here!

  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  const timeSplit = time.split(":");
  const [hour, minute] = timeSplit;
  const hourNumber = parseInt(hour);
  const minuteNumber = parseInt(minute);

  const hourText = numberToText[minuteNumber > 30 ? hourNumber + 1 : hourNumber];
  const minuteText = numberToText[minuteNumber];

  const linkText = formatLinkText(minuteNumber);

  if (minuteNumber === 0) {
    return `${hourText} ${minuteText} `;
  }

  if (minuteNumber === 45) {
    return `quarter to ${numberToText[hourNumber + 1]}`;
  }

  if (minuteNumber <= 30) {
    return `${minuteText} ${linkText} ${hourText}`;
  } else {
    const newMinute = 60 - minuteNumber;
    const newMinuteText = numberToText[newMinute];
    return `${newMinuteText} ${linkText} ${hourText}`;
  }
}

const formatLinkText = (minute) => {
  if (minute === 0) {
    return "";
  }

  return minute > 30 ? "to" : "past";
};

module.exports = { convertTimeToWords };

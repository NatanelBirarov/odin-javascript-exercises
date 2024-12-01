const repeatString = function (string, num) {
  let str = "";
  let i = 0;
  if (num < 0) {
    return "ERROR";
  }
  while (i < num) {
    str += string;
    i++;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;

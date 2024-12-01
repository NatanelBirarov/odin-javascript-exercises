const repeatString = function (string, num) {
  let str = "";
  let i = 0;
  while (i < num) {
    str += string;
    i++;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;

const fibonacci = function (arg) {
  const num = Number(arg);
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1) return 1;
  let curr = 1;
  let prev = 0;
  for (let i = 1; i < num; i++) {
    const temp = prev;
    curr += prev;
    prev = curr - temp;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;

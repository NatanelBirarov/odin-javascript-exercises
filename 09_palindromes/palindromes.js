const palindromes = function (str) {
  const cleanedStr = str
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "")
    .toLowerCase();
  const reversed = Array.from(cleanedStr).reverse().join("");

  return cleanedStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;

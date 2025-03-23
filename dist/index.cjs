const { firstWords } = require("./firstWords.cjs");
const { secondWords } = require("./secondWords.cjs");
const { thirdWords } = require("./thirdWords.cjs");
function newRandomNick(customFirstWords, customSecondWords, customThirdWords) {
  const firstWord = pickOne(customFirstWords || firstWords);
  const secondWord = pickOne(customSecondWords || secondWords);
  const thirdWord = pickOne(customThirdWords || thirdWords);
  return `${firstWord}${secondWord}${thirdWord}`;
}
function pickOne(words) {
  return words[Math.floor(Math.random() * words.length)];
}

module.exports = { newRandomNick };

import { firstWords } from "./firstWords.mjs";
import { secondWords } from "./secondWords.mjs";
import { thirdWords } from "./thirdWords.mjs";
export function newRandomNick(
  customFirstWords,
  customSecondWords,
  customThirdWords
) {
  const firstWord = pickOne(customFirstWords || firstWords);
  const secondWord = pickOne(customSecondWords || secondWords);
  const thirdWord = pickOne(customThirdWords || thirdWords);
  return `${firstWord}${secondWord}${thirdWord}`;
}
function pickOne(words) {
  return words[Math.floor(Math.random() * words.length)];
}

import { firstWords } from "./firstWords";
import { secondWords } from "./secondWords";
import { thirdWords } from "./thirdWords";

export function newRandomNick(
  customFirstWords?: Array<string>,
  customSecondWords?: Array<string>,
  customThirdWords?: Array<string>
): string {
  const firstWord = pickOne(customFirstWords || firstWords);
  const secondWord = pickOne(customSecondWords || secondWords);
  const thirdWord = pickOne(customThirdWords || thirdWords);

  return `${firstWord}${secondWord}${thirdWord}`;
}

function pickOne(words: Array<string>) {
  return words[Math.floor(Math.random() * words.length)];
}

declare module "random-korean-nickname" {
  export declare function newRandomNick(
    customFirstWords?: Array<string>,
    customSecondWords?: Array<string>,
    customThirdWords?: Array<string>
  ): string;

  export const firstWords: string[];
  export const secondWords: string[];
  export const thirdWords: string[];
}

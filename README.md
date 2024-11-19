# random-korean-nickname

무작위 한글 닉네임 생성 패키지

## 설명

한국어로 간단하게 무작위 닉네임을 생성할 수 있는 패키지입니다. 원리는 다음과 같습니다.

- firstWords = ["빨간", "노란", "하얀", ...]
- secondWords = ["한국", "미국", "일본", ...]
- thirdWords = ["동전", "의자", "컴퓨터", ...]

위와 같이 3 가지 배열이 있고, 각 배열마다 랜덤하게 한 글자씩 뽑습니다. 그리고 이 단어들을 이어 하나의 랜덤한 닉네임을 생성합니다. 예를 들어 "**빨간미국컴퓨터**"같은 닉네임이 생성될 수 있습니다.

## 사용법

### 설치

- npm 사용 시

  ```
  npm install random-korean-nickname
  ```

- yarn 사용 시
  ```
  yarn add random-korean-nickname
  ```

### 랜덤 닉네임 생성

- CommonJS 사용 시

  ```
  const { newRandomNick } = require("random-korean-nickname");

  const nickname = newRandomNick();
  ```

- ESM 사용 시

  ```
  import { newRandomNick } from "random-korean-nickname";

  const nickname = newRandomNick();
  ```

## 커스텀

기본적인 구조는 3 가지 배열을 이용해 각 배열에서 한 글자씩 랜덤으로 뽑고, 이 단어를 이어붙입니다. 만약 이때 사용되는 배열을 커스텀할 수 있습니다.

```
const celebrities = ["유재석", "손흥민"];
const musics = ["힙합", "팝"];
const movies = ["괴물", "기생충"];

const nickname = newRandomNick(celebrities, musics, movies);
```

위의 경우 랜덤 닉네임 생성 결과로 "**손흥민팝괴물**"같은 닉네임을 확인할 수 있습니다.

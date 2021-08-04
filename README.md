아직 개발중 🚧

---

[![CreatedBy JungKyuHyun](https://img.shields.io/badge/CreatedBy-JungKyuHyun-181717.svg?logo=github)](https://github.com/JungKyuHyun)

# Guest Book Toy Project

사실 방명록은 `fake`이고, 방명록의 `UI/UX`나 동작성에 초점을 두기보다는 평소 관심만 가졌던 기술이나 아키텍처 사용(적용)하거나 테스트 코드를 작성해 보는데 의의가 둔다.

## Goal

- [x] 평소 하던대로 간단하게 프론트와 백엔드 빠르게 모두 만들기. (이게 목표가 아니다!)
- [ ] `TDD`까진 아니더라도 코드에 대해 유닛 테스트 작성 및 테스트하기 좋은 코드로 리펙토링
- [ ] **레이어드 아키텍쳐**를 적용하는 방향으로 리펙토링
- [ ] 객체 지향에 대해 고민해 보며, `typedi`를 적용
- [ ] `db`를 `lowdb`로 바꾸되 레포지토리를 만들어 활용하는 방향으로 리펙토링
- [ ] 프론트 컴포넌트는 `storybook`을 통해 문서를 작성하고, 백엔드 API에 대해서는 `stoplight`를 통해 `yaml`을 작성하여 문서를 제공

## Technology or library used

- Frontend: typescript, react, javascript, react-query, nextjs, emotion, jest
- Backend: typescript, nodeJs, express, typedi, jest
- Etc: yarn-workspace

## Additionally what I found out

- `yarn workspace` 사용 방법
- `modern-normalize` 존재
- `typescript` 적용하면서 절대 경로 설정하는 방법
- `nextjs`에서 환경 변수 설정하는 방법
- `react-query` 사용시 `cache` 업데이트 및 커스텀 훅 작성 방법
- `react`에서 `HTML tag`를 삽입하면서 `dutiy string`을 삭제하여 `xss` 공격을 막는 방법
- `express`에서 `status code` 및 에러 메시지를 내려주는 법
- ...

## Preview UI

![2021-08-05_02-52-25 (1)](https://user-images.githubusercontent.com/42884032/128230463-1d2a7fda-36c7-4af2-a67f-8c597432b424.gif)

## After this project is over

- nestjs, java, etc..

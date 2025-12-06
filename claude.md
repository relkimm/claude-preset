# claude-preset

Claude Code 생산성 향상을 위한 명령어 프리셋 모음입니다.

## 프로젝트 개요

이 프로젝트는 개발자들이 Claude Code를 더 효율적으로 사용할 수 있도록 엄선된 명령어 프리셋을 제공합니다. 하나의 명령어로 12개의 유용한 프리셋을 `.claude/commands` 디렉토리에 설치할 수 있습니다.

## 구조

```
claude-preset/
├── bin/
│   └── cli.js           # CLI 진입점
├── src/
│   └── index.js         # 메인 로직
├── presets/
│   ├── en/              # 영어 프리셋
│   └── ko/              # 한국어 프리셋
├── package.json
└── README.md
```

## 제공되는 명령어

1. `/commit` - 커밋 메시지 생성
2. `/pr` - PR 설명 생성
3. `/review` - 코드 리뷰
4. `/debug` - 디버깅 지원
5. `/test` - 테스트 작성
6. `/lint` - 린트 문제 해결
7. `/security` - 보안 감사
8. `/refactor` - 리팩토링 제안
9. `/optimize` - 성능 최적화
10. `/cleanup` - 데드 코드 제거
11. `/explain` - 코드베이스 설명
12. `/ship` - 배포 전 파이프라인

## 기술 스택

- Node.js (>=18.0.0)
- ES Modules
- 의존성:
  - chalk: 터미널 색상 출력
  - fs-extra: 파일 시스템 작업
  - inquirer: 대화형 CLI

## 개발 가이드

### 새 프리셋 추가하기

1. `presets/en/` 및 `presets/ko/`에 `.md` 파일 추가
2. README.md의 명령어 표에 항목 추가
3. 테스트 실행: `npm test`

### 프리셋 작성 원칙

- 명확한 단계별 지시사항
- 실행 가능한 예제 포함
- `$ARGUMENTS`를 활용한 유연성
- 일관된 출력 형식

## 배포

```bash
npm publish
```

npm을 통해 배포되며, 사용자는 `npx claude-preset`으로 설치할 수 있습니다.

## 라이선스

MIT

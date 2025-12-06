코드 스타일을 자동으로 체크하고 수정합니다.

## 프로젝트 감지
1. 설정 파일 확인: `.eslintrc*`, `.prettierrc*`, `biome.json`, `pyproject.toml`
2. `package.json`에서 lint 스크립트 확인
3. 언어 자동 감지 (JS/TS, Python, Go 등)

## 린터 실행

**JavaScript/TypeScript:**
```bash
npm run lint || npx eslint .
```

**Python:**
```bash
ruff check . || flake8 .
```

**Go:**
```bash
go vet ./...
```

## 자동 수정

**JavaScript/TypeScript:**
```bash
npm run lint:fix || npx eslint . --fix
npx prettier --write .
```

**Python:**
```bash
ruff check --fix . && ruff format .
```

## 결과 보고

```
자동 수정: X개
수동 필요: Y개

수동 수정 항목:
파일:라인 - [문제] - [해결 방법]
```

## 린터 미설치시
프로젝트에 린터가 없으면 설치 방법 안내:
- JS/TS: ESLint + Prettier
- Python: Ruff
- Go: golangci-lint

사용: `/lint`

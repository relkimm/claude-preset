변경사항을 분석해서 커밋 메시지를 만들어드립니다.

## 분석
1. `git status`로 변경된 파일 확인
2. `git diff --cached` 또는 `git diff`로 변경 내용 확인
3. `git log --oneline -5`로 프로젝트 커밋 스타일 파악
4. `$ARGUMENTS`가 있으면 컨텍스트로 활용

## 메시지 작성
한 줄 형식 (기본):
```
<타입>: <간결한 설명>
```

여러 줄 형식 (복잡한 변경일 때만):
```
<타입>: <간결한 설명>

- 상세 내용 1
- 상세 내용 2
```

타입: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 출력
바로 실행 가능한 명령어 제공:
```bash
git add -A && git commit -m "메시지"
```

사용: `/commit` 또는 `/commit 로그인 기능 추가`

현재 브랜치의 PR 설명을 자동으로 생성합니다.

## 정보 수집
1. `git branch --show-current`로 브랜치 확인
2. `git log main..HEAD --oneline`로 커밋 내역 확인 (main 없으면 master)
3. `git diff main..HEAD --stat`로 변경 파일 확인
4. `$ARGUMENTS`가 있으면 추가 컨텍스트로 활용

## PR 설명 형식

```markdown
## 변경 내용
[이 PR의 목적을 2-3문장으로 설명]

## 주요 변경사항
- 변경 1
- 변경 2
- 변경 3

## 테스트 방법
1. 단계 1
2. 단계 2
3. 예상 결과
```

## 출력
- GitHub/GitLab에 바로 붙여넣을 수 있는 마크다운 제공
- 브랜치명과 커밋 내역을 기반으로 자동 작성

사용: `/pr` 또는 `/pr API 응답 형식 변경`

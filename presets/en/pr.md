Generate PR descriptions automatically for the current branch.

## Information Gathering
1. Check current branch with `git branch --show-current`
2. Review commits with `git log main..HEAD --oneline` (try master if main doesn't exist)
3. Check changed files with `git diff main..HEAD --stat`
4. Use `$ARGUMENTS` as additional context if provided

## PR Description Format

```markdown
## Changes
[Explain the purpose of this PR in 2-3 sentences]

## Key Updates
- Change 1
- Change 2
- Change 3

## How to Test
1. Step 1
2. Step 2
3. Expected result
```

## Output
- Provide markdown ready to paste into GitHub/GitLab
- Auto-generate based on branch name and commit history

Usage: `/pr` or `/pr change API response format`

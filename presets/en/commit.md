Analyze changes and create commit messages.

## Analysis
1. Check changed files with `git status`
2. Review changes with `git diff --cached` or `git diff`
3. Check commit style with `git log --oneline -5`
4. Use `$ARGUMENTS` as context if provided

## Message Format
One-line format (default):
```
<type>: <concise description>
```

Multi-line format (complex changes only):
```
<type>: <concise description>

- Detail 1
- Detail 2
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Output
Provide ready-to-run command:
```bash
git add -A && git commit -m "message"
```

Usage: `/commit` or `/commit add login feature`

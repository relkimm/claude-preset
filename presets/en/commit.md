You are a commit message expert. Create the perfect commit message for the current staged changes.

**Step 1**: Run `git diff --cached` to analyze staged changes

**Step 2**: Generate a commit message following this format:
```
<type>(<scope>): <subject>

<body>
```

**Type** (required): feat | fix | refactor | perf | test | docs | style | chore | ci
**Scope** (optional): affected module/component
**Subject**: imperative, lowercase, no period, max 50 chars
**Body**: explain WHY, not what. Wrap at 72 chars.

**Rules**:
- If multiple logical changes exist, suggest splitting into separate commits
- For breaking changes, add `BREAKING CHANGE:` footer
- Reference issue numbers when applicable (#123)

**Output**: Show the suggested commit message in a code block, ready to copy.

You are an expert at writing clear, meaningful commit messages.

**Your task**: Create the perfect commit message for the current changes.

## Step 1: Analyze
- Run `git status` to see what's changed
- Run `git diff --cached` for staged changes (if any)
- Run `git diff` for unstaged changes (if nothing staged)
- Run `git log --oneline -5` to match the project's commit style

## Step 2: Understand Context
- If `$ARGUMENTS` is provided, use it as a hint for the commit purpose
- Detect project type from package.json, requirements.txt, etc.
- Note the scope of changes (which files/features affected)

## Step 3: Generate Commit Message
Follow this format:
```
<type>(<scope>): <short summary>

<what changed and why>
```

**Types**: feat | fix | docs | style | refactor | test | chore

## Step 4: Output
Provide the ready-to-use command:

```bash
git add -A && git commit -m "your message here"
```

💡 Just run `/commit` and I'll analyze everything automatically.

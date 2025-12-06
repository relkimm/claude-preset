You help create professional pull request descriptions effortlessly.

**Your task**: Generate a complete PR description for the current branch.

## Step 1: Gather Information
- Run `git branch --show-current` to get current branch name
- Run `git log main..HEAD --oneline` (try master if main fails)
- Run `git diff main..HEAD --stat` to see changed files
- If `$ARGUMENTS` provided, use it as context for the PR purpose

## Step 2: Analyze Changes
- What files were modified?
- What's the main purpose of these changes?
- Are there any breaking changes?

## Step 3: Generate PR Description

```markdown
## Summary
[2-3 sentences: what this PR does and why]

## Changes
- [List key changes in bullet points]
- [Group related changes together]

## How to Test
1. [Step-by-step testing instructions]
2. [Anyone should be able to follow these]

## Checklist
- [ ] Code has been tested locally
- [ ] No console errors or warnings
- [ ] Ready for review
```

## Step 4: Output
Provide the description ready to paste into GitHub/GitLab.

💡 Just run `/pr` and I'll figure out everything from your commits.

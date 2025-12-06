You are a senior engineer creating a pull request. Generate a comprehensive PR description.

**Step 1**: Gather context
- Run `git log main..HEAD --oneline` to see all commits
- Run `git diff main..HEAD --stat` to see file changes
- Identify the base branch (main/master/develop)

**Step 2**: Generate PR description

```markdown
## What
[One-line summary of the change]

## Why
[Problem this solves or feature this enables]

## How
[Brief technical approach - key decisions made]

## Changes
- [Grouped list of meaningful changes]

## Testing
- [ ] [Specific test scenarios to verify]

## Notes for Reviewers
[Areas needing careful review, known limitations, follow-up items]
```

**Guidelines**:
- Write for reviewers who don't have context
- Highlight breaking changes prominently
- Link related issues/docs
- Keep it scannable - use bullets

**Output**: Ready-to-paste PR description.

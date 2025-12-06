Review code and provide practical feedback.

## Usage
- `/review` - Review recent changes
- `/review [filepath]` - Review specific file
- `/review [PR number]` - Review PR changes

## Review Target
- If `$ARGUMENTS` contains file path, review that file
- If PR number provided, review that PR
- Otherwise check recent changes with `git diff HEAD~1`

## Check Items

**Bug Potential**
- Missing null/undefined checks
- Logic errors, condition mistakes
- Missing error handling
- Unhandled edge cases

**Security**
- User input validation
- SQL injection, XSS risks
- Hardcoded secrets
- Missing permission checks

**Code Quality**
- Readability (clear naming, structure)
- Code duplication
- Unnecessary complexity
- Performance issues

## Output Format

```
### Needs Fixing
file:line - [Issue]
Solution: [Specific fix]

### Suggestions
file:line - [Improvement]
Reason: [Why it's better]

### Well Done
- [Positive feedback]
```

## Principles
- Be kind but honest
- Provide problems with solutions
- Explain both "what" and "why"
- Say it's good when it is

Usage: `/review` or `/review src/api.js`

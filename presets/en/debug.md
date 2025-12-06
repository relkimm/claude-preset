Find and solve bugs.

## Usage
- `/debug` - Investigate recent errors
- `/debug [error message]` - Analyze error
- `/debug [problem description]` - Investigate issue

## Problem Identification
- Parse error message from `$ARGUMENTS` if provided
- Check error type, location, file, line number
- Otherwise investigate recent changes

## Investigation
Read related code and follow logic flow:
- Variable name typos
- Missing imports
- null/undefined issues
- async/await mistakes
- Type mismatches
- Function argument errors

## Output Format

```
Cause: [What the problem is]

Problem Code:
[Code causing error]

Fix:
[Corrected code]

Explanation: [Why it happened and how it's solved]
```

## Additional Steps
- Provide testing method after fix
- Tips to prevent similar issues

Usage: `/debug` or `/debug TypeError: Cannot read property 'map'`

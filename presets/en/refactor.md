Make code cleaner and more maintainable.

## Usage
- `/refactor` - Scan entire project
- `/refactor [filename]` - Analyze specific file
- `/refactor [description]` - Address specific issue

## Issues to Find

**Code Quality**
- Duplicated code (copy-paste)
- Functions too long (30+ lines)
- Complex nesting (if inside if inside if...)
- Unclear variable/function names
- Magic numbers (`if (status === 3)`)

**Unnecessary Code**
- Unused imports
- Uncalled functions
- Commented-out code
- console.log, debugger statements

**Structural Issues**
- Functions doing too many things
- Poor separation of concerns
- Unnecessary complexity

## Output Format

```
### [filename:line]
Issue: [What's wrong]

Current:
[Problem code]

Improved:
[Better code]

Reason: [Why it's better]
```

## Principles
- Keep behavior, improve structure
- Change one thing at a time
- Avoid over-abstraction
- Prioritize readability

Usage: `/refactor` or `/refactor src/utils.js`

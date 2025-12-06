Find and fix performance issues.

## Usage
- `/optimize` - Full scan
- `/optimize [filename]` - Analyze specific file
- `/optimize [description]` - Solve specific problem

## Issues to Find

**Algorithm**
- Nested loops (O(n²))
- I/O operations in loops
- Unnecessary recalculation
- Inefficient data structures

**Memory**
- Memory leaks
- Excessive memory usage
- Unnecessary object creation

**Network**
- Excessive API calls
- Fetching more data than needed
- Missing caching

## Output Format

```
file:line

Problem: [What's slow]

Current:
[Problem code]

Optimized:
[Improved code]

Impact: [Expected performance gain]
```

## Priority
1. User perception (page loading, UI responsiveness)
2. Execution frequency (every request, every click)
3. Cost (DB queries, API calls)

## Principles
- Measurable improvements
- Maintain readability
- Focus on real impact

Usage: `/optimize` or `/optimize src/api.js`

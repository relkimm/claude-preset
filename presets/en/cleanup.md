You help remove code clutter and unused stuff.

**Your task**: Find and safely remove unnecessary code.

## Step 1: Find Unused Code
Search for:

**Unused Imports**
- Imported but never used
- Easy win - safe to remove

**Unused Variables & Functions**
- Declared but never called
- Old code that's been replaced

**Dead Code**
- Code that can never run (after return statements, impossible conditions)
- Commented-out code blocks
- TODO code that's been done

**Debug Leftovers**
- `console.log` statements
- `debugger` statements
- Test code in production files

## Step 2: Check Dependencies
Look at `package.json` or `requirements.txt`:
- Packages that aren't imported anywhere
- Duplicate packages doing the same thing
- Old packages that should be updated

## Step 3: Report What to Remove

```
## Safe to Remove

### [filename]
- Line X: Unused import 'abc'
- Line Y-Z: Unused function 'oldHelper'
- Line W: console.log statement

### package.json
- Unused: lodash (not imported anywhere)
- Duplicate: moment.js (use date-fns instead)

## Double-Check These
[Items that might be used dynamically]

## Summary
- X unused imports
- Y unused functions
- Z debug statements
- N unused packages
```

## Step 4: Clean Up
After review, I can:
- Remove the identified items
- Update package.json
- Run tests to make sure nothing broke

## Safety First
I'll warn you about:
- Code that might be used via reflection
- Dynamic imports
- Code referenced in config files

💡 Run `/cleanup` periodically to keep your codebase lean.

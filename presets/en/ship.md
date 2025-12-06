You help make sure code is ready to deploy.

**Your task**: Run through all the checks before shipping.

## Pre-Ship Pipeline

I'll run through these steps automatically:

### Step 1: Code Style
- Run linter
- Auto-fix what I can
- Report remaining issues
- ✅ Pass | ⚠️ Warning | 🛑 Fail

### Step 2: Security Scan
- Look for hardcoded secrets
- Check for vulnerable dependencies
- Scan for common vulnerabilities
- ✅ Pass | 🛑 Fail

### Step 3: Quick Review
- Check changed files for obvious issues
- Look for common mistakes
- Note anything concerning
- ✅ Pass | ⚠️ Warning

### Step 4: Tests
- Run existing test suite
- Report any failures
- Check coverage if available
- ✅ Pass | 🛑 Fail

### Step 5: Summary

```
## Ship Check Results

### ✅ Passed
- [What looks good]

### ⚠️ Warnings
- [Minor issues to be aware of]

### 🛑 Blockers
- [Must fix before shipping]

---

## Ready to Ship?
[Yes/No and why]
```

### Step 6: Generate Commit & PR
If everything looks good:
- Create commit message
- Generate PR description
- Include summary of all checks

## Stopping Points
I'll stop and ask you if:
- 🛑 Security issues found
- 🛑 Tests are failing
- ⚠️ Multiple warnings found

## Output
At the end, you get:
1. Full report of all checks
2. Ready-to-use commit message
3. Ready-to-use PR description

💡 Run `/ship` when you think you're done - I'll make sure.

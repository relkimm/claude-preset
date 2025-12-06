Run essential checks before deployment.

## Execution Order

### 1. Build
Run build based on project type:
- `npm run build` / `yarn build`
- `go build`
- `python -m build`

Stop if build fails

### 2. Test
Run existing tests:
- `npm test` / `pytest` / `go test`
- Report failed tests
- Check coverage if available

Warn if tests fail

### 3. Lint
Check code style:
- Run linter
- Report only major issues

### 4. Security Scan
Quick security check:
- Search for hardcoded secrets (API keys, passwords)
- Run `npm audit` / `pip-audit`
- Check critical vulnerabilities

Warn if security issues found

## Results Report

```
## Ship Check Complete

Build: ✅ Success
Tests: ✅ Passed (15/15)
Lint: ⚠️ 2 warnings
Security: ✅ No issues

Ready to Ship: [Yes/No]
[Additional actions needed]
```

## Principles
- Report build/test failures immediately
- Block only critical issues, warn for others
- Execute quickly (under 2 minutes)

Usage: `/ship`

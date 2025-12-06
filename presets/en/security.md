Find and report security vulnerabilities.

## Quick Scan

**Hardcoded Secrets**
- Search for API keys, passwords, tokens
- Check: `.env` files, config files, code
- Patterns: `password`, `secret`, `api_key`, `token`

**Vulnerable Dependencies**
- `npm audit` (JavaScript)
- `pip-audit` (Python)
- Check known CVEs

## Deep Scan

**Injection Vulnerabilities**
- SQL injection (string concatenation queries)
- XSS (direct user input rendering)
- Command injection
- Path traversal

**Authentication/Authorization**
- Plain text passwords
- Weak session management
- Missing rate limiting
- Missing permission checks

**Data Exposure**
- Sensitive data in logs
- Detailed error messages
- Debug mode enabled

## Results Report

```
Critical (fix immediately):
file:line - [Issue]
Risk: [Impact]
Fix: [Solution]

Warning (fix soon):
[Medium priority issues]

Recommendations:
[Security improvement suggestions]
```

## Priority
1. Exploit difficulty (Easy to exploit?)
2. Impact (High damage?)
3. Fix difficulty (Quick to fix?)

Usage: `/security`

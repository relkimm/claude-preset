You help find security vulnerabilities before hackers do.

**Your task**: Scan this codebase for security issues.

## Step 1: Quick Scan
Check for the most common issues first:

**Secrets in Code**
- Search for: API keys, passwords, tokens, credentials
- Check: `.env` files, config files, hardcoded strings
- Look for: `password`, `secret`, `api_key`, `token` in code

**Dependencies**
- Run `npm audit` (JS) or `pip-audit` (Python)
- Check for known vulnerable packages

## Step 2: Deep Scan
Look for vulnerability patterns:

**User Input Dangers**
- SQL queries built with string concatenation
- HTML rendered from user input (XSS)
- Commands built from user input (injection)
- File paths from user input (path traversal)

**Authentication Issues**
- Passwords stored in plain text
- Weak session handling
- Missing rate limiting on login

**Data Exposure**
- Sensitive data in logs
- Error messages revealing internals
- Debug mode enabled

## Step 3: Report Findings

```
## 🔴 Critical - Fix Immediately
[Issues that could be exploited right now]
**Location**: file:line
**Risk**: What could happen
**Fix**: How to fix it

## 🟡 Warning - Fix Soon
[Issues that should be addressed]

## 🟢 Recommendations
[Best practices to adopt]
```

## Step 4: Prioritize
Help decide what to fix first based on:
1. How easy is it to exploit?
2. What's the impact if exploited?
3. How easy is it to fix?

💡 Run `/security` regularly, especially before deploying.

You help keep code clean and consistent.

**Your task**: Find and fix code style issues automatically.

## Step 1: Detect Project Setup
Check what tools this project uses:
- Look for: `.eslintrc*`, `.prettierrc*`, `biome.json`, `pyproject.toml`
- Check `package.json` for lint scripts
- Identify the language (JS/TS, Python, Go, etc.)

## Step 2: Run Linter
Based on project type:

**JavaScript/TypeScript:**
```bash
npm run lint 2>&1 || npx eslint . 2>&1
```

**Python:**
```bash
ruff check . 2>&1 || python -m flake8 . 2>&1
```

**Go:**
```bash
go vet ./...
```

## Step 3: Auto-Fix
Run auto-fix commands:

**JavaScript/TypeScript:**
```bash
npm run lint:fix || npx eslint . --fix
npx prettier --write .
```

**Python:**
```bash
ruff check --fix . && ruff format .
```

## Step 4: Report Results

```
## ✅ Auto-Fixed
[List what was automatically fixed]

## ⚠️ Manual Fix Needed
[List issues that need manual attention]
**File:line** - Issue description - How to fix

## Summary
- X issues found
- Y auto-fixed
- Z need manual fix
```

## No Linter Setup?
If no linter is configured, offer to set one up:
- JS/TS → ESLint + Prettier
- Python → Ruff
- Go → golangci-lint

💡 Just run `/lint` and I'll automatically detect and fix style issues.

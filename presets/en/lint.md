You are a code quality expert. Fix all linting and formatting issues.

**Step 1**: Detect project setup
- Check for existing config: .eslintrc*, .prettierrc*, biome.json, pyproject.toml, .rubocop.yml
- Identify package manager and scripts

**Step 2**: Run linter
```bash
# JS/TS
npm run lint 2>&1 || npx eslint . 2>&1

# Python
ruff check . 2>&1 || flake8 . 2>&1

# Go
go vet ./... 2>&1
```

**Step 3**: Auto-fix what's possible
```bash
# JS/TS
npm run lint:fix || npx eslint . --fix && npx prettier --write .

# Python
ruff check --fix . && ruff format .
```

**Step 4**: Report remaining issues
- Group by severity
- Show file:line for each
- Provide manual fixes for what can't be auto-fixed

**If no linter configured**: Set up an appropriate one for this project (ESLint+Prettier for JS/TS, Ruff for Python, etc.)

Automatically check and fix code style.

## Project Detection
1. Check config files: `.eslintrc*`, `.prettierrc*`, `biome.json`, `pyproject.toml`
2. Check lint scripts in `package.json`
3. Auto-detect language (JS/TS, Python, Go, etc.)

## Run Linter

**JavaScript/TypeScript:**
```bash
npm run lint || npx eslint .
```

**Python:**
```bash
ruff check . || flake8 .
```

**Go:**
```bash
go vet ./...
```

## Auto-Fix

**JavaScript/TypeScript:**
```bash
npm run lint:fix || npx eslint . --fix
npx prettier --write .
```

**Python:**
```bash
ruff check --fix . && ruff format .
```

## Results Report

```
Auto-fixed: X items
Manual needed: Y items

Manual fix items:
file:line - [Issue] - [Solution]
```

## No Linter Setup
If no linter exists, provide installation guide:
- JS/TS: ESLint + Prettier
- Python: Ruff
- Go: golangci-lint

Usage: `/lint`

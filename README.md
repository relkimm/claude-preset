# claude-preset

> Supercharge your Claude Code workflow with production-ready command presets

Install 11 curated, battle-tested command presets in seconds. No configuration needed.

[![npm version](https://img.shields.io/npm/v/claude-preset.svg)](https://www.npmjs.com/package/claude-preset)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why claude-preset?

Claude Code is powerful, but building effective prompts takes time. This package gives you:

- **11 production-ready commands** optimized for real-world workflows
- **Zero configuration** - works out of the box
- **Multilingual support** - English and Korean presets
- **Consistent quality** - carefully crafted prompts that actually work
- **Time-saving** - stop writing the same prompts over and over

## Quick Start

```bash
npx claude-preset
```

That's it! Select your language, and all commands are installed to `.claude/commands`.

## Available Commands

### Development Workflow

#### `/commit`
Analyzes your changes and generates conventional commit messages.
```bash
# Automatically analyzes staged/unstaged changes
# Provides ready-to-use git commands
/commit
```

#### `/pr`
Creates comprehensive pull request descriptions with context.
```bash
# Generates title, summary, and test plan
/pr
```

#### `/review`
Performs thorough code review with actionable feedback.
```bash
# Reviews current changes or specific files
/review src/components/Button.tsx
```

### Code Quality

#### `/test`
Generates unit tests based on your testing framework.
```bash
# Auto-detects Jest, Vitest, Mocha, etc.
/test src/utils/format.js
```

#### `/lint`
Fixes linting issues and explains what was wrong.
```bash
# Runs your linter and applies fixes
/lint
```

#### `/security`
Scans for security vulnerabilities and best practices.
```bash
# Checks for common vulnerabilities (XSS, SQL injection, etc.)
/security
```

### Optimization

#### `/refactor`
Suggests refactoring opportunities and removes dead code for cleaner codebase.
```bash
/refactor src/legacy/
```

#### `/optimize`
Analyzes and improves performance bottlenecks.
```bash
/optimize src/components/DataTable.tsx
```


### Documentation & Debugging

#### `/explain`
Provides clear explanations of your codebase architecture.
```bash
/explain auth flow
```

#### `/debug`
Helps diagnose and fix bugs with structured debugging.
```bash
/debug "login fails after password reset"
```

### Deployment

#### `/ship`
Runs pre-deployment checklist (build, test, lint, security).
```bash
# Complete pipeline before deploying
/ship
```

## Languages

Choose your preferred language during installation:

- 🇺🇸 **English** (`en`) - Default
- 🇰🇷 **한국어** (`ko`) - Korean

All commands work identically in both languages, just with localized prompts.

## How It Works

1. **Install**: `npx claude-preset` copies preset files to `.claude/commands/`
2. **Use**: Type any command like `/commit` in Claude Code
3. **Customize**: Edit `.claude/commands/*.md` files to fit your workflow

## Requirements

- [Claude Code](https://claude.com/claude-code) installed
- Node.js >= 18.0.0

## Examples

### Generate a commit message
```bash
# After making changes
/commit

# Claude analyzes git status, diff, and project style
# Returns: git add -A && git commit -m "feat(auth): add OAuth2 support"
```

### Create a PR description
```bash
/pr

# Generates:
# Title: Add user authentication system
# Summary: Implements JWT-based auth with refresh tokens...
# Test plan: ✓ Unit tests pass ✓ Manual testing completed...
```

### Debug an issue
```bash
/debug "API returns 500 on user creation"

# Claude systematically investigates:
# 1. Checks error logs
# 2. Reviews related code
# 3. Suggests fixes with explanations
```

## Contributing

We welcome contributions! To add a new preset:

1. Create `.md` files in `presets/en/` and `presets/ko/`
2. Follow the existing prompt structure
3. Test with Claude Code
4. Submit a PR

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT © [relkimm](https://github.com/relkimm)

## Links

- [npm package](https://www.npmjs.com/package/claude-preset)
- [GitHub repository](https://github.com/relkimm/claude-preset)
- [Issue tracker](https://github.com/relkimm/claude-preset/issues)
- [Claude Code documentation](https://docs.anthropic.com/claude/docs/claude-code)

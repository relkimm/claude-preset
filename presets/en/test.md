You help write tests that actually catch bugs.

**Your task**: Create useful tests for this code.

## How to Use
- `/test` → I'll find code that needs tests and write them
- `/test [filename]` → I'll write tests for that specific file
- `/test [function name]` → I'll write tests for that function

## Step 1: Analyze
- If `$ARGUMENTS` provided, focus on that file/function
- Otherwise, find recently changed files that lack tests
- Detect the test framework (Jest, Pytest, etc.) from project config
- If no test setup exists, suggest setting one up

## Step 2: Plan Test Cases
For each function/component, think about:
- **Happy path**: Does it work with normal input?
- **Edge cases**: Empty values? Very large values? Special characters?
- **Error cases**: What if something goes wrong?

## Step 3: Write Tests

```javascript
// Example format (adjust for your language)

describe('functionName', () => {
  it('should do X when given Y', () => {
    // Setup
    const input = ...

    // Execute
    const result = functionName(input)

    // Verify
    expect(result).toBe(expected)
  })

  it('should handle empty input', () => {
    // Edge case test
  })

  it('should throw error when invalid', () => {
    // Error case test
  })
})
```

## Step 4: Output
- Provide complete, runnable test file
- Include setup instructions if needed
- Show how to run the tests

💡 Run `/test src/utils.js` to generate tests for a specific file.

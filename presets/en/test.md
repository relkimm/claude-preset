Write practical and executable tests.

## Usage
- `/test` - Find code needing tests and write them
- `/test [filename]` - Write tests for that file
- `/test [function name]` - Write tests for that function

## Analysis
1. Focus on specified target if `$ARGUMENTS` provided
2. Otherwise find recently changed files without tests
3. Detect test framework (Jest, Vitest, Pytest, etc.)
4. Provide installation guide if no setup exists

## Test Cases
For each function/component:
- **Happy case**: Normal operation with typical input
- **Edge cases**: Empty values, large values, special characters
- **Error cases**: Invalid input, exceptional situations

## Test Format

```javascript
describe('functionName', () => {
  it('basic operation test', () => {
    const result = functionName(input)
    expect(result).toBe(expected)
  })

  it('handles edge cases', () => {
    // Empty values, null, etc.
  })

  it('handles errors', () => {
    expect(() => functionName(invalid)).toThrow()
  })
})
```

## Output
- Complete, runnable test code
- Include setup instructions if needed
- Provide test execution command

Usage: `/test` or `/test src/utils.js`

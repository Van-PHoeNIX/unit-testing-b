const palinDrome = require('./palinDrome');

test('Test Case 1: x = 121 (should return true)', () => {
    expect(palinDrome(121)).toBe(true);
});

test('Test Case 2: x = -121 (should return false)', () => {
    expect(palinDrome(-121)).toBe(false);
});

test('Test Case 3: x = 10 (should return false)', () => {
    expect(palinDrome(10)).toBe(false);
});

test('Test Case 4: x = "A" (should return Invalid Input)', () => {
    expect(palinDrome('A')).toBe('Invalid Input');
});
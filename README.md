# 🧪 Testing Practice

This project is part of **The Odin Project - JavaScript Course**.  
The goal of this assignment is to practice **Test Driven Development (TDD)** using **Jest** by writing unit tests for simple JavaScript functions.

---

## 🚀 Project Objective

- Learn how to write unit tests using Jest
- Understand the basics of TDD (Test → Code → Refactor)
- Practice writing clean, testable JavaScript functions
- Build confidence in debugging and validating logic

---

## 📚 Concepts Covered

- Unit Testing
- Test Driven Development (TDD)
- Jest framework
- Edge case handling
- Code modularization

---

## 🛠️ Functions Implemented

The following functions are implemented and tested:

### 1. `capitalize(string)`

- Returns the input string with the first letter capitalized

### 2. `reverseString(string)`

- Returns the reversed version of the input string

### 3. `calculator`

Object containing:

- `add(a, b)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)`

### 4. `caesarCipher(string, shift)`

- Shifts each character by a given number
- Preserves case
- Handles punctuation and spaces

### 5. `analyzeArray(array)`

Returns an object with:

- `average`
- `min`
- `max`
- `length`

---

## 🧪 Testing

All functions are tested using **Jest**.

### Run Tests

```bash
npm test
```

### Watch Mode

```bash
npm test -- --watch
```

### Project Structure

```bash
testing-practice/
│
├── src/
│ ├── capitalize.js
│ ├── reverseString.js
│ ├── calculator.js
│ ├── caesarCipher.js
│ └── analyzeArray.js
│
├── tests/
│ ├── capitalize.test.js
│ ├── reverseString.test.js
│ ├── calculator.test.js
│ ├── caesarCipher.test.js
│ └── analyzeArray.test.js
│
├── package.json
└── README.md
```

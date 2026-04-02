import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./common-functions";

test("First character capitalized", () => {
  expect(capitalize("one")).toBe("One");
  expect(capitalize("Bravo")).toBe("Bravo");
  expect(capitalize("1ne")).toBe("1ne");
  expect(() => capitalize()).toThrow(Error);
  expect(capitalize("-2wo")).toBe("-2wo");
});

test("Reverse string", () => {
  expect(() => reverseString()).toThrow(Error);
  expect(() => reverseString(123)).toThrow(Error);
  expect(reverseString("yaj")).toBe("jay");
  expect(reverseString("123")).toBe("321");
});

test("Calculator", () => {
  expect(() => calculator.add()).toThrow(Error);
  expect(() => calculator.add(123)).toThrow(Error);

  expect(() => calculator.subtract()).toThrow(Error);
  expect(() => calculator.subtract(123)).toThrow(Error);

  expect(() => calculator.divide()).toThrow(Error);
  expect(() => calculator.divide(123)).toThrow(Error);

  expect(() => calculator.multiply()).toThrow(Error);
  expect(() => calculator.multiply(123)).toThrow(Error);

  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 0)).toBe(5);
  expect(calculator.divide(5, 2)).toBe(2.5);
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("Returns an object with average, min, max, length", () => {
  const data = { average: 4, min: 1, max: 8, length: 6 };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(data);
});

test("Take a string and shift by given number", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

const fetchUser = jest.fn(() => "Real User");
const add = jest.fn(() => 10);

test("Mock function returns fixed value", () => {
  expect(fetchUser()).toBe("Real User");
  expect(add(5, 5)).toBe(10);
});

test("should track calls", () => {
  fetchUser();
  expect(fetchUser).toHaveBeenCalledTimes(2);
  expect(fetchUser).toHaveBeenCalledWith();
});

function greetUser(fetchFn) {
  return `Hello, ${fetchFn()}`;
}

test("Use mock function", () => {
  const mockFetch = jest.fn(() => "Jay");
  const result = greetUser(mockFetch);
  expect(result).toBe("Hello, Jay");
});

const mockFn = jest.fn();

mockFn.mockReturnValueOnce("First");
mockFn.mockReturnValueOnce("Second");

test("returns different value", () => {
  expect(mockFn()).toBe("First");
  expect(mockFn()).toBe("Second");
});

function processOrder(mockUser, mockTotal) {
  const user = mockUser();
  const total = mockTotal();
  return `${user} ordered items worth ${total}`;
}
const getUser = jest.fn(() => "Jay");
const calculateTotal = jest.fn(() => 10);

test("test order processing", () => {
  const result = processOrder(getUser, calculateTotal);

  expect(result).toBe("Jay ordered items worth 10");

  expect(getUser).toHaveBeenCalledTimes(1);
  expect(calculateTotal).toHaveBeenCalledTimes(1);
});

function capitalize(str) {
  if (typeof str === "string")
    return str.charAt(0).toUpperCase() + str.slice(1);
  throw new Error("Argument/string not found");
}

function reverseString(str) {
  if (typeof str === "string") {
    let result = "";
    let strlength = str.length - 1;
    for (let i = strlength; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  throw new Error("Argument/string not found");
}

const calculator = {
  add: (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a + b;
    throw new Error("Either argument not found or argument is not a number");
  },
  subtract: (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a - b;
    throw new Error("Either argument not found or argument is not a number");
  },
  divide: (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a / b;
    throw new Error("Either argument not found or argument is not a number");
  },
  multiply: (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a * b;
    throw new Error("Either argument not found or argument is not a number");
  },
};

const analyzeArray = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    if (!arr.every((element) => typeof element === "number")) {
      throw new Error("The array contains non numeric values");
    }
    let sortedArr = arr.sort((a, b) => a - b);
    let sum = arr.reduce((prev, current) => prev + current, 0);
    return (result = {
      average: sum / arr.length,
      min: sortedArr[0],
      max: sortedArr[sortedArr.length - 1],
      length: arr.length,
    });
  }
  throw new Error("Either argument is not an array or an empty array");
};

const caesarCipher = (input, num) => {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let code = input[i].charCodeAt();
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + num) % 26) + 97);
    } else if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + num) % 26) + 65);
    } else {
      result += input[i];
    }
  }
  return result;
};

export { capitalize, reverseString, calculator, analyzeArray, caesarCipher };

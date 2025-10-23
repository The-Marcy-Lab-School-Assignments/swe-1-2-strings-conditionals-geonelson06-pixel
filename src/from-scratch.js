const measureRain = (inches) => {
  if (inches === 0) {
    return 'drought';
  }
  if (inches < 2) {
    return 'dry';
  }
  if (inches < 4) {
    return 'average';
  }
  if (inches < 6) {
    return 'rainy';
  }
  return 'flood';

};

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    return 'Hiss hiss!';
  } else if (breed === 'cat' && age < 5) {
    return 'Mew mew!';
  } else if (breed === 'cat' && age >= 5) {
    return 'Meow meow!';
  } else if (breed === 'dog' && age < 5) {
    return 'Arf arf!';
  } else if (breed === 'dog' && age >= 5 && age < 10) {
    return 'Woof woof!';
  } else if (breed === 'dog' && age >= 10) {
    return 'Boof!';
  } else {
    return 'Happy birthday!';
  }

};

const funTypes = (jsType) => {
  if (typeof jsType === 'string') {
    return "That's just some text.";
  } else if (typeof jsType === 'number') {
    if (isNaN(jsType)) {
      return "Well, now you're just showing off.";
    }
    return "That's a good number.";
  } else if (typeof jsType === 'boolean') {
    return "To bool, or not to bool?";
  } else if (typeof jsType === 'undefined') {
    return "Nothing, but I didn't set that.";
  } else if (jsType === null) {
    return "Nothing, and I did set that.";
  } else if (Array.isArray(jsType)) {
    return "I order you to be indexed.";
  } else if (typeof jsType === 'object') {
    return "Anybody got the key?";
  } else {
    return "Unknown type.";
  }

};

const rounder = (float, roundingSetting) => {
  if (roundingSetting === "up") {
    return Math.ceil(float);
  } else if (roundingSetting === "down") {
    return Math.floor(float);
  } else if (roundingSetting === "honest") {
    return Math.round(float);
  } else {
    return "Invalid rounding setting.";
  }

};

const formatName = (first, last) => {
  let firstFormatted = first[0].toUpperCase() + first.slice(1).toLowerCase();
  let lastFormatted = last[0].toUpperCase() + last.slice(1).toLowerCase();
  return firstFormatted + " " + lastFormatted;

};

const extractDomain = (email) => {
  const atIndex = email.indexOf("@");

  return email.slice(atIndex + 1);
}


const startsWithVowel = (str) => {
  if (str.length === 0) {
    return false;
  }

  const firstChar = str[0].toLowerCase();
  return firstChar === 'a' ||
         firstChar === 'e' ||
         firstChar === 'i' ||
         firstChar === 'o' ||
         firstChar === 'u';
};

const rotate = (str, num) => {
  if (str.length === 0) return str;

  num = num % str.length;

  let result = str;

  for (let i = 0; i < num; i++) {
    const lastChar = result[result.length - 1];
    const rest = result.slice(0, result.length - 1);
    result = lastChar + rest;
  }

  return result;
};




module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};

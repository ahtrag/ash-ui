/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function renderClassName() {
  return [...arguments].filter(value => Boolean(value)).join(" ");
}

function renderStyle() {
  return Object.assign({}, ...arguments);
}

const offset = element => {
  const { top, left, height, width } = element.getBoundingClientRect();

  return { top, left, height, width };
};

const escapeFalseValue = (type, value) => {
  if (!value) {
    return type === "string" ? "" : 0;
  }
  return value;
};

const sort = (array, type, key = null) => {
  const newArray = JSON.parse(JSON.stringify(array));

  if (
    (key && typeof newArray[0][key] === "number") ||
    typeof newArray[0] === "number"
  ) {
    return newArray.sort((a, b) =>
      type === "ascending"
        ? key
          ? escapeFalseValue("number", a[key]) -
            escapeFalseValue("number", b[key])
          : escapeFalseValue("number", a) - escapeFalseValue("number", b)
        : key
        ? escapeFalseValue("number", b[key]) -
          escapeFalseValue("number", a[key])
        : escapeFalseValue("number", b) - escapeFalseValue("number", a)
    );
  }

  return newArray.sort((a, b) =>
    key
      ? escapeFalseValue("string", a[key]).toUpperCase() <
        escapeFalseValue("string", b[key]).toUpperCase()
        ? type === "ascending"
          ? -1
          : 1
        : escapeFalseValue("string", a[key]).toUpperCase() >
          escapeFalseValue("string", b[key]).toUpperCase()
        ? type === "ascending"
          ? 1
          : -1
        : 0
      : escapeFalseValue("string", a).toUpperCase() <
        escapeFalseValue("string", b).toUpperCase()
      ? type === "ascending"
        ? -1
        : 1
      : escapeFalseValue("string", a).toUpperCase() >
        escapeFalseValue("string", b).toUpperCase()
      ? type === "ascending"
        ? 1
        : -1
      : 0
  );
};

const useMedia = mediaQuery => {
  const newMediaQuery = mediaQuery ? mediaQuery.replace("@media ", "") : "";
  const mediaQueryList = window.matchMedia(newMediaQuery);

  const getValue = () => {
    return mediaQueryList.matches;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryList.addListener(handler);

    return () => mediaQueryList.removeListener(handler);
  }, []);

  return value;
};

const randomString = (length = 6) => {
  let randomString = "";
  while (randomString.length < length && length > 0) {
    var r = Math.random();
    randomString +=
      r < 0.1
        ? Math.floor(r * 100)
        : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65));
  }
  return randomString;
};

const removeDuplicates = arr => {
  const result = [];
  const duplicatesIndices = [];

  // Loop through each item in the original array
  arr.forEach((current, index) => {
    if (duplicatesIndices.includes(index)) return;

    result.push(current);

    // Loop through each other item on array after the current one
    for (
      let comparisonIndex = index + 1;
      comparisonIndex < arr.length;
      comparisonIndex++
    ) {
      const comparison = arr[comparisonIndex];
      const currentKeys = Object.keys(current);
      const comparisonKeys = Object.keys(comparison);

      // Check number of keys in objects
      if (currentKeys.length !== comparisonKeys.length) continue;

      // Check key names
      const currentKeysString = currentKeys
        .sort()
        .join("")
        .toLowerCase();
      const comparisonKeysString = comparisonKeys
        .sort()
        .join("")
        .toLowerCase();
      if (currentKeysString !== comparisonKeysString) continue;

      // Check values
      let valuesEqual = true;
      for (let i = 0; i < currentKeys.length; i++) {
        const key = currentKeys[i];
        if (current[key] !== comparison[key]) {
          valuesEqual = false;
          break;
        }
      }
      if (valuesEqual) duplicatesIndices.push(comparisonIndex);
    } // end for loop
  }); // end arr.forEach()

  return result;
};

const invalidUserName = name => {
  const regEx = /[^0-9A-Za-z .,]/g;

  if (regEx.test(name)) {
    return true;
  }

  return false;
};

const validateEmail = email => {
  const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return regEx.test(email);
};

const validatePhoneNumber = phoneNumber => {
  const regExIdentifier = /^\+62/;
  phoneNumber = phoneNumber.replace(regExIdentifier, "0");
  const regEx = /^[0]+\d{9,12}$/;

  return regEx.test(phoneNumber);
};

const invalidPassword = password => {
  const regExCapital = /[A-Z]/g;
  const regExSymbol = /[^a-zA-Z0-9]/g;
  const regExNumber = /[\d]/g;

  if (password) {
    if (password.length >= 6) {
      if (regExCapital.test(password)) {
        if (regExSymbol.test(password)) {
          if (regExNumber.test(password)) {
            return false;
          }
          return "Password must contain number";
        }
        return "Password must contain symbol";
      }
      return "Password must contain capital letter";
    }
    return "Password must be at least 6 characters";
  }
  return "Password can not be empty";
};

export {
  randomString,
  removeDuplicates,
  invalidUserName,
  validateEmail,
  validatePhoneNumber,
  invalidPassword,
  renderClassName,
  renderStyle,
  offset,
  sort,
  useMedia
};

import moment from "moment";

const isStringEmptyOrInvalid = stringToCheck => {
  if (!Boolean(stringToCheck.toString().trim()) || !Boolean(stringToCheck)) {
    return true;
  }

  return false;
};

const isArrayEmptyOrInvalid = arrayToCheck => {
  if (!Boolean(arrayToCheck) || arrayToCheck.length < 1) {
    return true;
  }

  return false;
};

const formatDateToReadableForm = date => {
  if (!isStringEmptyOrInvalid(date)) {
    return moment(date).format("ddd, DD MMM YYYY HH:mm");
  }
  return "";
};

const formatDateToReadableFormDate = date => {
  if (!isStringEmptyOrInvalid(date)) {
    return moment(date).format("DD-MMM-YYYY");
  }
  return "";
};

const formatDateToReadableFormMonth = date => {
  if (!isStringEmptyOrInvalid(date)) {
    return moment(date).format("MMM YYYY");
  }
  return "";
};

const getCurrentDateUtcFormat = () => {
  return moment().format();
};

const sortArrayOfObjectByProp = (dataArrayObject, prop, orderType) => {
  let res = [];
  if (orderType === "desc") {
    res = dataArrayObject.sort(function(a, b) {
      return a[prop] > b[prop] ? -1 : a[prop] < b[prop] ? 1 : 0;
    });
  } else {
    res = dataArrayObject.sort(function(a, b) {
      return a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0;
    });
  }
  return res;
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

const invalidEmail = email => {
  const regEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

  if (regEx.test(email)) {
    return false;
  }

  return true;
};

const invalidPassword = password => {
  const regExCapital = /[A-Z]/g;
  const regExSymbol = /[^a-zA-Z0-9]/g;
  const regExNumber = /[\d]/g;

  if (!isStringEmptyOrInvalid(password)) {
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

const createRipple = e => {
  const button = e.currentTarget;
  const rippleRoot = button.firstElementChild;
  const newElement = document.createElement("span");

  rippleRoot.append(newElement);

  const x = e.pageX - button.offsetLeft;
  const y = e.pageY - button.offsetTop;
  const duration = 400;
  let animationFrame, animationStart;

  const animation = time => {
    if (!animationStart) {
      animationStart = time;
    }

    const frame = time - animationStart;

    if (frame < duration) {
      var easing = (frame / duration) * (2 - frame / duration);

      var circle = `circle at ${x}px ${y}px`;
      var color = `rgba(0, 0, 0, ${0.3 * (1 - easing)})`;
      var stop = `${100 * easing}%`;

      newElement.style.cssText = `
        display: block; 
        position: relative; 
        height: 100%; 
        width: 100%; 
        background-image: radial-gradient(${circle}, ${color} ${stop}, transparent ${stop})
      `;

      animationFrame = window.requestAnimationFrame(animation);
    } else {
      newElement.parentNode.removeChild(newElement);

      window.cancelAnimationFrame(animationFrame);
    }
  };

  animationFrame = window.requestAnimationFrame(animation);
};

export {
  isStringEmptyOrInvalid,
  isArrayEmptyOrInvalid,
  formatDateToReadableForm,
  formatDateToReadableFormDate,
  formatDateToReadableFormMonth,
  getCurrentDateUtcFormat,
  sortArrayOfObjectByProp,
  randomString,
  removeDuplicates,
  invalidUserName,
  invalidEmail,
  invalidPassword,
  createRipple
};

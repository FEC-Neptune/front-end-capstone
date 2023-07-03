export const findDefaultStyle = (stylesArray) => {
  if (stylesArray.length) {
    for (var i = 0; i < stylesArray.length; i++) {
      if (isDefaultStyle(stylesArray[i])) {
        return stylesArray[i];
      }
    }
    return stylesArray[0];
  } else {
    return {};
  }
};

export const isDefaultStyle = (styleObj) => {
  return styleObj['default?'];
};

export const createSubarray = (array, n) => {
  var newArray = [];
  for (var i = 0; i < array.length; i += n) {
    newArray.push(array.slice(i, i + n));
  }
  return newArray;
};

export const createArrayFromInt = (maxInt) => {
  var array = [];

  if (isNaN(maxInt)) {
    return array;
  }

  for (var i = 1; i < maxInt; i++) {
    array.push(i);
    if (i >= 15) {
      break;
    }
  }
  return array;
};
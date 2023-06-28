const findDefaultStyle = (stylesArray) => {
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

const isDefaultStyle = (styleObj) => {
  return styleObj['default?'];
};

module.exports = { findDefaultStyle, isDefaultStyle };
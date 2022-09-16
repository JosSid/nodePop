"use strict";

function filtraArray(string, array) {
  let name = undefined;
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase().startsWith(string.toLowerCase())) {
      name = array[i];
      i = array.length - 1;
    } else if (array[i].toLowerCase().includes(string.toLowerCase())) {
      name = array[i];
      i = array.length - 1;
    }
  };

  return name;
};

module.exports = filtraArray;

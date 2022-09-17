"use strict";

function filtraArray(string, array) {
  let names = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase().startsWith(string.toLowerCase())) {
      names.push(array[i]);
      i++;
    } else if (array[i].toLowerCase().includes(string.toLowerCase())) {
      names.push(array[i]);
      i++;
    };
  };

  return names;
};

module.exports = filtraArray;

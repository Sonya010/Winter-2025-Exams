// Refactor following solution
// Count types in an array

// Step 1
// Add 'use strict'
// Change function to arrow

'use strict';

types_ = (s) => {
  types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of s) {
    const t = typeof i;
    types_[t]++;
  }
  s.push('string');
  return types_;
  s.length;
};

module.exports = types_;

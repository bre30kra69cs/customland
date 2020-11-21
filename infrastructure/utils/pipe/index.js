const {tap} = require('../tap');

function pipe(...funcs) {
  if (!funcs.length) {
    return tap;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((acc, next) => {
    return (...args) => next(acc(...args));
  });
}

module.exports = {
  pipe,
};

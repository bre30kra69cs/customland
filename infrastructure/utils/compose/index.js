const {tap} = require('../tap');

function compose(...funcs) {
  if (!funcs.length) {
    return tap;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduceRight((acc, next) => {
    return (...args) => next(acc(...args));
  });
}

module.exports = {
  compose,
};

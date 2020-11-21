function commonFormatter() {
  return function messageFormatter(...args) {
    return args;
  };
}

module.exports = {
  commonFormatter,
};

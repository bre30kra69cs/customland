function labelFormatter() {
  return function messageFormatter(...args) {
    return args;
  };
}

module.exports = {
  labelFormatter,
};

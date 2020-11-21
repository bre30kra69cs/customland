function createCounter(initCounter) {
  let count = initCounter;

  return function () {
    const currentCount = count;
    count += 1;
    return currentCount;
  };
}

module.exports = {
  createCounter,
};

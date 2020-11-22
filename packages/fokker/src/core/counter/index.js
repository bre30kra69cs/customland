function createCounter(initCounter) {
  let count = initCounter;

  return function counter() {
    const currentCount = count;
    count += 1;
    return currentCount;
  };
}

module.exports = {
  createCounter,
};

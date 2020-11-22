function promisify(fn) {
  return function promisified(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  };
}

module.exports = {
  promisify,
};

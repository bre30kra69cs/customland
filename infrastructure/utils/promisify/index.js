const console = require('../../../packages/fokker/src/presets/handlers/console');

function promisify(fn) {
  return function (...args) {
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

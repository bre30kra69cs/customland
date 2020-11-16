const {lable} = require('../../../fokker');

function log(message) {
  lable({
    title: '🔧  log',
    message,
    config: {
      type: 'blue',
      counting: true,
    },
  });
}

function error(message) {
  lable({
    title: '🔥  error',
    message,
    config: {
      type: 'red',
      counting: true,
    },
  });
}

function global(title) {
  lable({
    title,
    config: {
      type: 'green',
      counting: false,
    },
  });
}

module.exports = {
  log,
  error,
  global,
};

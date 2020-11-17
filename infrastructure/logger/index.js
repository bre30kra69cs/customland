const {createLogger} = require('../../packages/fokker');

const {lable} = createLogger();

function log(...messages) {
  lable({
    title: '🔧  log',
    messages,
    config: {
      type: 'blue',
      counting: true,
    },
  });
}

function error(...messages) {
  lable({
    title: '🔥  error',
    messages,
    config: {
      type: 'red',
      counting: true,
    },
  });
}

function global(title) {
  lable({
    title: `🌍  ${title.toUpperCase()}`,
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

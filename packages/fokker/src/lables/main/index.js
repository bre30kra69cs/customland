const {log} = require('../../core/main');
const {counter} = require('../../counter');
const {lableStyler} = require('../stylers/mac');

const defaultConfig = {
  type: lableStyler.none,
  counting: false,
};

function parseConfig(config = {}) {
  const {type, counting} = {...defaultConfig, ...config};
  const styler = lableStyler[type] || lableStyler.none;
  return {styler, counting};
}

function lableCore(source = []) {
  source.forEach((value) => log(value));
}

function extendTitle(title, counting) {
  const extendedTitle = counting ? `${title} [${counter()}]` : title;
  return ` ${extendedTitle} `;
}

function lable({title, messages = [], config}) {
  const {styler, counting} = parseConfig(config);
  const extendedTitle = extendTitle(title, counting);
  const source = styler(extendedTitle, messages);
  lableCore(source);
}

module.exports = {
  lable,
};

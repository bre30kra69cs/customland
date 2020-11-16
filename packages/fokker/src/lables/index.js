const {log} = require('../core');
const {colors} = require('../colors');
const {counter} = require('../counter');

function getTitleSource(title, styles = []) {
  return title ? [styles, title] : [];
}

function getMessageSource(message, styles = []) {
  const style = [colors.actions.reset, ...styles];
  return message ? [style, message] : [[colors.actions.reset]];
}

function noneLable(title, message) {
  const titleSource = getTitleSource(title, []);
  const messageSource = getMessageSource(message);
  return [...titleSource, ...messageSource];
}

function greenLable(title, message) {
  const titleSource = getTitleSource(title, [colors.background.green]);
  const messageSource = getMessageSource(message);
  return [...titleSource, ...messageSource];
}

function redLable(title, message) {
  const titleSource = getTitleSource(title, [colors.background.red]);
  const messageSource = getMessageSource(message);
  return [...titleSource, ...messageSource];
}

function blueLable(title, message) {
  const titleSource = getTitleSource(title, [colors.background.blue]);
  const messageSource = getMessageSource(message);
  return [...titleSource, ...messageSource];
}

function yellowLable(title, message) {
  const titleSource = getTitleSource(title, [colors.background.yellow]);
  const messageSource = getMessageSource(message);
  return [...titleSource, ...messageSource];
}

const lableTypes = {
  none: noneLable,
  green: greenLable,
  blue: blueLable,
  red: redLable,
  yellow: yellowLable,
};

const defaultConfig = {
  type: lableTypes.none,
  counting: false,
};

function parseConfig(config = {}) {
  const {type, counting} = {...defaultConfig, ...config};
  const styler = lableTypes[type] || lableTypes.none;
  return {styler, counting};
}

function lableCore(source = []) {
  log(...source);
}
function extendTitle(title, counting) {
  return counting ? `${title} [${counter()}]` : title;
}

function lable({title, message, config}) {
  const {styler, counting} = parseConfig(config);
  const extendedTitle = extendTitle(title, counting);
  const source = styler(extendedTitle, message);
  lableCore(source);
}

module.exports = {
  lable,
};

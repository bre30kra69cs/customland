const {filterTap} = require('../../../../../../infrastructure/utils/tap');

const {COLORS} = require('../colors/mac');
const {LEVELS} = require('../../../const');

const LEVEL_MAPPER = {
  [LEVELS.LOG]: COLORS.FOREGROUND.CYAN,
  [LEVELS.ERROR]: COLORS.FOREGROUND.RED,
  [LEVELS.WARN]: COLORS.FOREGROUND.YELLOW,
  NONE: '',
};

const RESET = COLORS.ACTION.RESET;

function createPrefix(formatterConfig, label, color) {
  const {count, timestamp, counter, timestamper} = formatterConfig;
  const countPrefix = count ? `[${counter()}]` : '';
  const timestampPrefix = timestamp ? `[${timestamper()}]` : '';
  const basePrefix = [countPrefix, timestampPrefix, label].filter(filterTap).join(' ');
  const prefix = RESET + color + basePrefix + RESET;
  return prefix;
}

function formatObject(source) {
  const formatedSource = source.map((item) => {
    const formatedItem = typeof item === 'object' ? JSON.stringify(item, null, 2) : item;
    return formatedItem;
  });
  return formatedSource;
}

function labelFormatter(formatterConfig) {
  const {level} = formatterConfig;
  const color = LEVEL_MAPPER[level] ?? LEVEL_MAPPER.NONE;
  return function messageFormatter(label, ...source) {
    const prefix = createPrefix(formatterConfig, label, color);
    const formatedSource = formatObject(source);
    const result = [prefix, ...formatedSource];
    return result;
  };
}

module.exports = {
  labelFormatter,
};

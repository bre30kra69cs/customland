const {filterTap} = require('../../../../../../infrastructure/utils/tap');

const {colors} = require('../colors/mac');

const levelMapper = {
  none: '',
  log: colors.foreground.cyan,
  error: colors.foreground.red,
  warn: colors.foreground.yellow,
};

function createPrefix(formatterConfig, label, color) {
  const {count, timestamp, counter, timestamper} = formatterConfig;

  const countPrefix = count ? `[${counter()}]` : '';

  const timestampPrefix = timestamp ? `[${timestamper()}]` : '';

  const basePrefix = [countPrefix, timestampPrefix, label].filter(filterTap).join(' ');

  const prefix = colors.actions.reset + color + basePrefix + colors.actions.reset;

  return prefix;
}

function formatObject(source) {
  return source.map((item) => {
    const formatedItem = typeof item === 'object' ? JSON.stringify(item, null, 2) : item;

    return formatedItem;
  });
}

function labelFormatter(formatterConfig) {
  const {level} = formatterConfig;

  const color = levelMapper[level] ?? levelMapper.none;

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

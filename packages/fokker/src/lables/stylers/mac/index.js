const {colors} = require('../../../colors/mac');
const {compose} = require('../../../../../../infrastructure/utils/compose');

function getTitleSource(title = '', styles = []) {
  if (!title) {
    return '';
  }

  const resetMarkedStyle = {value: colors.actions.reset, isStyle: true};
  const markedTitle = {value: title + colors.actions.reset, isStyle: false};
  const markedStyles = styles.map((value) => ({value, isStyle: true}));
  const source = [...markedStyles, markedTitle];
  return [resetMarkedStyle, ...source];
}

function getMessagesSource(messages = [], styles = []) {
  if (!messages.length) {
    return [];
  }

  const resetMarkedStyle = {value: colors.actions.reset, isStyle: true};
  const markedMessages = messages.map((value) => ({value, isStyle: false}));
  const markedStyles = styles.map((value) => ({value, isStyle: true}));
  const source = [...markedStyles, ...markedMessages];
  return [resetMarkedStyle, ...source];
}

function createStyler(styles) {
  return function (title, messages) {
    const titleSource = getTitleSource(title, styles);
    const messagesSource = getMessagesSource(messages);
    return [...titleSource, ...messagesSource];
  };
}

function formatObjects(source) {
  return source.map((item) => ({
    ...item,
    value: typeof item.value !== 'object' ? item.value : JSON.stringify(item.value, null, 2),
  }));
}

function joinStyles(source = []) {
  if (!source.length) {
    return undefined;
  }

  if (source.length === 1) {
    return source[0].value;
  }

  const d = source.reduceRight((acc, next) => {
    const [headAcc, ...restAcc] = acc;
    const head = headAcc ?? '';
    const rest = restAcc ?? [];

    if (next.isStyle) {
      const nextHead = next.value + head;
      return [nextHead, ...rest];
    }

    if (head) {
      return [next.value, head, ...rest];
    }

    return [next.value, ...rest];
  }, []);

  return d;
}

function composeStyler(styler) {
  return compose(joinStyles, formatObjects, styler);
}

const lableStyler = {
  none: composeStyler(createStyler()),
  green: composeStyler(createStyler([colors.background.green])),
  blue: composeStyler(createStyler([colors.background.blue])),
  red: composeStyler(createStyler([colors.background.red])),
  yellow: composeStyler(createStyler([colors.background.yellow])),
};

module.exports = {
  lableStyler,
};

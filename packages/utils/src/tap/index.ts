import {Func} from '../../../types';

export const tap: Func = (...args: any[]) => {
  if (!args.length) {
    return;
  }

  if (args.length === 1) {
    return args[0];
  }

  return args;
};

import {tap} from '../tap';

import {Func} from '../../../types';

type Return<T extends Func, P extends Func> = (...args: Parameters<T>) => ReturnType<P>;

type Pipe = {
  (): Func;
  <T extends Func>(...args: [T]): Return<T, T>;
  <T extends Func, P extends Func>(...args: [T, P]): Return<T, P>;
  <T extends Func, P, S extends Func>(...args: [T, P, S]): Return<T, S>;
  <T extends Func, P, S, C extends Func>(...args: [T, P, S, C]): Return<T, C>;
  <T extends Func, P, S, C, K extends Func>(...args: [T, P, S, C, K]): Return<T, K>;
  (...args: any[]): Func;
};

export const pipe: Pipe = (...funcs: Func[]) => {
  if (!funcs.length) {
    return tap;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((acc, next) => (...args: any[]) => next(acc(...args)));
};

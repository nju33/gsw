export type GswListenerFunction<V> = (newValue: V, oldValue: V) => void;

export type GswListener<
  T extends {[x: string]: any},
  P extends keyof T = keyof T
> = Record<keyof T, GswListenerFunction<T[P]>[]>;

export interface GswHandler<T extends {[x: string]: any}> {
  <P extends keyof T>(prop: P, val: GswListenerFunction<T[P]>): void;
  <P extends keyof T>(prop: P, val: T[P]): void;
  <P extends keyof T>(prop: P): T[P];
}

export const gsw = <T extends {[x: string]: any} = {}>(
  object: T,
): GswHandler<T> => {
  const keys = Object.keys(object);

  /**
   * the listener register object
   */
  const listener: GswListener<T> = keys.reduce(
    (result, key) => {
      result[key] = [];
      return result;
    },
    {} as GswListener<T>,
  );

  /**
   * @param prop target prop name
   * @param val lisner or newValue
   * @example
   * a('foo') // get
   * a('foo', 123) // set
   * a('foo', (newValue, oldValue) => {}) // watch
   */
  return <P extends keyof T>(prop: P, val?: T[P]) => {
    if (typeof val === 'function') {
      listener[prop].push(val);
      return;
    }

    if (val !== undefined) {
      // listener fires only when `val` is really new value
      if (val !== object[prop]) {
        const listeners = listener[prop];
        listeners.forEach(aListener => {
          aListener(val, object[prop]);
        });
        object[prop] = val;
      }
      return;
    }

    if (val === undefined) {
      return object[prop];
    }
  };
};

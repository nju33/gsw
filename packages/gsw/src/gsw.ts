export type GswListenerFunction<V> = (newValue: V, oldValue: V) => void;

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GswDictionary {
  [x: string]: any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export type GswListener<
  T extends GswDictionary,
  P extends keyof T = keyof T
> = Record<keyof T, GswListenerFunction<T[P]>[]>;

export interface GswHandler<T extends GswDictionary> {
  <P extends keyof T>(prop: P, val: GswListenerFunction<T[P]>): void;
  <P extends keyof T>(prop: P, val: T[P]): void;
  <P extends keyof T>(prop: P): T[P];
}

export const gsw = <T extends GswDictionary = {}>(object: T): GswHandler<T> => {
  const keys = Object.keys(object);

  /**
   * The listener register object
   */
  const listener: GswListener<T> = keys.reduce(
    (result, key): GswListener<T> => {
      result[key] = [];
      return result;
    },
    ({} as unknown) as GswListener<T>,
  );

  /**
   * @param prop target prop name
   * @param val lisner or newValue
   * @example
   * a('foo') // get
   * a('foo', 123) // set
   * a('foo', (newValue, oldValue) => {}) // watch
   */
  return <P extends keyof T>(prop: P, val?: T[P]): undefined | unknown => {
    if (typeof val === 'function') {
      listener[prop].push(val);
      return;
    }

    if (val !== undefined) {
      // Listener fires only when `val` is really new value
      if (val !== object[prop]) {
        const listeners = listener[prop];
        listeners.forEach(
          (aListener: GswListenerFunction<T[P]>): void => {
            aListener(val, object[prop]);
          },
        );
        object[prop] = val;
      }

      return;
    }

    if (val === undefined) {
      return object[prop];
    }
  };
};

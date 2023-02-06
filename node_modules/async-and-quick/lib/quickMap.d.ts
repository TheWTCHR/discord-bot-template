export = _map;
/** @type {<T, R>(arr: T[], fn: (value: T, index: number, arr: T[]) => (R | Promise<R>), parts: number) => Promise<R[]>} */
declare function _map<T, R>(arr: T[], fn: (value: T, index: number, arr: T[]) => R | Promise<R>, parts?: number): Promise<R[]>;

export = find;
/** @type {<T>(arr: T[], fn: (value: T, index: number, arr: T[]) => (boolean | Promise<boolean>), parts: number) => Promise<T>} */
declare function find<T>(arr: T[], fn: (value: T, index: number, arr: T[]) => (boolean | Promise<boolean>), parts?: number): Promise<T>;

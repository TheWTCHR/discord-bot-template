export = forEach;
/** @type {<T>(arr: T[], fn: (value: T, index: number, arr: T[]) => (void | Promise<void>), parts: number) => Promise<void>} */
declare function forEach<T>(arr: T[], fn: (value: T, index: number, arr: T[]) => (void | Promise<void>), parts?: number): Promise<void>;

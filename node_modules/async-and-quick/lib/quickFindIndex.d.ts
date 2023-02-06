export = findIndex;
/** @type {<T>(arr: T[], fn: (value: T, index: number, arr: T[]) => (boolean | Promise<boolean>), parts: number) => Promise<number|-1>} */
declare function findIndex<T>(arr: T[], fn: (value: T, index: number, arr: T[]) => (boolean | Promise<boolean>), parts?: number): Promise<number | -1>;

export = quickSort;
/** @type {<T>(arr: T[], compare: (a: T, b: T) => (Number | Promise<Number>)) => Promise<T[]>} */
declare function quickSort<T>(arr: T[], compare: (a: T, b: T) => (number | Promise<number>), left?: any, right?: any): Promise<T[]>;

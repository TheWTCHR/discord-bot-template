const chillout = require("chillout");
const chunkify = require("./chunkify");

/** @type {<T>(arr: T[], fn: (value: T, index: number, arr: T[]) => (void | Promise<void>), parts: number) => Promise<void>} */
async function forEach(arr, fn, parts = 20) {
  let chunkSize = Math.ceil(arr.length / parts);
  let arrChunked = await chunkify(arr, chunkSize);
  let arrChunkedLength = arrChunked.length;
  let finished = 0;
  arrChunked.forEach(async (chunk, chunkIndex) => {
    if (chunk.length) await chillout.repeat(chunk.length, async (i) => {
      i = (chunkSize * chunkIndex) + i;
      await fn(arr[i], i, arr);
    });
    finished += 1;
  })
  await chillout.waitUntil(() => {
    if (finished >= arrChunkedLength) return chillout.StopIteration;
  });
  chunkSize = arrChunked = arrChunkedLength = finished = 0;
}

module.exports = forEach;
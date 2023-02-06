const chillout = require("chillout");

async function getPivot(x, y, z, compare) {
  if (await compare(x, y) < 0) {
    if (await compare(y, z) < 0) {
      return y;
    } else if (await compare(z, x) < 0) {
      return x;
    } else {
      return z;
    }
  } else if (await compare(y, z) > 0) {
    return y;
  } else if (await compare(z, x) > 0) {
    return x;
  } else {
    return z;
  }
}

/** @type {<T>(arr: T[], compare: (a: T, b: T) => (Number | Promise<Number>)) => Promise<T[]>} */
async function quickSort(arr, compare, left = 0, right = arr.length - 1) {
  if (left < right) {
    let i = left, j = right, tmp;
    const pivot = await getPivot(arr[i], arr[i + Math.floor((j - i) / 2)], arr[j], compare);
    await chillout.until(async () => {
      await chillout.until(async () => {
        if (await compare(arr[i], pivot) < 0) {
          i++;
        } else {
          return chillout.StopIteration;
        }
      })

      await chillout.until(async () => {
        if (await compare(pivot, arr[j]) < 0) {
          j--;
        } else {
          return chillout.StopIteration;
        }
      })

      if (i >= j) {
        return chillout.StopIteration;
      }

      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;

      i++;
      j--;
    })
    await quickSort(arr, compare, left, i - 1);
    await quickSort(arr, compare, j + 1, right);
  }
  return arr;
}

module.exports = quickSort;
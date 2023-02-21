// source -> ['word1', 'word2'...]

function parseToArray(source) {
  // **source exmaple**
  // - erroneous
  // - **fatal**
  // - **excursion**
  // - _ignorant_

  function map_fn(item, replaceLst) {
    if (!replaceLst.length) {
      return item.trim();
    }
    const first = replaceLst[0];
    const rest = replaceLst.slice(1);
    return map_fn(item.replaceAll(first, ''), rest);
  }

  let result = source.split('\n');
  result = result.map((item) => map_fn(item.trim(), ['-', '_', '*']));
  return result;
}

const source = ``;

const result = parseToArray(source);
console.log(result);

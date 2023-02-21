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

const source = `- _conservation_
- _enrol_
- **summit**
- specialize in
- _resident_
- **radical**
- rag
- **prescribe**
- _manner_
- beneath
- _recreation_
- procession
- tackle
- resort n/v
  - resort to
- broom
- recruit
- superb
- bloody
- fierce
- enquire
- _emit_
- _superficial_
- drip
- sole
- **folk**
- enclose
- _gamble_
- loophole
- **ornament**
- paradox
- awe
- bail
- _bold_
- so-called
- superior
- damn
- erroneous
- **fatal**
- **excursion**
- _ignorant_
- county
- condense
- asset
- rear
  - bring up the rear
- hollow
- charter
- astonish
- cabbage
- **condemn**
- surplus
- **eliminate**
  - eliminate the possibility
- _alike_
- _phenomenon_
- curtain
- bystander
- **bait**
- extinguish
- federation
- grin
- **hatch**
  - hatch out
- irrational
- layoff
- _norm_
- **decisive**
  - play a decisive role in`;

const result = parseToArray(source);
console.log(result);

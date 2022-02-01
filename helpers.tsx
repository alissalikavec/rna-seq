const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export function getCounts(readCounts) {
  let countsList = [];
  const readsLength = readCounts.length;
  for (var num = 0; num < readsLength; num++) {
    let count = readCounts[num].count;
    let readRange = readCounts[num].range[0];
    let rangeArr = range(readRange.start, readRange.end, 1);
    if (readRange.start < readRange.end) {
      for (let j = readRange.start; j < rangeArr.length; j++) {
        countsList.push({ x: count, y: j });
      }
    } else {
      countsList.push({ x: readRange.end, y: count });
    }
  }
  return countsList;
}

export function getAnnotations(annotations) {
  const annotationsLength = annotations[0].length;
  let annotationsList = [];
  for (var num = 0; num < annotationsLength; num++) {
    let name = annotations[0][num].Gene;
    let readRange = annotations[0][num].range[0];
    annotationsList.push({
      startValue: readRange.start,
      endValue: readRange.end,
      color: '#d8d8d8',
      label: name
    });
  }
  return annotationsList;
}

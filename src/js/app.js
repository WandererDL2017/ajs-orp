function compare(a, b) {
  const result = (a.key < b.key) ? -1 : 1;
  return result;
}

export default function orderByProps(obj, arr) {
  const mainProp = [];
  const otherProp = [];
  let sortProp = [];
  for (const prop in obj) {
    if (arr.includes(prop)) {
      mainProp.push({ key: prop, value: obj[prop] });
    } else {
      otherProp.push({ key: prop, value: obj[prop] });
      otherProp.sort(compare);
    }
  }
  sortProp = mainProp.concat(otherProp);
  return sortProp;
}

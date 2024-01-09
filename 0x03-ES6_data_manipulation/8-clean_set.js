export default function cleanSet(set, startString) {
  // Filter set values that start with startString
  const filteredValues = [...set].filter(value => value.startsWith(startString));

  // Append the rest of each value and join with "-"
  const resultString = filteredValues.map(value => value.slice(startString.length)).join('-');

  return resultString;
}

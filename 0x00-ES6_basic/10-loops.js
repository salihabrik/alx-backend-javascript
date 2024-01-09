export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    // Use const instead of var for immutability
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}

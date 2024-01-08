function hasValuesFromArray (set , array) {
    return array.every(function(value) {
        return set.has(value);
    });
}
export default hasValuesFromArray;

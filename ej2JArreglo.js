function flattenArray(arr) {
    let flattened = [];

    function flattenHelper(array) {
        array.forEach(element => {
            if (Array.isArray(element)) {
                flattenHelper(element);
            } else {
                flattened.push(element);
            }
        });
    }

    flattenHelper(arr);
    return flattened;
}

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
let flattenedArray = flattenArray(multiDimension);
console.log(flattenedArray);

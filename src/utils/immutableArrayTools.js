export function insertItem(array, item) {
    return [...array, item];
}

export function removeItem(array, index) {
    let newArray = array.slice();
    newArray.splice(index, 1);
    return newArray;
}

export function updateObjectInArray(array, item, index) {
    return array.map( (el, key) => {
        if(key !== index) {
            // This isn't the item we care about - keep it as-is
            return el;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
            ...el,
            ...item
        };
    });
}

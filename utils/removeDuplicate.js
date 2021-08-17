const deduplicate = (arr) => {
    return [...new Set(arr)];
}



//  o(n)
const deduplicate2 = (arr) => {
    const visited = new Set();
    let back = 0;
    // front is being used for iteration
    for (let front = 0; front < arr.length; front++) {
        // if duplicate: proceed only front;
        // if not: proceed both;
        if (visited.has(arr[front])) {
            continue;
        }
        visited.add(arr[front]);
        arr[back] = arr[front];
        back++;
    }
    /* this will decrease the size of array and we will get
    a deduped array */
    arr.length = back;

    return arr;
}


console.log(deduplicate2([1, 2, 3, 4, 5, 6, 6, 'String', 'String', undefined, undefined]))
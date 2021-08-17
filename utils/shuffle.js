function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        //   console.log(j) // random index from 0 to i

        // swap elements array[i] and array[j]
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


// counts of appearances for all possible permutations
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`)
}
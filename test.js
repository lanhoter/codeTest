const vehicles = [
    { Make: 'Volkswagen', Brand: 'Passat', Color: 'Black', Number: 5 },
    { Make: 'Toyota', Brand: 'Corolla', Color: 'Black', Number: 3 },
    { Make: 'BMW', Brand: 'Mini', Color: 'red', Number: 6 },
    { Make: 'Buick', Brand: 'Encore', Color: 'White', Number: 10 },
    { Make: 'Ford', Brand: 'Explorer', Color: 'Sliver', Number: 7 },
];

let countItem = (arr) => {
    let res = []
    arr.map(item => Object.values(item).forEach(singleItem => res.push(singleItem)))
    return count = res.reduce((allElements, ele) => {
        if (ele in allElements) {
            ++allElements[ele];
        } else {
            allElements[ele] = 1;
        }
        return allElements;
    }, {});
}
console.log(countItem(vehicles));

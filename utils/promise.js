let results = []; // to be resolved array of values
// return a promise
return new Promise((resolve, reject) => {
    // checking for [] array
    if (promises.length === 0) {
        resolve([]);
    } else {
        promises.forEach((promise, index) => {
            if (promise instanceof Promise) {
                promise.then((value) => {
                    results[index] = value;
                    if (results.length === promises.length) {
                        // to break the loop
                        resolve(results);
                    }
                }).catch(function (error) {
                    reject(error);
                });
            } else {
                // what if the array value is just a number
                results[index] = promise;
            }
            if (results.length === promises.length) {
                // to break the loop
                resolve(results);
            }
        });
    }
});
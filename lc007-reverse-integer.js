let reverse = (x) => {
    // 转数组
    let numberToArray = String(Math.abs(x)).split('');

    // 转字符串
    let result = '';
    for (const i = 0; i < numberToArray.length;) {
        result += numberToArray.pop();
    }
    result = x > 0 ? Number(result) : - Number(result);

    // 超 [-Math.pow(2, 31), Math.pow(2, 31) - 1] 判断
    if (result > Math.pow(2, 31) - 1 || result < - Math.pow(2, 31))
        result = 0;

    return result;
};


console.log(reverse(-1234))
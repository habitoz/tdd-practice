const stringLength = (str) => {
    return str.length;
}

const reverseString = (str) => {
    return str.split('').reverse().join('');
}
const calculator = {
    add: (a,b) => a+b,
    multiply: (a,b) => a*b,
    subtract: (a,b) => a-b,
    devide: (a,b) => a/b,
}

const capitalize = (str) => {
    str =str.split('');
    str[0] = str[0].toUpperCase();
    return str.join('');
}
module.exports = {
    stringLength,
    reverseString,
    calculator,
    capitalize
}
const {stringLength, reverseString, calculator , capitalize} = require('./index.js');

describe('test case for stringLength function', () => {
    test('should return string length', () => { 
        const string = 'hello'
        expect(stringLength(string)).toBe(string.length)
     })
});

describe('test case for reverseString function.', () => { 
    test('should return reversed string', () => { 
        const str = 'hello';
        expect(reverseString(str)).toBe('olleh');
     })
 });
describe('test case for calculator add function.', () => { 
    test('should return sum of two number', () => { 
        const num1=3;
        const num2=2;
        expect(calculator.add(num1,num2)).toBe(5)
     })
 });

describe('test case for calculator multiply function.', () => { 
    test('should return multiplication of two number', () => { 
        const num1=3;
        const num2=2;
        expect(calculator.multiply(num1,num2)).toBe(6)
     })
 });

describe('test case for calculator devide function.', () => { 
    test('should return devision of two number', () => { 
        const num1=3;
        const num2=2;
        expect(calculator.devide(num1,num2)).toBe(3/2)
     })
 });

describe('test case for capitalize function.', () => { 
    test('should return first letter capitalized.', () => { 
        const str = 'test';
        expect(capitalize(str)).toBe('Test')
     })
 });
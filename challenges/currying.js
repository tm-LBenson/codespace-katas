'use strict';
// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

export default function currySum(n) {
    let numbers = [];

    function sum(...args) {
        numbers = numbers.concat(args + n);
        return sum;
    }

    sum.valueOf = function() {
        return numbers.reduce((total, current) => total + current, 0);
    };

    return sum;
}

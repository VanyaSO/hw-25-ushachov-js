'use strict'
//
// Вам нужно написать функцию, которая принимает один параметр.При первом вызове она его запоминает,
// при втором — суммирует переданный
// параметр с тем, что передали первый раз и тд.
// Например: sum(3) = 3; sum(5) = 8; sum(20) = 28
function summation(){
    let a = 0;

    const sumNumber = (number) => {

        a += number;

        return a;
    }

    return sumNumber;
}

const funcSum = summation();

console.log(funcSum(3));
console.log(funcSum(5));
console.log(funcSum(20));

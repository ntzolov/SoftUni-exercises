"use strict";
const pi = 3.14159;
const calcArea = (radius, pi) => {
    const result = Number((Math.pow(radius, 2) * pi).toFixed(2));
    return result;
};
console.log(calcArea(5, pi));

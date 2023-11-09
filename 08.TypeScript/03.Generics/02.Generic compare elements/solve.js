"use strict";
class CompareElements {
    constructor(param) {
        this.result = param;
    }
    compare(param) {
        let result = 0;
        for (let value of this.result) {
            if (value === param) {
                result++;
            }
        }
        return result;
    }
}
let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c.compare('abc'));

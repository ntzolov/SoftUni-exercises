class CompareElements<T> {
  result: Array<T>
  constructor(param: Array<T>) {
    this.result = param
  }

  compare(param: any): number {
    let result = 0
    for (let value of this.result) {
      if (value === param) {
        result++
      }
    }

    return result
  }
}

let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);

console.log(c.compare('abc'));


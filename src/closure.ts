class Counter {
  c: number

  constructor(initialCount: number) {
    this.c = initialCount
  }

  increment(): number {
    this.c++
    return this.c
  }
}

const counter = new Counter(3)
console.log(counter.increment(), counter.increment(), counter.increment()) // 4, 5, 6

// クロージャ
// 親関数スコープの変数を参照する関数のこと(increment)
const counterMaker = (initialCount: number): (() => number) => {
  let c = initialCount
  const increment = (): number => {
    c++
    return c
  }
  return increment
}
const count = counterMaker(3)
console.log(count(), count(), count()) // 4, 5, 6

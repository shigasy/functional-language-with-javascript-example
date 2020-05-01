function* rangeGenerator(
  end: number,
  start = 0
): Generator<number, void, unknown> {
  let n = 0

  for (let i = start; i < end; i++) {
    n += 1
    yield n
  }
}

const gen = rangeGenerator(3)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

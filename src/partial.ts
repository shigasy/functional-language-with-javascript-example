const multiPartial = (n: number) => (m: number): number => n * m
const triple = multiPartial(3)
console.log(triple(2))

// 高階関数とは、関数を引数として取る関数や、関数を返り値として取る関数のこと
// 第一引数の数を足して、コールバック関数を実行する高階関数

const hof = (
  ex: number,
  fc: (n: number) => number
): ((n: number) => number) => {
  return (n: number): number => fc(ex + n)
}

const plugsOneDouble = hof(1, (value) => value * 2)
console.log(plugsOneDouble(4)) // 10

// -------------------------------------- //
// 第1引数の数を掛けて、コールバック関数を実行する高階関数
const hof2 = (ex: number, fc: (n: number) => number) => {
  return (n2: number): number => fc(ex * n2)
}

const mulTwoDouble1 = hof2(2, (n) => n * 2)

console.log(mulTwoDouble1(4)) // 16

// -------------------------------------- //
// カリー化
const curryHoc = (ex: number) => {
  return (fc: (n: number) => number) => {
    return (n2: number): number => fc(ex * n2)
  }
}
const mulTwoDouble = curryHoc(2)((n) => n * 2)
console.log(mulTwoDouble(4)) // 16

// -------------------------------------- //
// ワンライナー
const hof4 = (ex: number) => (fc: (n: number) => number) => (
  n2: number
): number => fc(ex * n2)

// 部分適用
const mulThree = hof4(3)
const mulThreeTriple = mulThree((n) => n * 3)
console.log(mulThreeTriple(3)) // 27

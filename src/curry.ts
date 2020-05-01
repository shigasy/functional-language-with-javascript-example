// 複数の引数を取る関数を、ひとつだけ引数を取る関数にネストさせること

const multi = (n: number, m: number): number => n * m

console.log(multi(2, 3)) // 6

const multi2 = (n: number) => {
  return (m: number): number => n * m
}

console.log(multi2(2)(3)) // 6

const multi3 = (n: number) => (m: number): number => n * m
console.log(multi3(2)(3)) // 6

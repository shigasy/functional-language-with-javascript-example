// mapなどは、関数を引数として受け取る高階関数

const arr = [1, 2, 3]
const double = (n: number): number => n * 2

const showConsoleLog = <T>(value: T): void => console.log(value)
showConsoleLog(arr.map(double))

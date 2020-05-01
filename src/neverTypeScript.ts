const greet = (friend: 'serval' | 'caracal' | 'cheetah') => {
  switch (friend) {
    case 'serval':
      return 'Hello, serval'
    case 'caracal':
      return 'Hello caracal'
    case 'cheetah':
      return 'Hello chetah'
    default: {
      const check: never = friend // neverは何も代入出来ないため、switchの漏れを防ぐことが出来る
      return check
      // {}で囲っている理由は、スコープ。switchの中で変数が見えてしまうから
    }
  }
}
console.log(greet('serval'))

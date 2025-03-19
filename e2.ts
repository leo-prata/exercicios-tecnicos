function concatena(a: string, b: string) {
  return a + b;
}

function manipulaStr(funcao: Function, strA: string, strB: string) {
  return funcao(strA, strB);
}

console.log(manipulaStr(concatena, "Hello", "World")); 
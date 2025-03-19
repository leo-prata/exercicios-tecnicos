function returnBigger(strA: string, strB: string): string {
  if(strA.length > strB.length) {
    return strA;
  } else if (strA.length < strB.length) {
    return strB;
  } else {
    return "Mesmo tamanho";
  }
}

console.log(returnBigger("hello", "worlddddd")); 
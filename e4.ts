const stringFornecida = "teste 1 de 2 string 3";

function removeNumerosDaString(frase: string): string {
  return frase.replace(/[0-9]/g, '[removido]');
}

console.log(removeNumerosDaString(stringFornecida)); 
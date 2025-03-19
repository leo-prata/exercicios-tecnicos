const dictionary: Record<string, number> = { 'a': 4, 'e': 3, 'i': 1, 's': 5 };

function substituirNumerosPorLetras(frase: string): string {
  let resultado = frase;

  for (const [letra, numero] of Object.entries(dictionary)) {
    const regex = new RegExp(numero.toString(), 'g'); 
    resultado = resultado.replace(regex, letra); 
  }

  return resultado;
}

const frase = "T35t3 d3 35t4g1o";
const fraseConvertida = substituirNumerosPorLetras(frase);

console.log(fraseConvertida); 

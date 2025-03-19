const arrayDeObjetos = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42}, {id: 2, nome: 'daniel',
    sobrenome: 'gonçalves', idade: 21}, {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28}, 
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}]

for(let i = 0; i < arrayDeObjetos.length; i++){
    let nome = arrayDeObjetos[i].nome;
    let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);

    console.log(`Olá, ${nomeFormatado} ${arrayDeObjetos[i].sobrenome}!`);
}
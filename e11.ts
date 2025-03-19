const arrayDeObjetos = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42}, {id: 2, nome: 'daniel',
    sobrenome: 'gonçalves', idade: 21}, {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28}, 
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}]


for (let i = 0; i < arrayDeObjetos.length; i++) {
    for (let j = 0; j < arrayDeObjetos.length; j++) {
        if (arrayDeObjetos[i].idade < arrayDeObjetos[j].idade ||(arrayDeObjetos[i].idade === arrayDeObjetos[j].idade && arrayDeObjetos[i].id < arrayDeObjetos[j].id)) {
            let temp = arrayDeObjetos[i];
            arrayDeObjetos[i] = arrayDeObjetos[j];
            arrayDeObjetos[j] = temp;
        }
    }
}

console.log(arrayDeObjetos);
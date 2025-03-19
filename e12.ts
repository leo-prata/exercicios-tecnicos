interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: string;
    cargo: string;
    documento?: string;
}

const pessoa: Pessoa = {
    nome: "Dev",
    sobrenome:"smart",
    idade:"26",
    cargo:"analista de sistemas",
    documento:"123.345.678-90"
}

function deletaCampoDocumento(objeto: Pessoa): Omit<Pessoa, 'documento'> {
    const copia = { ...objeto };
    delete copia.documento;
    return copia;
}

const pessoaSemDocumento = deletaCampoDocumento(pessoa);
console.log(pessoaSemDocumento);
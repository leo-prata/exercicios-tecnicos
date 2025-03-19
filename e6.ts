async function buscarCep(cep: string): Promise<void> {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const data = await response.json();

        if (data.erro) {
            console.log("CEP não encontrado.");
        } else {
            console.log("Dados do endereço:", `ENDEREÇO: ${data.logradouro}, CIDADE: ${data.localidade}, ESTADO: ${data.uf}, NUMERO: ${data.ibge}`);
        }
    } catch (error) {
        console.error("Erro ao buscar CEP:", error);
    }
}

const meuCEP = "36050010"; 
buscarCep(meuCEP);

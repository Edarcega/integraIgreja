export type Membro = {
    "id": string;
    "nome": string;
    "email": string;
    "cpf": string;
    "identidade": string;
    "sexo": string;
    "dataDeNascimento": "1986-12-18T00:00:00.000+00:00";
    "nascionalidade": string;
    "endereco": {
        "cep": string;
        "logradouro": string;
        "complemento": string;
        "bairro": string;
        "localidade": string;
        "uf": string;
        "ibge": string;
        "gia": string;
        "ddd": string;
        "siafi": string;
    },
    "numero": string;
    "complemento": string;
    "nomeDoPai": string;
    "nomeDaMae": string;
    "profissao": string;
    "estadoCivil": string;
    "conjuge": string;
    "dataDoCasamento": string;
    "possuiFilhos": string;
    "portadorDeNecessidadesEspeciais": string;
    "detalhamentoPne": string;
    "filhos": [
        {
            "id": string;
            "nome": string;
            "cpf": string;
            "identidade": string;
            "sexo": string;
            "dataDeNascimento": string;
            "nascionalidade": string;
            "endereco": string;
            "numero": string;
            "pai": {
                "idMembro": string;
                "nome": string;
            },
            "mae": {
                "idMembro": string;
                "nome": string;
            },
            "portadorDeNecessidadesEspeciais": string;
            "detalhamentoPne": string;
        }
    ];
    "dataCadastro": "2023-05-14T18:21:12.189+00:00";
    "dataDaInscricao": "2023-05-14T18:21:12.189+00:00";
    "batizado": string;
    "igrejaAnterior": string;
    "igreja": {
        "id": string;
        "nome": string;
    },
    "tipoMembro": string;
    "funcoes": [
        {
            "id": string;
            "descricao": string;
            "tipoFuncao": string;
            "igreja": {
                "id": string;
                "nome": string;
            }
        }
    ],
    "usuario": null

}
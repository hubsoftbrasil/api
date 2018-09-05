Financeiro dos Clientes
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/financeiro

**GET**

No método GET, será possível consultar as faturas em aberto/liquidadas dos clientes e obter o retorno no formato JSON como resposta. Os segintes parâmetros podem/devem ser utilizados:

:busca: (OBRIGATÓRIO) Tipo de busca que deseja fazer no cliente
:termo_busca: (OBRIGATÓRIO) Termo utilizado para fazer a busca
:limit: Limite de resultados
:apenas_pendente: Informa de deseja trazer apenas as faturas pendentes
:order_by: Campo que será utilizado para ordenação
:order_type: Tipo da Ordenação
:data_inicio: Data de Início (Utiliza a data de vencimento como base)
:data_fim: Data de Fim (Utiliza a data de vencimento como base)

Os atributos podem conter os seguintes valores:

:busca: (OBRIGATÓRIO) cpf_cnpj, codigo_cliente, id_cliente_servico
:termo_busca: (OBRIGATÓRIO) Campo livre
:limit: Valor mínimo 1, Valor máximo 50. Valor Default: 20 (Ao não preencher)
:apenas_pendente: sim,nao. Valor default: sim (Ao não preencher)
:order_by: data_vencimento,valor. Default: data_vencimento (Ao não preencher)
:order_type: asc,desc. Default: asc (Ao não preencher)
:data_inicio: Campo no formato DateTime (YYYY-MM-DD)
:data_fim: Campo no formato DateTime (YYYY-MM-DD)

Exemplo de requisição GET na rota do cliente::

curl -X GET --header "Accept:application/json" https://endereco_servidor/api/v1/integracao/cliente/financeiro?busca=codigo_cliente&termo_busca=1099&limit=2 -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"

Retorno da requisição GET::

{
    "status": "suscess",
    "msg": "Dados consultados com sucesso",
    "faturas": [
        {
            "id_fatura": 36398,
            "nosso_numero": "1",
            "nosso_numero_dv": null,
            "linha_digitavel": null,
            "tipo_cobranca": "debito_conta_corrente",
            "valor": 132.5,
            "data_vencimento": "10/10/2017",
            "data_pagamento": "09/07/2018",
            "detalhamento": {
                "descricao": "(+) Taxa de Instalação (1/12) | R$ 12.50",
                "valor": 12.5
            }
        },
        {
            "id_fatura": 43625,
            "nosso_numero": "4",
            "nosso_numero_dv": null,
            "linha_digitavel": null,
            "tipo_cobranca": "debito_conta_corrente",
            "valor": 12.5,
            "data_vencimento": "10/06/2018",
            "data_pagamento": null,
            "detalhamento": {
                "descricao": "(+) 5MB-WIRELESS (10/05/2018) até (09/06/2018)  | R$ 0.00",
                "valor": 0
            }
        },
        {
            "id_fatura": 42338,
            "nosso_numero": "2",
            "nosso_numero_dv": null,
            "linha_digitavel": null,
            "tipo_cobranca": "debito_conta_corrente",
            "valor": 10,
            "data_vencimento": "01/07/2018",
            "data_pagamento": null,
            "detalhamento": {
                "descricao": "Cobrança adicional - teste",
                "valor": 10
            }
        },
        {
            "id_fatura": 44612,
            "nosso_numero": "274764",
            "nosso_numero_dv": "0274764-0",
            "linha_digitavel": "75691.31662 01006.726101 27476.400018 2 76380000001023",
            "tipo_cobranca": "boleto_bancario",
            "valor": 10,
            "data_vencimento": "31/08/2018",
            "data_pagamento": null,
            "detalhamento": {
                "descricao": "Cobrança SCM",
                "valor": 10
            }
        }
    ]
}

.. toctree::
    :caption: Veja os outros métodos disponíveis da API de clientes

    atendimento
    consulta
    financeiro
    ordem_servico
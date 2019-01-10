Financeiro
============

**Necessário**

Para fazer requisições nos dados de financeiro dos clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

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
	            "link": null,
	            "tipo_cobranca": "debito_conta_corrente",
	            "valor": 132.5,
	            "data_vencimento": "10/10/2017",
	            "data_pagamento": "09/07/2018",
	            "detalhamento": {
	                "descricao": "(+) Taxa de Instalação (1/12) | R$ 12.50",
	                "valor": 12.5
	            },
	            "cliente": {
	                "codigo_cliente": 1163,
	                "nome_razaosocial": "JOAQUIM JOSÉ DA SILVA",
	                "cpf_cnpj": "09141806654"
	            }
	        },
	        {
	            "id_fatura": 43647,
	            "nosso_numero": "274551",
	            "nosso_numero_dv": "0274551-0",
	            "linha_digitavel": "75691.31662 01006.726101 27455.100019 6 75810000001000",
	            "link": "http://endereco_do_servidor/pdf/fatura/TXpZek9UZz0=",
	            "tipo_cobranca": "boleto_bancario",
	            "valor": 10,
	            "data_vencimento": "10/07/2018",
	            "data_pagamento": "20/08/2018",
	            "detalhamento": {
	                "descricao": "Cobrança adicional - teste",
	                "valor": 10
	            },
	            "cliente": {
	                "codigo_cliente": 1163,
	                "nome_razaosocial": "JOAQUIM JOSÉ DA SILVA",
	                "cpf_cnpj": "09141806654"
	            }
	        },
	        {
	            "id_fatura": 44654,
	            "nosso_numero": "274805",
	            "nosso_numero_dv": "0274805-7",
	            "linha_digitavel": "75691.31662 01006.726101 27480.570012 1 77040000004990",
	            "link": "http://endereco_do_servidor/pdf/fatura/TkRRMk5UTT0=",
	            "tipo_cobranca": "boleto_bancario",
	            "valor": 49.9,
	            "data_vencimento": "10/11/2018",
	            "data_pagamento": null,
	            "detalhamento": {
	                "descricao": "Serviço de Comunicação e Multimídia - 1_5MB (10/11/2018 até 10/12/2018)",
	                "valor": 24.95
	            },
	            "cliente": {
	                "codigo_cliente": 1163,
	                "nome_razaosocial": "JOAQUIM JOSÉ DA SILVA",
	                "cpf_cnpj": "09141806654"
	            }
	        }
	    ]
	}
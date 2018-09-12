Clientes > Atendimento
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/financeiro

**GET**

No método GET, será possível consultar os atendimentos em aberto/fechados dos clientes e obter o retorno no formato JSON como resposta. Os segintes parâmetros podem/devem ser utilizados:

:busca: (OBRIGATÓRIO) Tipo de busca que deseja fazer no cliente
:termo_busca: (OBRIGATÓRIO) Termo utilizado para fazer a busca
:limit: Limite de resultados
:apenas_pendente: Informa de deseja trazer apenas as faturas pendentes
:order_by: Campo que será utilizado para ordenação
:order_type: Tipo da Ordenação
:data_inicio: Data de Início (Utiliza a data de vencimento como base)
:data_fim: Data de Fim (Utiliza a data de vencimento como base)

Os atributos podem conter os seguintes valores:

:busca: (OBRIGATÓRIO) codigo_cliente, cpf_cnpj, id_cliente_servico, protocolo
:termo_busca: (OBRIGATÓRIO) Campo livre
:limit: Valor mínimo 1, Valor máximo 50. Valor Default: 20 (Ao não preencher)
:apenas_pendente: sim,nao. Valor default: sim (Ao não preencher)
:order_by: data_cadastro,data_fechamento. Default: data_cadastro (Ao não preencher)
:order_type: asc,desc. Default: asc (Ao não preencher)
:data_inicio: Campo no formato DateTime (YYYY-MM-DD)
:data_fim: Campo no formato DateTime (YYYY-MM-DD)

Exemplo de requisição GET na rota do cliente::

	curl -X GET --header "Accept:application/json" https://endereco_servidor/api/v1/integracao/cliente/atendimento?busca=codigo_cliente&termo_busca=1099&limit=2 -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"

Retorno da requisição GET::

	{
	    "status": "suscess",
	    "msg": "Dados consultados com sucesso",
	    "atendimentos": [
	        {
	            "id_atendimento": 14,
	            "protocolo": "201802141023283",
	            "tipo_atendimento": "TÉCNICO",
	            "usuario_abertura": "Master",
	            "usuario_responsavel": "Camozzato",
	            "usuario_fechamento": null,
	            "data_cadastro": "14/02/2018",
	            "data_fechamento": null,
	            "setor_responsavel": null,
	            "status_fechamento": null,
	            "motivo_fechamento": null,
	            "status": "Pendente",
	            "cliente": {
	                "codigo_cliente": 1175,
	                "nome_razaosocial": "ANTÔNIO JOSÉ SOUSA",
	                "cpf_cnpj": "82313458253"
	            }
	        },
	        {
	            "id_atendimento": 19,
	            "protocolo": "201803121414088",
	            "tipo_atendimento": "TÉCNICO",
	            "usuario_abertura": "Master",
	            "usuario_responsavel": "Master",
	            "usuario_fechamento": null,
	            "data_cadastro": "12/03/2018",
	            "data_fechamento": null,
	            "setor_responsavel": null,
	            "status_fechamento": null,
	            "motivo_fechamento": null,
	            "status": "Pendente",
	            "cliente": {
	                "codigo_cliente": 1175,
	                "nome_razaosocial": "ANTÔNIO JOSÉ SOUSA",
	                "cpf_cnpj": "82313458253"
	            }
	        },
	        {
	            "id_atendimento": 20,
	            "protocolo": "201803130936061",
	            "tipo_atendimento": "TÉCNICO",
	            "usuario_abertura": "Master",
	            "usuario_responsavel": "Master",
	            "usuario_fechamento": null,
	            "data_cadastro": "13/03/2018",
	            "data_fechamento": null,
	            "setor_responsavel": null,
	            "status_fechamento": null,
	            "motivo_fechamento": null,
	            "status": "Pendente",
	            "cliente": {
	                "codigo_cliente": 1175,
	                "nome_razaosocial": "ANTÔNIO JOSÉ SOUSA",
	                "cpf_cnpj": "82313458253"
	            }
	        },
	        {
	            "id_atendimento": 21,
	            "protocolo": "201803131015475",
	            "tipo_atendimento": "TÉCNICO",
	            "usuario_abertura": "Master",
	            "usuario_responsavel": "Master",
	            "usuario_fechamento": null,
	            "data_cadastro": "13/03/2018",
	            "data_fechamento": null,
	            "setor_responsavel": null,
	            "status_fechamento": null,
	            "motivo_fechamento": null,
	            "status": "Pendente",
	            "cliente": {
	                "codigo_cliente": 1175,
	                "nome_razaosocial": "ANTÔNIO JOSÉ SOUSA",
	                "cpf_cnpj": "82313458253"
	            }
	        }
	    ]
	}
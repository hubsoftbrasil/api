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
	            "id_atendimento": 110,
	            "protocolo": "201806191505251",
	            "descricao_abertura": "VERIFICAR CONEXÃO",
	            "descricao_fechamento": null,
	            "tipo_atendimento": "TÉCNICO - QUEDAS DE CONEXÃO",
	            "usuario_abertura": "Bianca Couto",
	            "usuario_responsavel": "Bianca Couto",
	            "usuario_fechamento": null,
	            "data_cadastro": "19/06/2018",
	            "data_fechamento": null,
	            "setor_responsavel": null,
	            "status_fechamento": null,
	            "motivo_fechamento": null,
	            "status": "Pendente",
	            "cliente": {
	                "codigo_cliente": 1204,
	                "nome_razaosocial": "BIANCA COUTO",
	                "cpf_cnpj": "86214941081"
	            },
	            "ordens_servico": [
	                {
	                    "id_ordem_servico": 131,
	                    "numero_ordem_servico": "125",
	                    "data_cadastro": "19/06/2018 15:05:25",
	                    "tipo": "SUPORTE",
	                    "data_inicio_programado": "19/06/2018 14:02:00",
	                    "data_termino_programado": "19/06/2018 15:02:00",
	                    "data_inicio_executado": "19/06/2018 14:02:00",
	                    "data_termino_executado": "19/06/2018 15:02:00",
	                    "descricao_abertura": "VERIFICAR CONEXÃO",
	                    "descricao_servico": "VERIFICAR CONEXÃO",
	                    "descricao_fechamento": "asdfasdfadsf",
	                    "usuario_abertura": "Bianca Couto",
	                    "usuario_fechamento": "Bianca Couto",
	                    "status": "finalizado",
	                    "status_fechamento": "concluido",
	                    "cliente": {
	                        "codigo_cliente": 1204,
	                        "nome_razaosocial": "BIANCA COUTO",
	                        "cpf_cnpj": "86214941081"
	                    },
	                    "servico": {
	                        "numero_plano": 0,
	                        "nome": "5MB-WIRELLES-TESTE",
	                        "valor": 199.9,
	                        "status": "Cancelado",
	                        "status_prefixo": "cancelado"
	                    }
	                }
	            ]
	        },
	        {
	            "id_atendimento": 285,
	            "protocolo": "201811061724214",
	            "descricao_abertura": "Abertura de atendimento através da API | ATENDIMENTO ABERTO VIA CENTRAL DO ASSINANTE",
	            "descricao_fechamento": null,
	            "tipo_atendimento": "SAC",
	            "usuario_abertura": "Master",
	            "usuario_responsavel": "Master",
	            "usuario_fechamento": null,
	            "data_cadastro": "06/11/2018",
	            "data_fechamento": null,
	            "setor_responsavel": null,
	            "status_fechamento": null,
	            "motivo_fechamento": null,
	            "status": "Aguardando Análise",
	            "cliente": {
	                "codigo_cliente": 1204,
	                "nome_razaosocial": "BIANCA COUTO",
	                "cpf_cnpj": "86214941081"
	            },
	            "ordens_servico": []
	        },
	        {
	            "id_atendimento": 300,
	            "protocolo": "201811161058216",
	            "descricao_abertura": "Estou sem acesso a internet desde segunda-feira. | ATENDIMENTO ABERTO VIA API",
	            "descricao_fechamento": null,
	            "tipo_atendimento": "SAC",
	            "usuario_abertura": "IP Telecom",
	            "usuario_responsavel": "IP Telecom",
	            "usuario_fechamento": null,
	            "data_cadastro": "16/11/2018",
	            "data_fechamento": null,
	            "setor_responsavel": null,
	            "status_fechamento": null,
	            "motivo_fechamento": null,
	            "status": "Aguardando Análise",
	            "cliente": {
	                "codigo_cliente": 1204,
	                "nome_razaosocial": "BIANCA COUTO",
	                "cpf_cnpj": "86214941081"
	            },
	            "ordens_servico": [
	                {
	                    "id_ordem_servico": 340,
	                    "numero_ordem_servico": "320",
	                    "data_cadastro": "16/11/2018 10:58:21",
	                    "tipo": "ABERTURA VIA API",
	                    "data_inicio_programado": "16/11/2018 11:58:21",
	                    "data_termino_programado": "16/11/2018 12:58:21",
	                    "data_inicio_executado": null,
	                    "data_termino_executado": null,
	                    "descricao_abertura": "Estou sem acesso a internet desde segunda-feira. | ATENDIMENTO ABERTO VIA API",
	                    "descricao_servico": "Estou sem acesso a internet desde segunda-feira. | ATENDIMENTO ABERTO VIA API",
	                    "descricao_fechamento": null,
	                    "usuario_abertura": "IP Telecom",
	                    "usuario_fechamento": null,
	                    "status": "aguardando_agendamento",
	                    "status_fechamento": null,
	                    "cliente": {
	                        "codigo_cliente": 1204,
	                        "nome_razaosocial": "BIANCA COUTO",
	                        "cpf_cnpj": "86214941081"
	                    },
	                    "servico": {
	                        "numero_plano": 9,
	                        "nome": "NEXT-NV_1MBPS",
	                        "valor": 69.9,
	                        "status": "Serviço Habilitado",
	                        "status_prefixo": "servico_habilitado"
	                    }
	                }
	            ]
	        }
	    ]
	}
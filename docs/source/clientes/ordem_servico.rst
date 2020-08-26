Ordem de Serviço
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente/ordem_servico

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/ordem_servico

**GET**

No método GET, será possível consultar as ordens de serviço de um determinado cliente e obter o retorno no formato JSON como resposta. Os segintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  busca
      -  Tipo de busca que deseja fazer no cliente
      -  Sim

   *  -  termo_busca
      -  Termo utilizado para fazer a busca (Campo Livre)
      -  Não

   *  -  limit
      -  Limite de resultados
      -  Não

   *  -  status
      -  Informa o status que deseja trazer como retorno
      -  Não

   *  -  order_by
      -  Campo que será utilizado para ordenação
      -  Não

   *  -  order_type
      -  Tipo da Ordenação
      -  Não

   *  -  data_inicio
      -  Data de Início dos resultados
      -  Não

   *  -  data_fim
      -  Data de Fim dos resultados
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  busca
      -  codigo_cliente, cpf_cnpj, id_cliente_servico, numero_ordem_servico
      -  Nenhum

   *  -  termo_busca
      -  Campo livre
      -  Nenhum

   *  -  limit
      -  Valor mínimo 1, Valor máximo 50.
      -  20

   *  -  status
      -  pendente,aguardando_agendamento,finalizado
      -  Todos

   *  -  order_by
      -  data_cadastro,data_inicio_programado
      -  data_cadastro

   *  -  order_type
      -  asc,desc
      -  desc

   *  -  data_inicio
      -  Campo no formato DateTime (YYYY-MM-DD). Será aplicado o filtro em cima da data de cadastro
      -  Não

   *  -  data_fim
      -  Campo no formato DateTime (YYYY-MM-DD). Será aplicado o filtro em cima da data de cadastro
      -  Não

Exemplo de requisição GET na rota do cliente::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/ordem_servico?busca=codigo_cliente&termo_busca=1188&limit=2 -k

Retorno da requisição GET::

	{
	    "status": "suscess",
	    "msg": "Dados consultados com sucesso",
	    "ordens_servico": [
	        {
	            "id_ordem_servico": 78,
	            "numero_ordem_servico": "74",
	            "data_cadastro": "12/04/2018 15:26:28",
	            "tipo": "SUPORTE",
	            "data_inicio_programado": "02/05/2018 10:00:00",
	            "data_termino_programado": "16/04/2018 12:00:00",
	            "data_inicio_executado": null,
	            "data_termino_executado": null,
	            "descricao_abertura": "cliente reclama de conexão lenta",
	            "descricao_servico": "CLIENTE TESTE TESTE",
	            "descricao_fechamento": null,
	            "usuario_abertura": "Master",
	            "usuario_fechamento": null,
	            "status": "aguardando_agendamento",
	            "status_fechamento": null,
	            "atendimento": {
	                "protocolo": "201804121526287",
	                "id_atendimento": 60,
	                "tipo_atendimento": "TÉCNICO - CONEXÃO LENTA",
	                "usuario_abertura": "Master",
	                "usuario_responsavel": "Guilherme Couto",
	                "usuario_fechamento": null,
	                "data_cadastro": "12/04/2018",
	                "data_fechamento": null,
	                "setor_responsavel": null,
	                "status_fechamento": null,
	                "motivo_fechamento": null
	            },
	            "cliente": {
	                "codigo_cliente": 1188,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO - TESTE",
	                "cpf_cnpj": "26788493090"
	            },
	            "servico": {
	                "numero_plano": 0,
	                "nome": "100GB-DE-TESTE-",
	                "valor": 100,
	                "status": "Serviço Habilitado",
	                "status_prefixo": "servico_habilitado"
	            }
	        },
	        {
	            "id_ordem_servico": 102,
	            "numero_ordem_servico": "96",
	            "data_cadastro": "19/05/2018 10:17:03",
	            "tipo": "INSTALAÇÃO",
	            "data_inicio_programado": "19/05/2018 08:00:00",
	            "data_termino_programado": "19/05/2018 09:00:00",
	            "data_inicio_executado": "19/05/2018 11:54:59",
	            "data_termino_executado": "19/05/2018 11:56:50",
	            "descricao_abertura": "TESTE TESTE TESTE",
	            "descricao_servico": "teste teste teste",
	            "descricao_fechamento": "RT Este de fechamento",
	            "usuario_abertura": "Master",
	            "usuario_fechamento": "Master",
	            "status": "finalizado",
	            "status_fechamento": "concluido",
	            "atendimento": {
	                "protocolo": "201805191017039",
	                "id_atendimento": 79,
	                "tipo_atendimento": "TÉCNICO - CONEXÃO LENTA",
	                "usuario_abertura": "Master",
	                "usuario_responsavel": "Guilherme Couto",
	                "usuario_fechamento": null,
	                "data_cadastro": "19/05/2018",
	                "data_fechamento": null,
	                "setor_responsavel": null,
	                "status_fechamento": null,
	                "motivo_fechamento": null
	            },
	            "cliente": {
	                "codigo_cliente": 1188,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO - TESTE",
	                "cpf_cnpj": "26788493090"
	            },
	            "servico": {
	                "numero_plano": 6,
	                "nome": "100GB-DE-TESTE-",
	                "valor": 100,
	                "status": "Serviço Habilitado",
	                "status_prefixo": "servico_habilitado"
	            }
	        },
	        {
	            "id_ordem_servico": 208,
	            "numero_ordem_servico": "191",
	            "data_cadastro": "14/08/2018 16:22:25",
	            "tipo": "INSTALAÇÃO",
	            "data_inicio_programado": "14/08/2018 15:00:00",
	            "data_termino_programado": "14/08/2018 16:00:00",
	            "data_inicio_executado": null,
	            "data_termino_executado": null,
	            "descricao_abertura": "inatalacção",
	            "descricao_servico": "inatalacção",
	            "descricao_fechamento": null,
	            "usuario_abertura": "Suporte",
	            "usuario_fechamento": null,
	            "status": "aguardando_agendamento",
	            "status_fechamento": null,
	            "atendimento": null,
	            "cliente": {
	                "codigo_cliente": 1188,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO - TESTE",
	                "cpf_cnpj": "26788493090"
	            },
	            "servico": {
	                "numero_plano": 7,
	                "nome": "5MB-WIRELESS",
	                "valor": 300,
	                "status": "Aguardando Migração",
	                "status_prefixo": "aguardando_migracao"
	            }
	        },
	        {
	            "id_ordem_servico": 209,
	            "numero_ordem_servico": "192",
	            "data_cadastro": "14/08/2018 16:24:12",
	            "tipo": "INSTALAÇÃO",
	            "data_inicio_programado": "14/08/2018 15:00:00",
	            "data_termino_programado": "14/08/2018 16:00:00",
	            "data_inicio_executado": null,
	            "data_termino_executado": null,
	            "descricao_abertura": "dsgsdgsdgsd",
	            "descricao_servico": "dsgsdgsdgsd",
	            "descricao_fechamento": null,
	            "usuario_abertura": "Suporte",
	            "usuario_fechamento": null,
	            "status": "aguardando_agendamento",
	            "status_fechamento": null,
	            "atendimento": null,
	            "cliente": {
	                "codigo_cliente": 1188,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO - TESTE",
	                "cpf_cnpj": "26788493090"
	            },
	            "servico": {
	                "numero_plano": 8,
	                "nome": "5MB-WIRELESS",
	                "valor": 300,
	                "status": "Aguardando Migração",
	                "status_prefixo": "aguardando_migracao"
	            }
	        }
	    ]
	}

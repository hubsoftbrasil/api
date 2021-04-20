Novo Atendimento
============

**Necessário**

Para fazer requisições nos dados de atendimento, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de atendimento, devem ser feitos na rota::

	/api/v1/integracao/atendimento

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/atendimento

**POST**

No método POST, será possível consultar os atendimentos em aberto/fechados dos clientes e obter o retorno no formato JSON como resposta. Os segintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_cliente_servico
      -  Identificador do serviço do cliente
      -  Sim
      
   *  -  id_tipo_atendimento
      -  Identificador do tipo de atendimento
      -  Não

   *  -  descricao
      -  Descrição detalhada do atendimento
      -  Sim

   *  -  nome
      -  Nome do solicitante
      -  Sim

   *  -  telefone
      -  Telefone do solicitante
      -  Sim

   *  -  email
      -  Email do solicitante
      -  Não

   *  -  abrir_os
      -  Indica se deve abrir Ordem de Serviço ou não
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_cliente_servico
      -  Número Inteiro
      -  Nenhum
      
   *  -  id_tipo_atendimento
      -  Número Inteiro
      -  Nenhum

   *  -  descricao
      -  Campo Livre (Qualquer valor é aceito)
      -  Nenhum

   *  -  nome
      -  Campo Livre (Qualquer valor é aceito)
      -  Nenhum

   *  -  telefone
      -  Telefone no formato (DDNNNNNNNNN).
      -  Nenhum

   *  -  email
      -  Caso enviado deve ser no formato e-mail (EX: user@dominio.com)
      -  Nenhum

   *  -  abrir_os
      -  Caso enviado, deve conter um valor boolean (true | false)
      -  false

Exemplo de requisição POST na rota de crição de novo atendimento::

	curl -X POST 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	--header "Content-Type: application/json"
	https://endereco_servidor/api/v1/integracao/atendimento -d '{"id_cliente_servico":"11000", "descricao":"Abertura de atendimento de teste", "nome":"Nome do Usuário Solicitante", "telefone":"37999112233", "email":"teste@teste.com.br"}' -k


Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
		"id_cliente_servico":"11000", 
		"descricao":"Abertura de atendimento de teste", 
		"nome":"Nome do Usuário Solicitante", 
		"telefone":"37999112233", 
		"email":"teste@teste.com.br",
		"abrir_os":true
	}

Retorno da requisição GET::

	{
	    "status": "success",
	    "msg": "Atendimento aberto com sucesso. Anote o protocolo: 201811161058216. Foi aberto também uma ordem de serviço e encaminhada ao sertor responsável",
	    "atendimento": {
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
	}

.. note::

	OBSERVAÇÃO: O JSON de resposta da requisição acima, contém dados de ordem de serviço, pois na requisição o atributo (abrir_os) foi enviado como true. Sendo assim, o setor técnico do provedor de internet, vai receber essa ordem de serviço para ser executada em campo pelo técnico responsável.

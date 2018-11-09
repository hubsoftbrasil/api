Atendimento > Novo
============

**Necessário**

Para fazer requisições nos dados de atendimento, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de atendimento, devem ser feitos na rota::

	/api/v1/integracao/atendimento

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/atendimento

**POST**

No método POST, será possível consultar os atendimentos em aberto/fechados dos clientes e obter o retorno no formato JSON como resposta. Os segintes parâmetros podem/devem ser utilizados:

:id_cliente_servico: (OBRIGATÓRIO) Identificador do serviço do cliente
:descricao: (OBRIGATÓRIO) Descrição detalhada do atendimento / solicitação do cliente
:nome: (OBRIGATÓRIO) Nome do cliente / usuário solicitando do atendimento
:telefone: (OBRIGATÓRIO) Telefone do cliente solicitante
:email: E-mail do cliente solicitando

Os atributos podem conter os seguintes valores:

:id_cliente_servico: (OBRIGATÓRIO) Campo deverá conter um número inteiro
:descricao: (OBRIGATÓRIO) A descrição pode ser preenchida livremente. 
:nome: (OBRIGATÓRIO) Nome do cliente pode ser preenchido livremente
:telefone: (OBRIGATÓRIO) Telefone deve ser preenchido no formato DDNNNNNNNNN
:email: E-mail do cliente não é obrigatório

Exemplo de requisição POST na rota de crição de novo atendimento::

	curl -X POST --header "Accept:application/json" https://endereco_servidor/api/v1/integracao/atendimento -d '{"id_cliente_servico":"11000", "descricao":"Abertura de atendimento de teste", "nome":"Nome do Usuário Solicitante", "telefone":"37999112233", "email":"teste@teste.com.br"}' -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"


Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
		"id_cliente_servico":"11000", 
		"descricao":"Abertura de atendimento de teste", 
		"nome":"Nome do Usuário Solicitante", 
		"telefone":"37999112233", 
		"email":"teste@teste.com.br"
	}

Retorno da requisição GET::

	{
	    "status": "success",
	    "msg": "Atendimento aberto com sucesso. Anote o protocolo: 201811061730517.",
	    "atendimento": {
	        "id_atendimento": 286,
	        "protocolo": "201811061730517",
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
	        }
	    }
	}
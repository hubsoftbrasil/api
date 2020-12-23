Resetar MAC do Cliente
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/reset_mac_addr

**POST**

No método POST, será possível efetuar o desbloqueio em confiança, pela quantidade de dias desejados.

.. warning::

	IMPORTANTE: O sistema irá validar se o serviço informado possui dados de autenticação. Caso o serviço selecionado não possua, uma mensagem de erro será retornada, impedindo que a solicitação seja executada.

**Atributos da Requisição**

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_cliente_servico
      -  Identificador único do serviço do cliente
      -  Sim

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_cliente_servico
      -  Deve conter um número inteiro maior que 0
      -  Nenhum

Exemplo de requisição POST na rota do desbloqueio em confiança::

	curl -X POST 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	--header "Content-Type: application/json"
	https://endereco_servidor/api/v1/integracao/cliente/reset_mac_addr -d '{"id_cliente_servico":"11000"}' -k

Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
		"id_cliente_servico":"11000"
	}

Retorno da requisição POST::

	{
		"status": "success",
		"msg": ""Endereço MAC resetado com sucesso!"
	}
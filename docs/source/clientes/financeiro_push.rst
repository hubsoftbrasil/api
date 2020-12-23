Financeiro > Envio por Push Notification
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/financeiro/enviar_push

**POST**

No método POST, será possível fazer o disparo da fatura do cliente por push notification. 
.. warning::
        IMPORTANTE: O cliente só receberá o push notification, caso ele possua o aplicativo do cliente instalado e esteja autenticado com o CPF/CNPJ.

**Atributos da Requisição**

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_fatura
      -  Identificador único da fatura do cliente
      -  Sim

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_fatura
      -  Deve conter um número inteiro maior que 0
      -  Nenhum

Exemplo de requisição POST na rota do envio de push notification::

	curl -X POST 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
   --header "Content-Type: application/json"
	https://endereco_servidor/api/v1/integracao/cliente/financeiro/enviar_push -d '{"id_fatura":"11000"}' -k

Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
		"id_fatura":"11000"
	}

Retorno da requisição POST::

	{
	    "status": "success",
	    "msg": "Fatura enviada com sucesso via push notification"
	}

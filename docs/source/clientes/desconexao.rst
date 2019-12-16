Desconexão do Cliente
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/solicitar_desconexao/<id_cliente_servico>

**GET**

No método GET, será possível efetuar a desconexão da conexão do cliente.

.. warning::

	IMPORTANTE: É importante lembrar que a desconexão apenas será realizada se a porta INCOMING estiver habilitado no equipamento de conexão, nas configurações de rede do HubSoft e também é necessário que o servidor RADIUS possua comunicação com o equipamento de conexão (Concentrador) no momento da solicitação.

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

Exemplo de requisição GET na rota do desbloqueio em confiança::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/solicitar_desconexao/11000


Retorno da requisição GET em caso de sucesso::

	{
    	"status": "success",
    	"msg": "A desconexão foi bem sucedida para o login hubsoft!",
    	"login": "hubsoft"
	}

Retorno da requisição GET em caso de erro::

{
    "status": "error",
    "msg": "A desconexão não foi bem sucedida para o login hubsoft!",
    "errors": []
}
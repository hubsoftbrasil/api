Configuração de dados de Autenticação
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/configurar_autenticacao

**POST**

No método POST, será possível efetuar a configuração de alguns parametros de autenticação do serviço.

**Atributos da Requisição**

No método GET, irá consultar os dados dos clientes e retornar um JSON como resposta. Na consulta de Equipamentos é possível obter a lista de Interfaces e os respectivos IDs.

Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_cliente_servico
      -  Identificador único do serviço do cliente
      -  Sim

   *  -  id_interface_conexao
      -  Interface de conexão com a qual o plano deverá ser vinculado
      -  Não

   *  -  phy_addr
      -  MAC/Serial da ONU ou equipamento equivalente do cliente, que forneça acesso em camada 2
      -  Não

   *  -  password
      -  Senha de autenticação do cliente
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_cliente_servico
      -  Deve conter um número inteiro maior que 0
      -  Nenhum

   *  -  id_interface_conexao
      -  Deve conter um número inteiro maior que 0
      -  Nenhum

   *  -  phy_addr
      -  Deve conter uma sequencia de letras e caracteres, sem espaço
      -  Nenhum

   *  -  password
      -  Deve conter no minimo tres caracteres
      -  Nenhum

Exemplo de requisição POST na rota do desbloqueio em confiança::

	curl -X POST 
	--header "Accept:application/json" 
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
   --header "Content-Type: application/json"
	https://endereco_servidor/api/v1/integracao/cliente/configurar_autenticacao -d '{"id_cliente_servico":"11000", "password":"NewPasswd123"}' -k

Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
		"id_cliente_servico":"11000",
		"password":"NewPasswd123",
                "id_interface_conexao":"931"
	}

Retorno da requisição POST::

        {
            "status": "success",
            "msg": "Parametros de autenticacao modificados com sucesso!"
        }

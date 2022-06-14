Autenticação
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/autenticacao

**POST**

No método POST, será possível realizar a autenticação do cliente, com seu usuário e senha. Essa autenticação respeita os mesmos dados que o cliente utiliza para conectar na Central do Assinante WEB ou APP. Os segintes parâmetros podem/devem ser utilizados:   

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  usuario
      -  Usuário de Autenticação da Central
      -  Sim

   *  -  senha
      -  Senha de Autenticação da Central
      -  Sim

Exemplo de requisição POST na rota do cliente::

	curl -X POST 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/autenticacao -d '{"usuario":"12312312344", "senha":"!M1nhAS3nhA&"}' -k

Retorno da requisição POST::

	{
	    "status": "success",
	    "msg": "Usuário autenticado com sucesso",
	    "cliente": {
	        "id_cliente": 23285,
	        "codigo_cliente": 1382,
	        "nome_razaosocial": "GUILHERME DA COSTA COUTO",
	        "nome_fantasia": null,
	        "cpf_cnpj": "09141806654",
	        "data_nascimento": "1994-03-11",
	        "telefone_primario": "37911112222",
	        "telefone_secundario": "3734151100",
	        "telefone_terciario": "11988887777",
	        "email_principal": "naotem@naotem.com.br",
	        "email_secundario": "naotem@naotem.com.br"
	    }
	}
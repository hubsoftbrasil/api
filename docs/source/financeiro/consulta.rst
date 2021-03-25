Consulta
============

**Necessário**

Para fazer requisições nos dados de financeiro, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de financeiro, devem ser feitos na rota::

	/api/v1/integracao/financeiro

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/financeiro

**GET**

No método GET, irá consultar os dados financeiros (contas a receber) e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  busca
      -  Tipo de busca que deseja fazer no cliente
      -  Não

   *  -  termo_busca
      -  Termo utilizado para fazer a busca
      -  Não

   *  -  tipo_data
      -  Tipo de data que será utilizada
      -  Não

   *  -  tipo_resultado
      -  Tipo de resultado que será devolvido na resposta
      -  Não

   *  -  data_inicio
      -  Data de início da filtragem de dados
      -  Não

   *  -  data_fim
      -  Data final da filtragem de dados
      -  Não

   *  -  order_by
      -  Campo que será utilizado para ordenação
      -  Não

   *  -  order_type
      -  Tipo de Ordenação
      -  Não

   *  -  limit
      -  Limite de resultados
      -  Não

   *  -  apenas_quitado
      -  Indica o status desejado das faturas
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1

   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  busca
      -  id_cliente, codigo_cliente, cpf_cnpj, id_cliente_servico
      -  Nenhum

   *  -  termo_busca
      -  Campo livre (Qualquer valor será aceito)
      -  Nenhum

   *  -  tipo_data
      -  data_vencimento, data_pagamento, data_cadastro
      -  data_vencimento

   *  -  tipo_resultado
      -  simplificado, detalhado
      -  simplificado

   *  -  data_inicio
      -  Campo no formato DateTime (YYYY-MM-DD)	
      -  Não

   *  -  data_fim
      -  Campo no formato DateTime (YYYY-MM-DD)	
      -  Não

   *  -  order_by
      -  data_vencimento, data_pagamento, data_cadastro, valor
      -  Não

   *  -  order_type
      -  asc, desc
      -  Não

   *  -  limit
      -  Valor número maior que 0 (zero)
      -  Não

   *  -  apenas_quitado
      -  Indica o status desejado das faturas
      -  Não

Exemplo de requisição GET na rota de cliente::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/financeiro -k

Retorno da requisição GET::

	{
	    "status": "success",
	    "msg": "Dados consultados com sucesso.",
	    "faturas": [
	        {
	            "id_fatura": 62636,
	            "nosso_numero": "1900247",
	            "data_vencimento": "2020-04-05",
	            "data_vencimento_br": "05/04/2020",
	            "data_pagamento": null,
	            "data_pagamento_br": null,
	            "data_cadastro": "2020-01-01 12:52:12",
	            "data_cadastro_br": "01/01/2020",
	            "valor": "119.9",
	            "valor_pago": null,
	            "cliente": {
	                "id_cliente": 11943,
	                "codigo_cliente": 1162,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO",
	                "nome_fantasia": null,
	                "tipo_pessoa": "pf",
	                "cpf_cnpj": "41107296617",
	                "data_nascimento": "1994-03-10",
	                "data_nascimento_br": "10/03/1994",
	                "telefone_primario": "37999091234",
	                "telefone_secundario": "373415100",
	                "telefone_terciario": null,
	                "email_principal": "email@cliente.com.b4",
	                "email_secundario": null,
	                "data_cadastro": "2017-09-26 13:20:33",
	                "data_cadastro_br": "26/09/2017 13:20",
	                "ativo": true
	            }
	        },
	        {
	            "id_fatura": 62634,
	            "nosso_numero": "1900245",
	            "data_vencimento": "2020-04-05",
	            "data_vencimento_br": "05/04/2020",
	            "data_pagamento": null,
	            "data_pagamento_br": null,
	            "data_cadastro": "2020-01-01 12:52:12",
	            "data_cadastro_br": "01/01/2020",
	            "valor": "115.9",
	            "valor_pago": null,
	            "cliente": {
	                "id_cliente": 11943,
	                "codigo_cliente": 1162,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO",
	                "nome_fantasia": null,
	                "tipo_pessoa": "pf",
	                "cpf_cnpj": "41107296617",
	                "data_nascimento": "1994-03-10",
	                "data_nascimento_br": "10/03/1994",
	                "telefone_primario": "37999091234",
	                "telefone_secundario": "373415100",
	                "telefone_terciario": null,
	                "email_principal": "email@cliente.com.b4",
	                "email_secundario": null,
	                "data_cadastro": "2017-09-26 13:20:33",
	                "data_cadastro_br": "26/09/2017 13:20",
	                "ativo": true
	            }
	        },
	        {
	            "id_fatura": 62625,
	            "nosso_numero": "1900242",
	            "data_vencimento": "2020-04-05",
	            "data_vencimento_br": "05/04/2020",
	            "data_pagamento": null,
	            "data_pagamento_br": null,
	            "data_cadastro": "2020-01-01 12:52:12",
	            "data_cadastro_br": "01/01/2020",
	            "valor": "169.9",
	            "valor_pago": null,
	            "cliente": {
	                "id_cliente": 11943,
	                "codigo_cliente": 1162,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO",
	                "nome_fantasia": null,
	                "tipo_pessoa": "pf",
	                "cpf_cnpj": "41107296617",
	                "data_nascimento": "1994-03-10",
	                "data_nascimento_br": "10/03/1994",
	                "telefone_primario": "37999091234",
	                "telefone_secundario": "373415100",
	                "telefone_terciario": null,
	                "email_principal": "email@cliente.com.b4",
	                "email_secundario": null,
	                "data_cadastro": "2017-09-26 13:20:33",
	                "data_cadastro_br": "26/09/2017 13:20",
	                "ativo": true
	            }
	        },
	        {
	            "id_fatura": 62628,
	            "nosso_numero": "212",
	            "data_vencimento": "2020-04-05",
	            "data_vencimento_br": "05/04/2020",
	            "data_pagamento": null,
	            "data_pagamento_br": null,
	            "data_cadastro": "2020-01-01 12:52:12",
	            "data_cadastro_br": "01/01/2020",
	            "valor": "40.3",
	            "valor_pago": null,
	            "cliente": {
	                "id_cliente": 11943,
	                "codigo_cliente": 1162,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO",
	                "nome_fantasia": null,
	                "tipo_pessoa": "pf",
	                "cpf_cnpj": "41107296617",
	                "data_nascimento": "1994-03-10",
	                "data_nascimento_br": "10/03/1994",
	                "telefone_primario": "37999091234",
	                "telefone_secundario": "373415100",
	                "telefone_terciario": null,
	                "email_principal": "email@cliente.com.b4",
	                "email_secundario": null,
	                "data_cadastro": "2017-09-26 13:20:33",
	                "data_cadastro_br": "26/09/2017 13:20",
	                "ativo": true
	            }
	        }
	    ]
	}

No exemplo acima, nenhum parâmetro foi preenchido, sendo assim, o sistema assumiu a data de início como 10 dias anteriores da data atual e a data final como o dia em questão que a requisição está sendo executada. Por exemplo, se essa requisição fosse executada no dia 20/12/2020, então a data de início seria em 10/12/2020 e a data final em 20/12/2020. O sistema só iria traze as faturas que vencem nesse intervalo.

A URL abaixo, está simulando uma consulta, onde o integrador deseja trazer apenas as faturas quitadadas do dia 05/03/2020 ate 10/03/2020, ordenando por data de pagamento de forma decrescente::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/financeiro?data_inicio=2020-03-05&data_fim=2020-03-10&apenas_quitado=sim&tipo_data=data_pagamento&order_by=data_pagamento&order_type=desc

Veja que os atributos foram preenchidos da seguinte forma:

- data_inicio = 2020-03-05 (05/03/2020)
- data_fim = 2020-03-10 (10/03/2020)
- apenas_quitado = sim (Apenas quitado)
- tipo_data = data_pagamento
- order_by = data_pagamento
- order_type = desc (Do maior para o menor)

.. warning::

	IMPORTANTE: Caso o atributo busca e termo_busca não sejam utilizados, a API irá limitar o intervalo entre a data_inicio e data_fim para no máximo 30 dias. Por exemplo, se o integrador requisitar a data de início 2020-01-01, data fim 2020-12-31 e não utilizar um termo de busca, a quantidade de dados retornado pode ter um volume muito grande, portanto, para esse cenário, será limitado em 30 dias de intervalo entre as datas


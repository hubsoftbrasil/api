All (Todos os Clientes)
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação).
OBS: Essa rota irá retornar todos os dados de clientes, caso nenhum parâmetro seja enviado. Utilize com cautela.

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente/all

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/all

**GET**

No método GET, irá consultar os dados dos clientes e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  data_inicio
      -  Data de Cadastro Inicial
      -  Não

   *  -  data_fim
      -  Data de Cadastro Final
      -  Não

   *  -  limit
      -  Limite de resultados
      -  Não

   *  -  order_by
      -  Campo que será utilizado para ordenação
      -  Não

   *  -  order_type
      -  Tipo de Ordenação
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  data_inicio
      -  Valor no formato DateTime (YYYY-MM-DD)
      -  Nenhum

   *  -  data_fim
      -  Valor no formato DateTime (YYYY-MM-DD) Obs: Maior ou igual data_inicio
      -  Nenhum

   *  -  limit
      -  Número Inteiro maior que 0
      -  Nenhum

   *  -  order_by
      -  data_cadastro,data_fechamento
      -  data_cadastro

   *  -  order_type
      -  asc,desc
      -  asc

Exemplo de requisição GET na rota de cliente::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/all -k

Retorno da requisição GET::

	{
	    "status":"success",
	    "msg":"Dados consultados com sucesso",
	    "clientes":[
	        {
	            "id_cliente":11201,
	            "codigo_cliente":421,
	            "nome_razaosocial":"GUILHERME SILVA",
	            "nome_fantasia":null,
	            "tipo_pessoa":"pf",
	            "cpf_cnpj":"10682083681",
	            "telefone_primario":"37988242968",
	            "telefone_secundario":"37988242968",
	            "telefone_terciario":"",
	            "email_principal":"guilherme@silva.com.br",
	            "email_secundario":null,
	            "rg":"MG16999888",
	            "rg_emissao":null,
	            "inscricao_municipal":null,
	            "inscricao_estadual":null,
	            "data_cadastro":"2017-08-05 00:00:00",
	            "data_nascmento":"1969-12-31 04:00:00",
	            "servicos":[
	                {
	                    "id_cliente_servico":11201,
	                    "numero_plano":1,
	                    "nome":"4M",
	                    "valor":119.9,
	                    "status":"Serviço Habilitado",
	                    "status_prefixo":"servico_habilitado",
	                    "tecnologia":"WIRELESS",
	                    "login":"guilhermesilva1068",
	                    "senha":"123",
	                    "ipv4":"10.99.2.203",
	                    "ipv6":null,
	                    "interface":{
	                        "nome":"PON5",
	                        "tipo":"gpon",
	                        "called_sid":null
	                    },
	                    "interface_roteamento":{
	                        "nome":"ether8",
	                        "tipo":"ethernet",
	                        "called_sid":null
	                    },
	                    "equipamento_conexao":{
	                        "nome":"OLT XPTO",
	                        "ipv4":"192.168.2.100",
	                        "ipv6":null
	                    },
	                    "equipamento_roteamento":{
	                        "nome":"CONCENTRADOR XPTO",
	                        "ipv4":"172.17.24.98",
	                        "ipv6":null
	                    },
	                    "endereco_cadastral":{
	                        "completo":"RUA DONA MARIA DAS DORES, 541 - NOSSA SENHORA DAS GRACAS, DIVINóPOLIS/MG - IGREJA",
	                        "logradouro":"RUA",
	                        "endereco":"DONA MARIA DAS DORES",
	                        "numero":"541",
	                        "complemento":"IGREJA",
	                        "bairro":"NOSSA SENHORA DAS GRACAS",
	                        "cep":"35501-048",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Divinópolis",
	                        "coordenadas": {
	                            "latitude": null,
	                            "longitude": null
	                        }
	                    },
	                    "endereco_instalacao":{
	                        "completo":"RUA MINAS GERAIS, 1793 - IPIRANGA, DIVINÓPOLIS/MG",
	                        "logradouro":"RUA",
	                        "endereco":"MINAS GERAIS",
	                        "numero":"1793",
	                        "complemento":"",
	                        "bairro":"IPIRANGA",
	                        "cep":"35502-026",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Divinópolis",
	                        "coordenadas": {
	                            "latitude": -20.086592,
	                            "longitude": -45.290962
	                        }
	                    },
	                    "endereco_fiscal":{
	                        "completo":"RUA GOIAS, 86 - PORTO VELHO, DIVINÓPOLIS/MG - APTO 101",
	                        "logradouro":"RUA",
	                        "endereco":"GOIAS",
	                        "numero":"86",
	                        "complemento":"APTO 101",
	                        "bairro":"PORTO VELHO",
	                        "cep":"35500-000",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Divinópolis",
	                        "coordenadas": {
	                            "latitude": null,
	                            "longitude": null
	                        }
	                    },
	                    "endereco_cobranca":{
	                        "completo":"RUA SEBASTIAO PARDINI, 58 - CENTRO, DIVINÓPOLIS/MG - 202",
	                        "logradouro":"RUA",
	                        "endereco":"SEBASTIAO PARDINI",
	                        "numero":"58",
	                        "complemento":"202",
	                        "bairro":"CENTRO",
	                        "cep":"35500-000",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Divinópolis",
	                        "coordenadas": {
	                            "latitude": null,
	                            "longitude": null
	                        }
	                    }
	                }
	            ]
	        },
	        {
	            "id_cliente":11202,
	            "codigo_cliente":422,
	            "nome_razaosocial":"GUILHERME COSTA",
	            "nome_fantasia":null,
	            "tipo_pessoa":"pf",
	            "cpf_cnpj":"05333614622",
	            "telefone_primario":"37999450812",
	            "telefone_secundario":"37999452812",
	            "telefone_terciario":"",
	            "email_principal":null,
	            "email_secundario":null,
	            "rg":"MG11298180",
	            "rg_emissao":null,
	            "inscricao_municipal":null,
	            "inscricao_estadual":null,
	            "data_cadastro":"2017-04-26 00:00:00",
	            "data_nascmento":"1969-12-31 00:00:00",
	            "servicos":[
	                {
	                    "id_cliente_servico":11302,
	                    "numero_plano":2,
	                    "nome":"24M",
	                    "valor":119.9,
	                    "status":"Serviço Habilitado",
	                    "status_prefixo":"servico_habilitado",
	                    "tecnologia":"FIBRA",
	                    "login":"guilhermesouza0533",
	                    "senha":"123",
	                    "ipv4":"10.99.1.118",
	                    "ipv6":null,
	                    "interface":{
	                        "nome":"PON5",
	                        "tipo":"gpon",
	                        "called_sid":null
	                    },
	                    "interface_roteamento":{
	                        "nome":"ether8",
	                        "tipo":"ethernet",
	                        "called_sid":null
	                    },
	                    "equipamento_conexao":{
	                        "nome":"OLT XPTO",
	                        "ipv4":"192.168.2.100",
	                        "ipv6":null
	                    },
	                    "equipamento_roteamento":{
	                        "nome":"CONCENTRADOR XPTO",
	                        "ipv4":"172.17.24.98",
	                        "ipv6":null
	                    },
	                    "endereco_cadastral":{
	                        "completo":"RUA GERALDO RODRIGUES DA COSTA, 5 - CENTRO, SANTO ANTôNIO DO MONTE/MG",
	                        "logradouro":"RUA",
	                        "endereco":"GERALDO RODRIGUES DA COSTA",
	                        "numero":"5",
	                        "complemento":"",
	                        "bairro":"CENTRO",
	                        "cep":"35560000",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Santo Antônio do Monte",
	                        "coordenadas": {
	                            "latitude": null,
	                            "longitude": null
	                        }
	                    },
	                    "endereco_instalacao":{
	                        "completo":"RUA JOÃO J FERNANDES, 900 - BARRETOS, NOVA SERRANA/MG - AREA RURAL",
	                        "logradouro":"RUA",
	                        "endereco":"JOÃO J FERNANDES",
	                        "numero":"900",
	                        "complemento":"AREA RURAL",
	                        "bairro":"BARRETOS",
	                        "cep":"35519-000",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Nova Serrana",
	                        "coordenadas": {
	                            "latitude": -19.8562717,
	                            "longitude": -45.0105913
	                        }
	                    },
	                    "endereco_fiscal":{
	                        "completo":"RUA RITA DOS SANTOS MESQUITA, 233 - SANTO AGOSTINHO, PERDIGãO/MG",
	                        "logradouro":"RUA",
	                        "endereco":"RITA DOS SANTOS MESQUITA",
	                        "numero":"233",
	                        "complemento":"",
	                        "bairro":"SANTO AGOSTINHO",
	                        "cep":"35545-000",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Perdigão",
	                        "coordenadas": {
	                            "latitude": null,
	                            "longitude": null
	                        }
	                    },
	                    "endereco_cobranca":{
	                        "completo":"RUA DOIS, 221 - BARRETINHOS, NOVA SERRANA/MG - AREA RURAL",
	                        "logradouro":"RUA",
	                        "endereco":"DOIS",
	                        "numero":"221",
	                        "complemento":"AREA RURAL",
	                        "bairro":"BARRETINHOS",
	                        "cep":"35519-000",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Nova Serrana",
	                        "coordenadas": {
	                            "latitude": null,
	                            "longitude": null
	                        }
	                    }
	                }
	            ]
	        }
	    ]
	}

.. warning::

	IMPORTANTE: Por se tratar de uma requisição que poderá trazer uma quantidade muito grande dados, o sistema irá armazenar o resultado da requisição em um Cache. Portanto, em chamadas consecutivas em curtos intervalos de tempo dessa rota, o sistema irá retornar o mesmo resultado.


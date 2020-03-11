Consulta
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente

**GET**

No método GET, irá consultar os dados dos clientes e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  busca
      -  Tipo de busca que deseja fazer no cliente
      -  Sim

   *  -  termo_busca
      -  Termo utilizado para fazer a busca
      -  Sim

   *  -  limit
      -  Limite de resultados
      -  Não

   *  -  cancelado
      -  Informa se deseja trazer os serviços cancelados ou não
      -  Não

   *  -  ultima_conexao
      -  Informa se deseja trazer os dados da última conexão
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

   *  -  busca
      -  nome_razaosocial, nome_fantasia, cpf_cnpj, codigo_cliente, telefone, login_radius, ipv4, mac
      -  Nenhum

   *  -  termo_busca
      -  Campo livre (Qualquer valor será aceito)
      -  Nenhum

   *  -  limit
      -  Valor mínimo 1, Valor Máximo 100.
      -  5

   *  -  cancelado
      -  sim,nao
      -  nao

   *  -  ultima_conexao
      -  sim,nao
      -  nao

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
	https://endereco_servidor/api/v1/integracao/cliente?busca=nome_razaosocial&termo_busca=guilherme&limit=2&cancelado=nao&order_by=codigo_cliente&order_type=asc -k

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
	                    "ultima_conexao": {
                        	"conectado": true,
	                        "ultima_conexao_datetime": "2019-12-15 18:22:24-03",
	                        "ultima_desconexao_datetime": null,
	                        "ultima_conexao": "15/12/2019 18:22:24",
	                        "ultima_desconexao": null,
	                        "ultimo_ipv4": "189.90.210.100",
	                        "ultimo_nas_ip": "10.28.33.20",
	                        "status_txt": "CONECTADO HÁ 0 MES(ES), 0 DIA(S), 22 HORA(S) e 53 MINUTO(S) - 189.90.210.100(10.28.50.20)",
	                        "status_txt_resumido": "CONECTADO HÁ 0 MES(ES), 0 DIA(S), 22 HORA(S) e 53 MINUTO(S)"
	                    }
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
	                        "cidade":"Divinópolis"
	                    },
	                    "endereco_instalacao":{
	                        "completo":"RUA MINAS GERAIS, 1793 - IPIRANGA, DIVINóPOLIS/MG",
	                        "logradouro":"RUA",
	                        "endereco":"MINAS GERAIS",
	                        "numero":"1793",
	                        "complemento":"",
	                        "bairro":"IPIRANGA",
	                        "cep":"35502-026",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Divinópolis"
	                    },
	                    "endereco_fiscal":{
	                        "completo":"RUA GOIAS, 86 - PORTO VELHO, DIVINóPOLIS/MG - APTO 101",
	                        "logradouro":"RUA",
	                        "endereco":"GOIAS",
	                        "numero":"86",
	                        "complemento":"APTO 101",
	                        "bairro":"PORTO VELHO",
	                        "cep":"35500-000",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Divinópolis"
	                    },
	                    "endereco_cobranca":{
	                        "completo":"RUA SEBASTIAO PARDINI, 58 - CENTRO, DIVINóPOLIS/MG - 202",
	                        "logradouro":"RUA",
	                        "endereco":"SEBASTIAO PARDINI",
	                        "numero":"58",
	                        "complemento":"202",
	                        "bairro":"CENTRO",
	                        "cep":"35500-000",
	                        "estado":"MG",
	                        "uf":"MINAS GERAIS",
	                        "cidade":"Divinópolis"
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
	                    "ultima_conexao"=>[],
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
	                        "cidade":"Santo Antônio do Monte"
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
	                        "cidade":"Nova Serrana"
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
	                        "cidade":"Perdigão"
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
	                        "cidade":"Nova Serrana"
	                    }
	                }
	            ]
	        }
	    ]
	}

No exemplo acima, foi feito uma requisição utilizando os seguintes parâmetros:

- busca: nome_razaosocial
- limit: 2 (Preciso de apenas 2 resultados)
- cancelado: nao (Quero apenas planos ativos)
- order_by: codigo_cliente
- order_type: asc (Do maior para o menor)

.. warning::

	IMPORTANTE: Para trazer os dados da última autenticação, é necessário enviar o parâmetro ultima_conexao=sim. A última conexão utiliza como base o extrato de conexão do RADIUS, por isso, caso existam problemas na rede do provedor, essa informação poderá não ser 100% confiável, uma vez, que ela depende que o concentrador do provedor, informe ao servidor RADIUS o estado atual da conexão do cliente.


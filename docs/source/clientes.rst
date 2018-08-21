Clientes
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

- busca (Obrigatório): Tipo de busca que deseja fazer no cliente
- termo_busca (Obrigatório): Termo utilizado para fazer a busca
- limit: Limite de resultados
- cancelado: Informa se deseja trazer os cancelados ou não
- order_by: Campo que será utilizado para ordenação
- order_type: Tipo da Ordenação


Os atributos podem conter os seguintes valores:

- busca: nome_razaosocial, nome_fantasia, cpf_cnpj, codigo_cliente, telefone, login_radius, ipv4, mac
- limit: Valor mínimo 1, Valor Máximo 50. Valor Default 5 (Ao não preencher)
- cancelado: sim, nao
- order_by: nome_razaosocial, nome_fantasia, codigo_cliente, cpf_cnpj
- order_type: asc, desc

Exemplo de requisição GET na rota de cliente::

	curl -X GET --header "Accept:application/json" https://endereco_servidor/api/v1/integracao/cliente?busca=nome_razaosocial&termo_busca=guilherme&limit=2&cancelado=nao&order_by=codigo_cliente&order_type=asc -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"

Retorno da requisição GET::

	{
	    "status": "success",
	    "msg": "Dados consultados com sucesso",
	    "clientes": [
	        {
	            "id_cliente": 11201,
	            "codigo_cliente": 421,
	            "nome_razaosocial": "GUILHERME ANTONIO DE ALCANTARA SILVA",
	            "nome_fantasia": null,
	            "tipo_pessoa": "pf",
	            "cpf_cnpj": "10682083682",
	            "telefone_primario": "37988242968",
	            "telefone_secundario": "37988242968",
	            "telefone_terciario": "",
	            "rg": "MG16999888",
	            "rg_emissao": null,
	            "inscricao_municipal": null,
	            "inscricao_estadual": null,
	            "data_cadastro": "2017-08-05 00:00:00",
	            "data_nascmento": "1969-12-31 04:00:00",
	            "servicos": [
	                {
	                    "numero_plano": 1,
	                    "nome": "4M",
	                    "valor": 119.9,
	                    "status": "Serviço Habilitado",
	                    "status_prefixo": "servico_habilitado",
	                    "login": "guilhermesilva1068",
	                    "senha": "123",
	                    "ipv4": "10.99.2.203",
	                    "ipv6": null,
	                    "interface": {
	                        "nome": "Interface Conexão Genérica",
	                        "tipo": "wireless",
	                        "called_sid": null
	                    },
	                    "equipamento_conexao": {
	                        "nome": "GENERICO",
	                        "ipv4": "192.168.2.100",
	                        "ipv6": null
	                    }
	                }
	            ]
	        },
	        {
	            "id_cliente": 11202,
	            "codigo_cliente": 422,
	            "nome_razaosocial": "GUILHERME COSTA SOUZA",
	            "nome_fantasia": null,
	            "tipo_pessoa": "pf",
	            "cpf_cnpj": "05338614626",
	            "telefone_primario": "37999452812",
	            "telefone_secundario": "37999452812",
	            "telefone_terciario": "",
	            "rg": "MG11298180",
	            "rg_emissao": null,
	            "inscricao_municipal": null,
	            "inscricao_estadual": null,
	            "data_cadastro": "2017-04-26 00:00:00",
	            "data_nascmento": "1969-12-31 00:00:00",
	            "servicos": [
	                {
	                    "numero_plano": 1,
	                    "nome": "5MB",
	                    "valor": 119.9,
	                    "status": "Serviço Habilitado",
	                    "status_prefixo": "servico_habilitado",
	                    "login": "guilhermesouza0533",
	                    "senha": "123",
	                    "ipv4": "10.99.1.118",
	                    "ipv6": null,
	                    "interface": {
	                        "nome": "Interface Conexão Genérica",
	                        "tipo": "wireless",
	                        "called_sid": null
	                    },
	                    "equipamento_conexao": {
	                        "nome": "GENERICO",
	                        "ipv4": "192.168.2.100",
	                        "ipv6": null
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
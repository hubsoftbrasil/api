Clientes > Consulta
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

:busca: (OBRIGATÓRIO) Tipo de busca que deseja fazer no cliente
:termo_busca: (OBRIGATÓRIO) Termo utilizado para fazer a busca
:limit: Limite de resultados
:cancelado: Informa se deseja trazer os cancelados ou não
:order_by: Campo que será utilizado para ordenação
:order_type: Tipo da Ordenação

Os atributos podem conter os seguintes valores:


:busca: nome_razaosocial, nome_fantasia, cpf_cnpj, codigo_cliente, telefone, login_radius, ipv4, mac
:limit: Valor mínimo 1, Valor Máximo 50. Valor Default 5 (Ao não preencher)
:cancelado: sim, nao
:order_by: nome_razaosocial, nome_fantasia, codigo_cliente, cpf_cnpj
:order_type: asc, desc

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
	            "nome_razaosocial": "GUILHERME SILVA",
	            "nome_fantasia": null,
	            "tipo_pessoa": "pf",
	            "cpf_cnpj": "10682083681",
	            "telefone_primario": "37988242968",
	            "telefone_secundario": "37988242968",
	            "telefone_terciario": "",
		    	"email_principal":"guilherme@silva.com.br",
		    	"email_secundario":null,
	            "rg": "MG16999888",
	            "rg_emissao": null,
	            "inscricao_municipal": null,
	            "inscricao_estadual": null,
	            "data_cadastro": "2017-08-05 00:00:00",
	            "data_nascmento": "1969-12-31 04:00:00",
	            "servicos": [
	                {
	                	"id_cliente_servico":11201,
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
	                        "nome": "PON5",
	                        "tipo": "gpon",
	                        "called_sid": null
	                    },
	                    "interface_roteamento": {
	                        "nome": "ether8",
	                        "tipo": "ethernet",
	                        "called_sid": null
	                    },
	                    "equipamento_conexao": {
	                        "nome": "OLT XPTO",
	                        "ipv4": "192.168.2.100",
	                        "ipv6": null
	                    },
	                    "equipamento_roteamento": {
	                        "nome": "CONCENTRADOR XPTO",
	                        "ipv4": "172.17.24.98",
	                        "ipv6": null
	                    },
	                    "endereco_cadastral": {
	                        "completo": "RUA DONA MARIA DAS DORES, 541 - NOSSA SENHORA DAS GRACAS, DIVINóPOLIS/MG - IGREJA",
	                        "logradouro": "RUA",
	                        "endereco": "DONA MARIA DAS DORES",
	                        "numero": "541",
	                        "complemento": "IGREJA",
	                        "bairro": "NOSSA SENHORA DAS GRACAS",
	                        "cep": "35501-048",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "Divinópolis"
	                    },
	                    "endereco_instalacao": {
	                        "completo": "RUA MINAS GERAIS, 1793 - IPIRANGA, DIVINóPOLIS/MG",
	                        "logradouro": "RUA",
	                        "endereco": "MINAS GERAIS",
	                        "numero": "1793",
	                        "complemento": "",
	                        "bairro": "IPIRANGA",
	                        "cep": "35502-026",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "Divinópolis"
	                    },
	                    "endereco_fiscal": {
	                        "completo": "RUA GOIAS, 86 - PORTO VELHO, DIVINóPOLIS/MG - APTO 101",
	                        "logradouro": "RUA",
	                        "endereco": "GOIAS",
	                        "numero": "86",
	                        "complemento": "APTO 101",
	                        "bairro": "PORTO VELHO",
	                        "cep": "35500-000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "Divinópolis"
	                    },
	                    "endereco_cobranca": {
	                        "completo": "RUA SEBASTIAO PARDINI, 58 - CENTRO, DIVINóPOLIS/MG - 202",
	                        "logradouro": "RUA",
	                        "endereco": "SEBASTIAO PARDINI",
	                        "numero": "58",
	                        "complemento": "202",
	                        "bairro": "CENTRO",
	                        "cep": "35500-000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "Divinópolis"
	                    }
	                }
	            ]
	        },
	        {
	            "id_cliente": 11202,
	            "codigo_cliente": 422,
	            "nome_razaosocial": "GUILHERME COSTA",
	            "nome_fantasia": null,
	            "tipo_pessoa": "pf",
	            "cpf_cnpj": "05333614622",
	            "telefone_primario": "37999450812",
	            "telefone_secundario": "37999452812",
	            "telefone_terciario": "",
		    	"email_principal":null,
		    	"email_secundario":null,
	            "rg": "MG11298180",
	            "rg_emissao": null,
	            "inscricao_municipal": null,
	            "inscricao_estadual": null,
	            "data_cadastro": "2017-04-26 00:00:00",
	            "data_nascmento": "1969-12-31 00:00:00",
	            "servicos": [
	                {
	                	"id_cliente_servico":11302,
	                    "numero_plano": 2,
	                    "nome": "24M",
	                    "valor": 119.9,
	                    "status": "Serviço Habilitado",
	                    "status_prefixo": "servico_habilitado",
	                    "login": "guilhermesouza0533",
	                    "senha": "123",
	                    "ipv4": "10.99.1.118",
	                    "ipv6": null,
	                    "interface": {
	                        "nome": "PON5",
	                        "tipo": "gpon",
	                        "called_sid": null
	                    },
	                    "interface_roteamento": {
	                        "nome": "ether8",
	                        "tipo": "ethernet",
	                        "called_sid": null
	                    },
	                    "equipamento_conexao": {
	                        "nome": "OLT XPTO",
	                        "ipv4": "192.168.2.100",
	                        "ipv6": null
	                    },
	                    "equipamento_roteamento": {
	                        "nome": "CONCENTRADOR XPTO",
	                        "ipv4": "172.17.24.98",
	                        "ipv6": null
	                    },
	                    "endereco_cadastral": {
	                        "completo": "RUA GERALDO RODRIGUES DA COSTA, 5 - CENTRO, SANTO ANTôNIO DO MONTE/MG",
	                        "logradouro": "RUA",
	                        "endereco": "GERALDO RODRIGUES DA COSTA",
	                        "numero": "5",
	                        "complemento": "",
	                        "bairro": "CENTRO",
	                        "cep": "35560000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "Santo Antônio do Monte"
	                    },
	                    "endereco_instalacao": {
	                        "completo": "RUA JOÃO J FERNANDES, 900 - BARRETOS, NOVA SERRANA/MG - AREA RURAL",
	                        "logradouro": "RUA",
	                        "endereco": "JOÃO J FERNANDES",
	                        "numero": "900",
	                        "complemento": "AREA RURAL",
	                        "bairro": "BARRETOS",
	                        "cep": "35519-000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "Nova Serrana"
	                    },
	                    "endereco_fiscal": {
	                        "completo": "RUA RITA DOS SANTOS MESQUITA, 233 - SANTO AGOSTINHO, PERDIGãO/MG",
	                        "logradouro": "RUA",
	                        "endereco": "RITA DOS SANTOS MESQUITA",
	                        "numero": "233",
	                        "complemento": "",
	                        "bairro": "SANTO AGOSTINHO",
	                        "cep": "35545-000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "Perdigão"
	                    },
	                    "endereco_cobranca": {
	                        "completo": "RUA DOIS, 221 - BARRETINHOS, NOVA SERRANA/MG - AREA RURAL",
	                        "logradouro": "RUA",
	                        "endereco": "DOIS",
	                        "numero": "221",
	                        "complemento": "AREA RURAL",
	                        "bairro": "BARRETINHOS",
	                        "cep": "35519-000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "Nova Serrana"
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


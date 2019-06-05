Extrato Conexão
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/extrato_conexao

**GET**

No método GET, será possível consultar os extratos de conexão de um determinaod login e obter o retorno no formato JSON como resposta. Os segintes parâmetros podem/devem ser utilizados:

:busca: (OBRIGATÓRIO) Tipo de busca que deseja fazer no cliente
:termo_busca: (OBRIGATÓRIO) Termo utilizado para fazer a busca
:limit: Limite de resultados
:data_inicio: Data de Início (Utiliza a data de vencimento como base)
:data_fim: Data de Fim (Utiliza a data de vencimento como base)

Os atributos podem conter os seguintes valores:

:busca: (OBRIGATÓRIO) login
:termo_busca: (OBRIGATÓRIO) Campo livre
:limit: Valor mínimo 1, Valor máximo 50. Valor Default: 20 (Ao não preencher)
:data_inicio: Campo no formato DateTime (YYYY-MM-DD). Valor Padrão será a data atual menos 30 dias
:data_fim: Campo no formato DateTime (YYYY-MM-DD). Valor Padrão será a data atual

Exemplo de requisição GET na rota do cliente::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/extrato_conexao?busca=login&termo_busca=antoniomas&limit=2 -k

Retorno da requisição GET::

	{
	    "status": "success",
	    "msg": "Dados consultados com sucesso",
	    "registros": [
	        {
	            "acctstarttime": "2017-09-27 18:14:08-03",
	            "acctstarttimebr": "27/09/2017 18:14:08",
	            "acctstoptime": null,
	            "acctstoptimebr": null,
	            "calledstationid": "service2",
	            "callingstationid": "58:10:8C:4B:FF:AA",
	            "download_megabytes": 4594.95,
	            "upload_megabytes": 156.12,
	            "framedipaddress": "10.99.1.152",
	            "nasipaddress": "172.17.22.132",
	            "nasportid": "ether3",
	            "nasporttype": "Ethernet",
	            "username": "antoniomas",
	            "servico": {
	                "numero_plano": 49,
	                "nome": "100GB-DE-TESTE-",
	                "valor": 100,
	                "status": "Serviço Habilitado",
	                "status_prefixo": "servico_habilitado"
	            },
	            "cliente": {
	                "codigo_cliente": 1161,
	                "nome_razaosocial": "ANTONIO MODESTO",
	                "cpf_cnpj": "09350012345"
	            }
	        }
	    ],
	    "estatisticas": {
	        "total_conexoes": 1,
	        "download_total": 4594.95,
	        "upload_total": 156.12,
	        "trafego_total": 4751.07,
	        "media_download": 0.23,
	        "media_upload": 0.01
	    }
	}
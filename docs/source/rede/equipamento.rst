Equipamento
============

**Necessário**

Para fazer requisições nos dados da API, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de REDE, devem ser feitos na rota::

	/api/v1/integracao/rede

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/rede/equipamento

**GET**

No método GET, será possível consultar os equipamentos que estão cadastrados no sistema:

Exemplo de requisição GET na rota de equipamentos::

	curl -X GET --header "Accept:application/json" https://endereco_servidor/api/v1/integracao/rede/equipamento -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"

Retorno da requisição GET::
	
	{
	    "status": "success",
	    "msg": "Dados consultados com sucesso.",
	    "equipamentos": [
			{
		        "id_equipamento": 1413,
		        "nome": "HUAWEI-NICNET",
		        "ipv4": "10.0.0.1",
		        "ipv6": null,
		        "modelo": "NE20E-S2F",
		        "fabricante": "HUAWEI"
		    },
		    {
		        "id_equipamento": 1410,
		        "nome": "OLT BDCOM",
		        "ipv4": "10.0.0.2",
		        "ipv6": null,
		        "modelo": "GP3600-08",
		        "fabricante": "BDCOM"
		    },
		    {
		        "id_equipamento": 1406,
		        "nome": "JUNIPER-MX104",
		        "ipv4": "10.0.0.2",
		        "ipv6": null,
		        "modelo": "MX104",
		        "fabricante": "JUNIPER"
		    }
		]
	}
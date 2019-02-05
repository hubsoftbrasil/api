Pop
============

**Necessário**

Para fazer requisições nos dados da API, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de REDE, devem ser feitos na rota::

	/api/v1/integracao/rede

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/rede/pop

**GET**

No método GET, será possível consultar os POPs e seus equipamentos de conexão que estão cadastrados no sistema:

Exemplo de requisição GET na rota de POP::

	curl -X GET --header "Accept:application/json" https://endereco_servidor/api/v1/integracao/rede/pop -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"

Retorno da requisição GET::

	{
        "status": "success",
        "msg": "Dados consultados com sucesso.",
        "pops": [
            {
                "id_pop": 51,
                "nome": "NOVO POP",
                "equipamentos": [
                    {
                        "id_equipamento": 1402,
                        "nome": "NOVO EQUIP CADASTRADO",
                        "ipv4": "192.168.100.254",
                        "ipv6": null,
                        "modelo": "DELL 5524",
                        "fabricante": "DELL"
                    }
                ]
            },
            {
                "id_pop": 53,
                "nome": "POP EXEMPLO WIKI",
                "equipamentos": [
                    {
                        "id_equipamento": 1400,
                        "nome": "EXEMPLO WIKI",
                        "ipv4": "10.10.10.100",
                        "ipv6": null,
                        "modelo": "RB433AH",
                        "fabricante": "MIKROTIK"
                    }
                ]
            },
            {
                "id_pop": 48,
                "nome": "POP TESTE",
                "equipamentos": [
                    {
                        "id_equipamento": 1413,
                        "nome": "HUAWEI-NICNET",
                        "ipv4": "45.4.33.194",
                        "ipv6": null,
                        "modelo": "NE20E-S2F",
                        "fabricante": "HUAWEI"
                    },
                    {
                        "id_equipamento": 1410,
                        "nome": "OLT BDCOM",
                        "ipv4": "177.52.48.7",
                        "ipv6": null,
                        "modelo": "GP3600-08",
                        "fabricante": "BDCOM"
                    },
                    {
                        "id_equipamento": 1406,
                        "nome": "JUNIPER-MX104",
                        "ipv4": "10.20.1.114",
                        "ipv6": null,
                        "modelo": "MX104",
                        "fabricante": "JUNIPER"
                    }
                ]
            },
            {
                "id_pop": 52,
                "nome": "POP EXEMPLO",
                "equipamentos": []
            }
        ]
    }

.. note::

    OBSERVAÇÃO: Um POP pode conter 0 ou mais equipamentos de conexão associados, de acordo com as configurações estabelecidas no sistema.
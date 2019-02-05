Cidade
============

**Necessário**

Para fazer requisições nos dados da API, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de REDE, devem ser feitos na rota::

	/api/v1/integracao/endereco

O endereço completo da requisição, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/endereco/cidade

**GET**

No método GET, será possível consultar as cidades e seus bairros que estão cadastrados no sistema:

Exemplo de requisição GET na rota de Cidades::

	curl -X GET --header "Accept:application/json" https://endereco_servidor/api/v1/integracao/endereco/cidade -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"

Retorno da requisição GET::

	{
        "status": "success",
        "msg": "Dados consultados com sucesso.",
        "cidades": [
            {
                "id_cidade": 1393,
                "nome": "Araújos",
                "uf": "MG",
                "ibge": "3103900",
                "bairros": [
                    {
                        "nome": "ANTONIA DE LURDES"
                    },
                    {
                        "nome": "BEIRA RIO"
                    },
                    {
                        "nome": "BELA VISTA"
                    },
                    {
                        "nome": "CENTRO"
                    },
                    {
                        "nome": "CHIQUINHO PERCILIA"
                    },
                    {
                        "nome": "CIDADE NOVA"
                    },
                    {
                        "nome": "CIDADE NOVO"
                    },
                    {
                        "nome": "DOM CABRAL"
                    },
                    {
                        "nome": "ESTEVES"
                    },
                    {
                        "nome": "ESTIVA"
                    },
                    {
                        "nome": "FREDERICO OZANAN"
                    },
                    {
                        "nome": "GERALDO FIRMINO"
                    },
                    {
                        "nome": "JOAO ALONSO"
                    },
                    {
                        "nome": "JUCA FIRMINO"
                    },
                    {
                        "nome": "OLAVO DA AZ"
                    },
                    {
                        "nome": "OLAVO DA PAZ"
                    },
                    {
                        "nome": "RESIDENCIAL OLAVO ALVES DA PAZ"
                    },
                    {
                        "nome": "SANTO AGOSTINHO"
                    },
                    {
                        "nome": "SANTO ANTÔNIO"
                    },
                    {
                        "nome": "SOLAR"
                    }
                ]
            },
            {
                "id_cidade": 1406,
                "nome": "Bambuí",
                "uf": "MG",
                "ibge": "3105103",
                "bairros": [
                    {
                        "nome": "CENTRO"
                    },
                    {
                        "nome": "JARDIM AMERICA"
                    }
                ]
            },
            {
                "id_cidade": 1416,
                "nome": "Belo Horizonte",
                "uf": "MG",
                "ibge": "3106200",
                "bairros": [
                    {
                        "nome": "LOURDES"
                    },
                    {
                        "nome": "OURO PRETO"
                    },
                    {
                        "nome": "PALMEIRAS"
                    }
                ]
            }
        ]
    }

.. note::

    OBSERVAÇÃO: Apenas as cidades e bairros que possuem clientes ativos, serão retornadas na requisição da API, uma vez que o sistema conta com o cadastro atualizado de todas as cidades do Brasil.
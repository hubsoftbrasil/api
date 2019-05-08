Zona de Atendimento
============

**Necessário**

Para fazer requisições nos dados da API, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de REDE, devem ser feitos na rota::

	/api/v1/integracao/rede

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/rede/zona_atendimento

**GET**

No método GET, será possível consultar as Zonas de Atendimento que estão cadastradas no sistema:

Exemplo de requisição GET na rota de Zonas de Atendimento::

	curl -X GET --header "Accept:application/json" https://endereco_servidor/api/v1/integracao/rede/zona_atendimento -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"

Retorno da requisição GET::

	{
        "status": "success",
        "msg": "Dados consultados com sucesso.",
        "zonas_atendimento": [
            {
                "id_zona_atendimento": 12,
                "nome": "FIBRA - PIUMHI - A1R3",
                "descricao": "ATENDIMENTO FIBRA AREA 1 ROTA 3 EM PIUMHI - TESTE",
                "interfaces": [
                    {
                        "id_interface_conexao": 355,
                        "nome": "A1R3_INTELBRAS",
                        "descricao": null,
                        "tipo": "gpon",
                        "equipamento_conexao": {
                            "nome": "PIU_CHASSI_INTELBRAS_ESCRIT?RIO_02",
                            "ipv4": "10.37.1.249",
                            "ipv6": null,
                            "modelo": "8820G",
                            "fabricante": "INTELBRAS"
                        }
                    }
                ]
            },
            {
                "id_zona_atendimento": 13,
                "nome": "WIRELESS RAUL",
                "descricao": "REDE WIRELESS PERTO DO AP RAUL",
                "interfaces": [
                    {
                        "id_interface_conexao": 51,
                        "nome": "ath0",
                        "descricao": null,
                        "tipo": "wireless",
                        "equipamento_conexao": {
                            "nome": "AP_RAUL",
                            "ipv4": "10.20.72.12",
                            "ipv6": null,
                            "modelo": "BULLET2",
                            "fabricante": "UBIQUITI"
                        }
                    }
                ]
            },
            {
                "id_zona_atendimento": 10,
                "nome": "SDT - FIBRA - AREA 9",
                "descricao": "AREA 9 DE FIBRA EM SAMONTE",
                "interfaces": [
                    {
                        "id_interface_conexao": 327,
                        "nome": "SDT_A9R3_A9R4",
                        "descricao": null,
                        "tipo": "epon",
                        "equipamento_conexao": {
                            "nome": "FIBERHOME-SDT",
                            "ipv4": "10.20.14.34",
                            "ipv6": null,
                            "modelo": "AN5516-06",
                            "fabricante": "FIBERHOME"
                        }
                    },
                    {
                        "id_interface_conexao": 330,
                        "nome": "Teste Panhaque",
                        "descricao": null,
                        "tipo": "epon",
                        "equipamento_conexao": {
                            "nome": "FIBERHOME-SDT",
                            "ipv4": "10.20.14.34",
                            "ipv6": null,
                            "modelo": "AN5516-06",
                            "fabricante": "FIBERHOME"
                        }
                    }
                ]
            },
            {
                "id_zona_atendimento": 14,
                "nome": "PIUMHI - FIBRA -A4",
                "descricao": "AREA 04 DE FIBRA EM PIUMHI",
                "interfaces": [
                    {
                        "id_interface_conexao": 353,
                        "nome": "PIU_A4R1_A4R2",
                        "descricao": null,
                        "tipo": "gpon",
                        "equipamento_conexao": {
                            "nome": "PIU_CHASSI_INTELBRAS_ARMARIO_RENATO",
                            "ipv4": "10.37.8.3",
                            "ipv6": null,
                            "modelo": "8820G",
                            "fabricante": "INTELBRAS"
                        }
                    }
                ]
            }
        ]
    }

.. note::

    OBSERVAÇÃO: Uma zona de atendimento poderá conter 0 ou mais interfaces de conexão configuradas. O ideal de se utilizar essa rota da API, é que todas as Interfaces de Conexões, estejam associadas com as Zonas de Atendimento de forma correta. Verifique com o gestor da Rede do provedor, para verificar se todos os cadastros estão corretos.
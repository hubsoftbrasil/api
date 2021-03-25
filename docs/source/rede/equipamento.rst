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

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/rede/equipamento -k

Retorno da requisição GET::

        {
            "status": "success",
            "msg": "Dados consultados com sucesso.",
            "equipamentos": [
                {
                    "id_equipamento": 1374,
                    "nome": "ACCEL-SDT-01",
                    "ipv4": "10.20.1.80",
                    "ipv6": null,
                    "autentica_radius": true,
                    "modelo": "SERVERU L800",
                    "tipo": "ROTEADOR",
                    "fabricante": "SERVERU",
                    "interfaces": [
                        {
                            "id_interface_conexao": 419,
                            "nome": "VLAN100",
                            "descricao": "VLAN100",
                            "tipo": "vlan",
                            "interface_conexao_roteamento": {
                                "id_interface_conexao": 419,
                                "nome": "VLAN100",
                                "descricao": "VLAN100",
                                "tipo": "vlan",
                                "equipamento_conexao": {
                                    "id_equipamento": 1374,
                                    "nome": "ACCEL-SDT-01",
                                    "ipv4": "10.20.1.80",
                                    "ipv6": null
                                }
                            }
                        },
                        {
                            "id_interface_conexao": 420,
                            "nome": "bridge0",
                            "descricao": "bridge0",
                            "tipo": "bridge",
                            "interface_conexao_roteamento": {
                                "id_interface_conexao": 420,
                                "nome": "bridge0",
                                "descricao": "bridge0",
                                "tipo": "bridge",
                                "equipamento_conexao": {
                                    "id_equipamento": 1374,
                                    "nome": "ACCEL-SDT-01",
                                    "ipv4": "10.20.1.80",
                                    "ipv6": null
                                }
                            }
                        },
                        {
                            "id_interface_conexao": 66,
                            "nome": "ether1",
                            "descricao": "",
                            "tipo": "ethernet",
                            "interface_conexao_roteamento": {
                                "id_interface_conexao": 66,
                                "nome": "ether1",
                                "descricao": "",
                                "tipo": "ethernet",
                                "equipamento_conexao": {
                                    "id_equipamento": 1374,
                                    "nome": "ACCEL-SDT-01",
                                    "ipv4": "10.20.1.80",
                                    "ipv6": null
                                }
                            }
                        },
                        {
                            "id_interface_conexao": 386,
                            "nome": "ether2",
                            "descricao": null,
                            "tipo": "ethernet",
                            "interface_conexao_roteamento": {
                                "id_interface_conexao": 386,
                                "nome": "ether2",
                                "descricao": null,
                                "tipo": "ethernet",
                                "equipamento_conexao": {
                                    "id_equipamento": 1374,
                                    "nome": "ACCEL-SDT-01",
                                    "ipv4": "10.20.1.80",
                                    "ipv6": null
                                }
                            }
                        }
                    ]
                },
                {
                    "id_equipamento": 1477,
                    "nome": "AP MIKROTIK",
                    "ipv4": "10.101.102.103",
                    "ipv6": null,
                    "autentica_radius": true,
                    "modelo": "RB600",
                    "tipo": "ACCESS POINT",
                    "fabricante": "MIKROTIK",
                    "interfaces": [
                        {
                            "id_interface_conexao": 571,
                            "nome": "Wireless01",
                            "descricao": null,
                            "tipo": "wireless",
                            "interface_conexao_roteamento": {
                                "id_interface_conexao": 419,
                                "nome": "VLAN100",
                                "descricao": "VLAN100",
                                "tipo": "vlan",
                                "equipamento_conexao": {
                                    "id_equipamento": 1374,
                                    "nome": "ACCEL-SDT-01",
                                    "ipv4": "10.20.1.80",
                                    "ipv6": null
                                }
                            }
                        },
                        {
                            "id_interface_conexao": 862,
                            "nome": "vlan 10",
                            "descricao": null,
                            "tipo": "vlan",
                            "interface_conexao_roteamento": {
                                "id_interface_conexao": 862,
                                "nome": "vlan 10",
                                "descricao": null,
                                "tipo": "vlan",
                                "equipamento_conexao": {
                                    "id_equipamento": 1477,
                                    "nome": "AP MIKROTIK",
                                    "ipv4": "10.101.102.103",
                                    "ipv6": null
                                }
                            }
                        }
                    ]
                }
            ]
        }	

Financeiro
============

**Necessário**

Para fazer requisições nos dados de financeiro dos clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/financeiro

**GET**

No método GET, será possível consultar as faturas em aberto/liquidadas dos clientes e obter o retorno no formato JSON como resposta. Os segintes parâmetros podem/devem ser utilizados:

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

   *  -  apenas_pendente
      -  Informa de deseja trazer apenas as faturas pendentes
      -  Não

   *  -  order_by
      -  Campo que será utilizado para ordenação
      -  Não

   *  -  order_type
      -  Tipo da Ordenação
      -  Não

   *  -  data_inicio
      -  Data de Início (Utiliza a data de vencimento como base)
      -  Não

   *  -  data_fim
      -  Data de Fim (Utiliza a data de vencimento como base)
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default   

   *  -  busca
      -  cpf_cnpj, codigo_cliente, id_cliente_servico
      -  Nenhum

   *  -  termo_busca
      -  Campo livre
      -  Sim

   *  -  limit
      -  Valor mínimo 1, Valor máximo 50.
      -  20

   *  -  apenas_pendente
      -  sim,nao.
      -  sim

   *  -  order_by
      -  data_vencimento,data_pagamento,data_cadastro,valor.
      -  data_vencimento

   *  -  order_type
      -  asc,desc.
      -  asc

   *  -  data_inicio
      -  Campo no formato DateTime (YYYY-MM-DD)
      -  Nenhum

   *  -  data_fim
      -  Campo no formato DateTime (YYYY-MM-DD)
      -  Nenhum

   *  -  tipo_data
      -  Tipo de Data que irá filtrar a data_inicio e data_fim
      -  data_vencimento

Exemplo de requisição GET na rota do cliente::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/financeiro?busca=codigo_cliente&termo_busca=1099&limit=2 -k

Retorno da requisição GET::

	{
	    "status": "suscess",
	    "msg": "Dados consultados com sucesso",
	    "faturas": [
	        {
	            "id_fatura": 36397,
	            "nosso_numero": "272064",
	            "nosso_numero_dv": null,
	            "linha_digitavel": null,
	            "codigo_barras": null,
	            "link": null,
	            "agencia_codigo_beneficiario": null,
	            "beneficiario": null,
	            "numero_documento": null,
	            "especie": null,
	            "especie_dinheiro": "R$",
	            "aceite": null,
	            "local_pagamento": null,
	            "carteira": null,
	            "tipo_cobranca": "debito_conta_corrente",
	            "valor": 54.95,
	            "data_vencimento": "10/10/2017",
	            "data_cadastro": "10/10/2017",
	            "data_pagamento": "31/07/2017",
	            "data_documento": null,
	            "data_processamento": null,
	            "detalhamento": [
	                {
	                    "descricao": "(+) Serviço de Comunicação e Multimídia (26/09/2017) até (09/10/2017) - 13 dias (proporcional) | R$ 21.62",
	                    "valor": 21.62
	                },
	                {
	                    "descricao": "(+) Taxa de Instalação (1/3) | R$ 33.33",
	                    "valor": 33.33
	                }
	            ],
	            "cliente": {
	                "codigo_cliente": 1162,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO",
	                "cpf_cnpj": "41107296617",
	                "servico": {
	                    "id_cliente_servico": 22703,
	                    "numero_plano": 26,
	                    "nome": "500MB",
	                    "valor": 54.95,
	                    "status": "Serviço Habilitado",
	                    "status_prefixo": "servico_habilitado",
	                    "endereco_cadastral": {
	                        "completo": "PRAÇA GETULIO VARGAS, 100, SALA 411 - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000",
	                        "endereco": "PRAÇA GETULIO VARGAS",
	                        "numero": "100",
	                        "complemento": "SALA 411",
	                        "referencia": null,
	                        "bairro": "CENTRO",
	                        "cep": "35560000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "SANTO ANTÔNIO DO MONTE",
	                        "coordenadas": {
	                            "latitude": -20.086726,
	                            "longitude": -45.290536
	                        }
	                    },
	                    "endereco_instalacao": {
	                        "completo": "PRAÇA GETULIO VARGAS, 100, SALA 411 - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000",
	                        "endereco": "PRAÇA GETULIO VARGAS",
	                        "numero": "100",
	                        "complemento": "SALA 411",
	                        "referencia": null,
	                        "bairro": "CENTRO",
	                        "cep": "35560000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "SANTO ANTÔNIO DO MONTE",
	                        "coordenadas": {
	                            "latitude": -20.086726,
	                            "longitude": -45.290536
	                        }
	                    },
	                    "endereco_fiscal": {
	                        "completo": "PRAÇA GETULIO VARGAS, 100, SALA 411 - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000",
	                        "endereco": "PRAÇA GETULIO VARGAS",
	                        "numero": "100",
	                        "complemento": "SALA 411",
	                        "referencia": null,
	                        "bairro": "CENTRO",
	                        "cep": "35560000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "SANTO ANTÔNIO DO MONTE",
	                        "coordenadas": {
	                            "latitude": -20.086726,
	                            "longitude": -45.290536
	                        }
	                    },
	                    "endereco_cobranca": {
	                        "completo": "PRAÇA GETULIO VARGAS, 100, SALA 411 - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000",
	                        "endereco": "PRAÇA GETULIO VARGAS",
	                        "numero": "100",
	                        "complemento": "SALA 411",
	                        "referencia": null,
	                        "bairro": "CENTRO",
	                        "cep": "35560000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "SANTO ANTÔNIO DO MONTE",
	                        "coordenadas": {
	                            "latitude": -20.086726,
	                            "longitude": -45.290536
	                        }
	                    }
	                }
	            }
	        },
	        {
	            "id_fatura": 36403,
	            "nosso_numero": "272100",
	            "nosso_numero_dv": "0272100-0",
	            "linha_digitavel": "75691.31662 01006.726101 27210.000017 7 73380000001000",
	            "codigo_barras": "75697733800000010001316601006726102721000001",
	            "link": "https://endereco_do_servidor/pdf/fatura/TXpZME1ETT0=",
	            "agencia_codigo_beneficiario": "3166 / 67261",
	            "beneficiario": "PROVEDOR DE INTERNET LTDA / CNPJ: 22.385.367/0001-03",
	            "numero_documento": 36403,
	            "especie": "DS",
	            "especie_dinheiro": "R$",
	            "aceite": "N",
	            "local_pagamento": "PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO",
	            "carteira": "1",
	            "tipo_cobranca": "boleto_bancario",
	            "valor": 10,
	            "data_vencimento": "09/11/2017",
	            "data_cadastro": "10/10/2017",
	            "data_pagamento": "25/06/2018",
	            "data_documento": "06/04/2020",
	            "data_processamento": "06/04/2020",
	            "detalhamento": [
	                {
	                    "descricao": "Cobrança adicional",
	                    "valor": 10
	                }
	            ],
	            "cliente": {
	                "codigo_cliente": 1162,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO",
	                "cpf_cnpj": "41107296617",
	                "servico": {
	                    "id_cliente_servico": 22703,
	                    "numero_plano": 26,
	                    "nome": "500MB",
	                    "valor": 54.95,
	                    "status": "Serviço Habilitado",
	                    "status_prefixo": "servico_habilitado",
	                    "endereco_cadastral": {
	                        "completo": "PRAÇA GETULIO VARGAS, 100, SALA 411 - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000",
	                        "endereco": "PRAÇA GETULIO VARGAS",
	                        "numero": "100",
	                        "complemento": "SALA 411",
	                        "referencia": null,
	                        "bairro": "CENTRO",
	                        "cep": "35560000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "SANTO ANTÔNIO DO MONTE",
	                        "coordenadas": {
	                            "latitude": -20.086726,
	                            "longitude": -45.290536
	                        }
	                    },
	                    "endereco_instalacao": {
	                        "completo": "PRAÇA GETULIO VARGAS, 100, SALA 411 - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000",
	                        "endereco": "PRAÇA GETULIO VARGAS",
	                        "numero": "100",
	                        "complemento": "SALA 411",
	                        "referencia": null,
	                        "bairro": "CENTRO",
	                        "cep": "35560000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "SANTO ANTÔNIO DO MONTE",
	                        "coordenadas": {
	                            "latitude": -20.086726,
	                            "longitude": -45.290536
	                        }
	                    },
	                    "endereco_fiscal": {
	                        "completo": "PRAÇA GETULIO VARGAS, 100, SALA 411 - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000",
	                        "endereco": "PRAÇA GETULIO VARGAS",
	                        "numero": "100",
	                        "complemento": "SALA 411",
	                        "referencia": null,
	                        "bairro": "CENTRO",
	                        "cep": "35560000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "SANTO ANTÔNIO DO MONTE",
	                        "coordenadas": {
	                            "latitude": -20.086726,
	                            "longitude": -45.290536
	                        }
	                    },
	                    "endereco_cobranca": {
	                        "completo": "PRAÇA GETULIO VARGAS, 100, SALA 411 - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000",
	                        "endereco": "PRAÇA GETULIO VARGAS",
	                        "numero": "100",
	                        "complemento": "SALA 411",
	                        "referencia": null,
	                        "bairro": "CENTRO",
	                        "cep": "35560000",
	                        "estado": "MG",
	                        "uf": "MINAS GERAIS",
	                        "cidade": "SANTO ANTÔNIO DO MONTE",
	                        "coordenadas": {
	                            "latitude": -20.086726,
	                            "longitude": -45.290536
	                        }
	                    }
	                }
	            }
	        },
	        {
	            "id_fatura": 43653,
	            "nosso_numero": "274554",
	            "nosso_numero_dv": "0274554-2",
	            "linha_digitavel": "75691.31662 01006.726101 27455.420011 8 82170000001232",
	            "codigo_barras": "75698821700000012321316601006726102745542001",
	            "link": "http://endereco_do_servidor/pdf/fatura/TkRNMk5UTT0=",
	            "agencia_codigo_beneficiario": "3166 / 67261",
	            "beneficiario": "PROVEDOR DE INTERNET LTDA / CNPJ: 22.385.367/0001-03",
	            "numero_documento": 43653,
	            "especie": "DS",
	            "especie_dinheiro": "R$",
	            "aceite": "N",
	            "local_pagamento": "PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO",
	            "carteira": "1",
	            "tipo_cobranca": "boleto_bancario",
	            "valor": 10,
	            "data_vencimento": "10/07/2018",
	            "data_cadastro": "10/10/2017",
	            "data_pagamento": null,
	            "data_documento": "06/04/2020",
	            "data_processamento": "06/04/2020",
	            "detalhamento": [
	                {
	                    "descricao": "COBRANÇA DE TESTE VENCIDA",
	                    "valor": 10
	                }
	            ],
	            "cliente": {
	                "codigo_cliente": 1162,
	                "nome_razaosocial": "GUILHERME DA COSTA COUTO",
	                "cpf_cnpj": "41107296617"
	            }
	        }
	    ]
	}

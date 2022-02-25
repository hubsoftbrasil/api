Fiscal
============

**Necessário**

Para fazer requisições nos dados de nota fiscal dos clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/nota_fiscal

**GET**

No método GET, será possível consultar as notas fiscais e obter o retorno no formato JSON como resposta. Os seguintes parâmetros podem/devem ser utilizados:

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

   *  -  data_inicio
      -  Data de Início (Utiliza a data de emissão da nota como base)
      -  Não

   *  -  data_fim
      -  Data de Fim (Utiliza a data de emissão da nota como base)
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default   

   *  -  busca
      -  id_cliente
      -  Nenhum

   *  -  termo_busca
      -  Campo livre
      -  Sim

   *  -  data_inicio
      -  Campo no formato DateTime (YYYY-MM-DD)
      -  Nenhum

   *  -  data_fim
      -  Campo no formato DateTime (YYYY-MM-DD)
      -  Nenhum

.. warning::

  A API vai retornar somente notas que já foram processadas e enviadas aos respectivos orgãos responsavéis, sendo assim será retornado somente as notas com os seguintes status: NFe: efetivada / NFSe: autorizado / Nota Fiscal Telecom 21/22: normal

.. note::

  Para os parâmetros data_inicio e data_fim não pode ser informado um intervalo de datas maior que 60 dias.  

Exemplo de requisição GET na rota do cliente::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/nota_fiscal?busca=id_cliente&termo_busca=999&data_inicio=2021-01-01&data_fim=2022-02-23 -k

Retorno da requisição GET::

  {
  "status": "success",
  "msg": "Dados carregados com sucesso",
  "cliente": {
    "id_cliente": 23285,
    "codigo_cliente": 1382,
    "nome_razaosocial": "HUBSOFT BRASIL"
  },
  "notas_fiscais": [
    {
      "id_nota_fiscal": 3064,
      "id_tipo_documento_fiscal": 1,
      "numero_nota": 427,
      "serie_nota": "U",
      "cfop": "5307",
      "identificacao": "XYWNrpBhW5D8p2yuvAoL",
      "valor": "5",
      "data_cadastro_br": "25/02/2022 09:07",
      "data_emissao_br": "25/02/2022",
      "data_cancelamento_br": null,
      "cancelado": false,
      "tipo_documento_fiscal": {
        "id_tipo_documento_fiscal": 1,
        "descricao": "Nota Fiscal de Serviço de Comunicação",
        "codigo": "21",
        "ativo": true,
        "display": "21 - Nota Fiscal de Serviço de Comunicação"
      }
    }
  ],
  "nfes": [
    {
      "id_nfe": 351,
      "modelo": "55",
      "serie": "1",
      "numero_nf": 60,
      "chave": "NFe16922351872769307419",
      "recibo": "16922351872769307419",
      "autorizacao": null,
      "status": "efetivada",
      "status_mensagem": "Autorizado o uso da NF-e",
      "data_cadastro": "2021-12-09 17:31:39",
      "protocolo_autorizacao": "16922351872769307419",
      "cancelado": false,
      "data_cadastro_br": "09/12/2021 17:31:39",
      "data_cadastro_timestamp": 1639081899000,
      "data_emissao_br": "25/02/2022 09:07:06",
      "data_emissao_timestamp": 1645790826000,
      "data_contigencia_br": null,
      "data_contigencia_timestamp": null,
      "data_saida_br": null,
      "data_saida_timestamp": null,
      "nfe_emitente": {
        "id_nfe_emitente": 343,
        "id_nfe": 351,
        "nome_razaosocial": "TELECOM E HARDWARE LTDA",
        "nome_fantasia": "TESTE NFE",
        "inscricao_estadual": "0010735429999",
        "inscricao_municipal": null,
        "cpf_cnpj": "09613622999999",
        "tipo_pessoa": "pj",
        "end_logradouro": "PRAÇA GETULIO VARGAS",
        "end_numero": "77",
        "end_complemento": null,
        "end_bairro": "CENTRO",
        "end_cep": "35560000"
      }
    }
  ],
  "nfses": [
    {
      "id_nfse": 106,
      "id_externo": "61279626fbce65722f734bf899999",
      "hash": "ae71a618-f673-4359-ac4d-6LuLjmXmLuu9G4KGOdXd",
      "numero": "14890",
      "serie": "LAL",
      "lote_rps": "290008",
      "valor": "25",
      "data_cadastro": "2021-08-26 10:22:51",
      "tipo_emissao": "manual",
      "link_pdf": "",
      "link_xml": "",
      "status": "autorizado",
      "status_mensagem": "RPS Autorizada com sucesso",
      "informacao_complementar": "INFORMAÇÃO COMPLEMENTAR DA NFSE",
      "data_cadastro_br": "26/08/2021 10:22",
      "data_cadastro_timestamp": 1629984171000,
      "data_cancelamento_br": null,
      "data_cancelamento_timestamp": null
    }
  ]
  }

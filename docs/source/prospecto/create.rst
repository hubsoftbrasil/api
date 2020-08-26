Serviços / Planos Disponíveis
============

**Necessário**

Para fazer requisições nos dados de serviços / planos disponíveis para prospecto, é necessário que você já possua o TOKEN, adquirido na etapa (Autenticação)

As requisições devem ser feitos na rota::

	/api/v1/integracao/prospecto/create?cep=<numero_cep>

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/prospecto/create?cep=35560000

.. note::

   **NOTA:** As informações disponíveis na rota em questão são necessárias para a criação de um novo prospecto. Será preciso informar o objeto jSON do serviço / plano, selecionado na interface pelo usuário. Para mais informações, consulte o tópico abaixo.

.. toctree::
    :caption: Cadastrar Prospectos

    store


Rota e parâmetros da requisição
-----------

A rota em questão é do tipo **GET** e possui 1 único parâmetro obrigatório que deve ser informado junto a URL, o "cep". O parâmetro deve ser informado no formato de *query string*, da seguinte forma: **?cep=<numero_cep>**. O **<numero_cep>**, deve ser substituído pelo valor equivalente ao CEP a ser informado para busca de serviços / planos disponíveis.

Respostas da requisição
-----------

As seguintes respostas podem ser obtidas de acordo com o que for informado na rota em questão:

**Casos de erro**

- Omissão do parâmetro **?cep=<numero_cep>** na rota, resultará na resposta::

      {
          "status": "error",
          "msg": "CEP não informado."
      }

- Informando um CEP **inválido** na rota, resultará na resposta::

    {
      "status": "error",
      "msg": "Nenhuma cidade foi encontrada com esse CEP."
    }

**Casos de sucesso**

- Informando um CEP **válido** na rota, todos os planos / serviços que estiverem associados a uma unidade de negócio referente ao CEP e que estejam habilitados para prospecto, serão retornados com a seguinte resposta::

    {
      "status": "success",
      "msg": "Dados consultados com sucesso",
      "servicos": [
        {
          "id_servico": 1330,
          "descricao": "COMBO 10 MB EM DOBRO FIXO E 3 CAMERAS RAP10",
          "valor": 254.9,
          "nome_radius": "HUBSOFT-SERVICE-1330",
          "display": "COMBO 10 MB EM DOBRO FIXO E 3 CAMERAS RAP10 - (R$ 254.90) (INATIVO)",
          "velocidade_download": 20480,
          "velocidade_upload": 4096
        },
        {
          "id_servico": 1308,
          "descricao": "PLANO 10 MBPS + IP FIXO",
          "valor": 129.9,
          "nome_radius": "HUBSOFT-SERVICE-1308",
          "display": "PLANO 10 MBPS + IP FIXO - (R$ 129.90) (INATIVO)",
          "velocidade_download": 10240,
          "velocidade_upload": 2048
        },
        {
          "id_servico": 1318,
          "descricao": "PLANO 10 MBPS RAP10 E FIXO EM DOBRO",
          "valor": 129.9,
          "nome_radius": "HUBSOFT-SERVICE-1318",
          "display": "PLANO 10 MBPS RAP10 E FIXO EM DOBRO - (R$ 129.90) (INATIVO)",
          "velocidade_download": 20480,
          "velocidade_upload": 4096
        },
        {
          "id_servico": 1319,
          "descricao": "PLANO 25 MBPS RAP10 E FIXO EM DOBRO",
          "valor": 169.9,
          "nome_radius": "HUBSOFT-SERVICE-1319",
          "display": "PLANO 25 MBPS RAP10 E FIXO EM DOBRO - (R$ 169.90) (INATIVO)",
          "velocidade_download": 51200,
          "velocidade_upload": 10240
        }
      ]
    }


- Informando um CEP **válido** e que não esteja associado a uma unidade de negócio, será retornado todos serviços / planos habilitados para prospecto::

    {
      "status": "success",
      "msg": "Dados consultados com sucesso",
      "servicos": [
        {
          "id_servico": 1303,
          "descricao": "100-FIBRA-CLONE-TEST",
          "valor": 100,
          "nome_radius": "HUBSOFT-SERVICE-1303",
          "display": "100-FIBRA-CLONE-TEST - (R$ 100.00) (INATIVO)",
          "velocidade_download": 150000,
          "velocidade_upload": 35000
        },
        {
          "id_servico": 1292,
          "descricao": "100GB-FIBRA-CLONADO",
          "valor": 100,
          "nome_radius": "HUBSOFT-SERVICE-1292",
          "display": "100GB-FIBRA-CLONADO - (R$ 100.00) (INATIVO)",
          "velocidade_download": 150000,
          "velocidade_upload": 35000
        },
        {
          "id_servico": 1417,
          "descricao": "100GB-FIBRA-CLONE-imprimir-carne",
          "valor": 80,
          "nome_radius": "HUBSOFT-SERVICE-1417",
          "display": "100GB-FIBRA-CLONE-imprimir-carne - (R$ 80.00) (INATIVO)",
          "velocidade_download": 150000,
          "velocidade_upload": 35000
        },
        {
          "id_servico": 1410,
          "descricao": "100GB-FIBRA-XPTO",
          "valor": 80,
          "nome_radius": "HUBSOFT-SERVICE-1410",
          "display": "100GB-FIBRA-XPTO - (R$ 80.00) (INATIVO)",
          "velocidade_download": 150000,
          "velocidade_upload": 35000
        },
        {
          "id_servico": 1394,
          "descricao": "100MB + HBO",
          "valor": 100,
          "nome_radius": "HUBSOFT-SERVICE-1394",
          "display": "100MB + HBO - (R$ 100.00) (INATIVO)",
          "velocidade_download": 150000,
          "velocidade_upload": 35000
        },
        {
          "id_servico": 1384,
          "descricao": "100MB-FIBRA + PACOTE",
          "valor": 100,
          "nome_radius": "HUBSOFT-SERVICE-1384",
          "display": "100MB-FIBRA + PACOTE - (R$ 100.00) (INATIVO)",
          "velocidade_download": 150000,
          "velocidade_upload": 35000
        },
        {
          "id_servico": 1402,
          "descricao": "200 GB",
          "valor": 80,
          "nome_radius": "HUBSOFT-SERVICE-1402",
          "display": "200 GB - (R$ 80.00) (INATIVO)",
          "velocidade_download": 150000,
          "velocidade_upload": 35000
        },
        {
          "id_servico": 1272,
          "descricao": "20MB-TESTE1",
          "valor": 100,
          "nome_radius": "HUBSOFT-SERVICE-1272",
          "display": "20MB-TESTE1 - (R$ 100.00) (INATIVO)",
          "velocidade_download": 20000,
          "velocidade_upload": 10000
        },
        {
          "id_servico": 1260,
          "descricao": "2MB_WIRELESS",
          "valor": 59.9,
          "nome_radius": "HUBSOFT-SERVICE-1260",
          "display": "2MB_WIRELESS - (R$ 59.90) (INATIVO)",
          "velocidade_download": 2000,
          "velocidade_upload": 800
        },
        {
          "id_servico": 1275,
          "descricao": "30 MB FIBRA PLUS",
          "valor": 49.9,
          "nome_radius": "HUBSOFT-SERVICE-1275",
          "display": "30 MB FIBRA PLUS - (R$ 49.90) (INATIVO)",
          "velocidade_download": 2000,
          "velocidade_upload": 640
        },
        {
          "id_servico": 1301,
          "descricao": "5MB CONECTA 2",
          "valor": 89.9,
          "nome_radius": "HUBSOFT-SERVICE-1301",
          "display": "5MB CONECTA 2 - (R$ 89.90) (INATIVO)",
          "velocidade_download": 5192,
          "velocidade_upload": 5192
        },
        {
          "id_servico": 1,
          "descricao": "5MB-WIRELESS",
          "valor": 300,
          "nome_radius": "HUBSOFT-SERVICE-1",
          "display": "5MB-WIRELESS - (R$ 300.00) (INATIVO)",
          "velocidade_download": 7000,
          "velocidade_upload": 2000
        },
        {
          "id_servico": 1251,
          "descricao": "AOM - CNPJ - 02MB",
          "valor": 69.9,
          "nome_radius": "HUBSOFT-SERVICE-1251",
          "display": "AOM - CNPJ - 02MB - (R$ 69.90) (INATIVO)",
          "velocidade_download": 2048,
          "velocidade_upload": 1024
        },
        {
          "id_servico": 1330,
          "descricao": "COMBO 10 MB EM DOBRO FIXO E 3 CAMERAS RAP10",
          "valor": 254.9,
          "nome_radius": "HUBSOFT-SERVICE-1330",
          "display": "COMBO 10 MB EM DOBRO FIXO E 3 CAMERAS RAP10 - (R$ 254.90) (INATIVO)",
          "velocidade_download": 20480,
          "velocidade_upload": 4096
        },
        {
          "id_servico": 1324,
          "descricao": "COMBO 50 MB FIXO E 1 CAMERA RAP10",
          "valor": 274.9,
          "nome_radius": "HUBSOFT-SERVICE-1324",
          "display": "COMBO 50 MB FIXO E 1 CAMERA RAP10 - (R$ 274.90) (INATIVO)",
          "velocidade_download": 51200,
          "velocidade_upload": 10240
        },
        {
          "id_servico": 1308,
          "descricao": "PLANO 10 MBPS + IP FIXO",
          "valor": 129.9,
          "nome_radius": "HUBSOFT-SERVICE-1308",
          "display": "PLANO 10 MBPS + IP FIXO - (R$ 129.90) (INATIVO)",
          "velocidade_download": 10240,
          "velocidade_upload": 2048
        },
        {
          "id_servico": 1318,
          "descricao": "PLANO 10 MBPS RAP10 E FIXO EM DOBRO",
          "valor": 129.9,
          "nome_radius": "HUBSOFT-SERVICE-1318",
          "display": "PLANO 10 MBPS RAP10 E FIXO EM DOBRO - (R$ 129.90) (INATIVO)",
          "velocidade_download": 20480,
          "velocidade_upload": 4096
        },
        {
          "id_servico": 1319,
          "descricao": "PLANO 25 MBPS RAP10 E FIXO EM DOBRO",
          "valor": 169.9,
          "nome_radius": "HUBSOFT-SERVICE-1319",
          "display": "PLANO 25 MBPS RAP10 E FIXO EM DOBRO - (R$ 169.90) (INATIVO)",
          "velocidade_download": 51200,
          "velocidade_upload": 10240
        }
      ]
    }

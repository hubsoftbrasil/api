Consultar
============

**Necessário**

Para fazer requisições nos dados de ordem de serviço, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

A requisição de consulta da ordem de serviço, deve ser feita na rota::

	/api/v1/integracao/ordem_servico/consultar

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/ordem_servico/agendar

**Endpoint (Rota)**

Neste endpoint, será possível consultar ordens de serviço, obtendo o retorno no formato JSON como resposta. Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  consulta
      -  Parametro que será utilizado para encontrar uma O.S. pelo seu número ou nome do cliente
      -  Sim

   *  -  data_inicio
      -  Data inicial de referência para consulta de ordens de serviço em um intervalo
      -  Sim

   *  -  data_fim
      -  Data final de referência para consulta de ordens de serviço em um intervalo
      -  Sim

   *  -  tipo_data
      -  O tipo de data poderá ser: data_cadastro, data_inicio_programado, data_inicio_executado, data_termino_programado, data_termino_executado
      -  Não

   *  -  order_by
      -  A ordenação poderá ser: data_cadastro, data_inicio_programado, data_inicio_executado, data_termino_programado, data_termino_executado
      -  Não

   *  -  order_by_key
      -  A ordenação poderá ser: crescente (ASC) ou decrescenter (DESC) 
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_ordem_servico
      -  Número Inteiro
      -  Nenhum

   *  -  consulta
      -  Texto ou número inteiro
      -  Nenhum

   *  -  data_inicio
      -  Formato timestamp (2020-01-01 00:00:00)
      -  Nenhum

   *  -  data_fim
      -  Formato timestamp (2020-01-01 00:00:00)
      -  Nenhum

   *  -  tipo_data
      -  Texto
      -  data_inicio_programado

   *  -  order_by
      -  Texto
      -  data_inicio_programado

   *  -  order_by_key
      -  Texto
      -  desc

Exemplo de requisição POST na rota de consulta da ordem de serviço::

    curl -X POST 
    --header "Accept:application/json"
    --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
    https://endereco_servidor/api/v1/integracao/ordem_servico/consultar -d 
    '{
        "consulta": "Guilherme",
        "data_inicio": "2020-11-01 00:00:00",
        "data_fim": "2020-11-20 23:59:59",
        "tipo_data": "data_inicio_programado",
        "order_by_key": "asc",
        "order_by": "data_inicio_programado"
    }' -k


Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

    {
        "consulta": "Guilherme",
        "data_inicio": "2020-11-01 00:00:00",
        "data_fim": "2020-11-20 23:59:59",
        "tipo_data": "data_inicio_programado",
        "order_by_key": "asc",
        "order_by": "data_inicio_programado"
    }

Retorno da requisição POST::

    {
      "status": "success",
      "msg": "Dados consultados com sucesso",
      "ordens_servico": [
        {
          "id_ordem_servico": 1493,
          "numero": "1262",
          "tipo": "INSTALAÇÃO FIBRA - VALORES OBRIGATÓRIOS: R$ 280.00",
          "data_inicio_programado": "2020-11-18 08:00:00",
          "data_termino_programado": "2020-11-18 09:00:00",
          "data_inicio_executado": null,
          "data_termino_executado": null,
          "data_cadastro": "2020-11-18 13:35:31",
          "descricao_abertura": "TESTE",
          "descricao_servico": "TESTE",
          "descricao_fechamento": null,
          "status": "Aguardando Agendamento",
          "tecnicos": [
            {
              "id": 4,
              "name": "Guilherme Couto",
              "pivot": {
                "id_ordem_servico": 1493,
                "id_usuario": 4
              }
            }
          ],
          "disponibilidade": "Manhã, Tarde",
          "cliente": "(1395) GUILHERME COUTO",
          "servico": "(1) PLANO 5 MBPS RAP10 E FIXO EM DOBRO",
          "endereco_instalacao": "PRAÇA GETÚLIO VARGAS, 77, SALA 411(SHOPPING WORK) - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000"
        }
      ]
    }

Remover Agendamento
============

**Necessário**

Para fazer requisições nos dados de ordem de serviço, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

A requisição de remoção de agendamento da ordem de serviço, deve ser feita na rota::

	/api/v1/integracao/ordem_servico/remove_agendamento

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/ordem_servico/remove_agendamento

.. ::note

    Para remoção de agendamento é necessário informar um identificador dos motivos de remoção do agendamento cadastrados no sistema. Os motivos de remoção de agendamento podem ser obtidos no endpoint: /api/v1/integracao/ordem_servico/create

**Endpoint (Rota)**

Neste endpoint, será possível remover o agendamento da ordem de serviço, obtendo o retorno no formato JSON como resposta. Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_ordem_servico
      -  Identificador da ordem de serviço
      -  Sim

   *  -  id_motivo_remocao_agendamento
      -  Identificador do motivo de remoção de agendamento
      -  Sim

   *  -  observacao
      -  Textual (Mínimo de 10 caracteres)
      -  Sim

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_ordem_servico
      -  Número Inteiro
      -  Nenhum

   *  -  id_motivo_remocao_agendamento
      -  Número Inteiro
      -  Nenhum

   *  -  observacao
      -  Texto
      -  Nenhum

Exemplo de requisição POST na rota de consulta da ordem de serviço::

    curl -X POST 
    --header "Accept:application/json"
    --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
    https://endereco_servidor/api/v1/integracao/ordem_servico/reagendar -d 
    '{
	"id_ordem_servico": "1493",
	"id_motivo_remocao_agendamento": "8",
	"observacao": "Cliente pediu para ir no dia seguinte."
    }' -k

Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

    {
        "id_ordem_servico": "1493",
        "id_motivo_remocao_agendamento": "8",
        "observacao": "Cliente pediu para ir no dia seguinte."
    }

Retorno da requisição POST::

    {
      "status": "success",
      "msg": "Remoção do agendamento feito com sucesso",
      "ordem_servico": {
        "id_ordem_servico": 1493,
        "numero": "1262",
        "tipo": "INSTALAÇÃO FIBRA - VALORES OBRIGATÓRIOS: R$ 280.00",
        "data_inicio_programado": "2020-11-23 08:00:00",
        "data_termino_programado": "2020-11-23 09:30:00",
        "data_inicio_executado": null,
        "data_termino_executado": null,
        "data_cadastro": "2020-11-18 13:35:31",
        "descricao_abertura": "TESTE",
        "descricao_servico": "TESTE",
        "descricao_fechamento": null,
        "status": "Aguardando Agendamento",
        "tecnicos": [
          {
            "id": 1,
            "name": "Master",
            "pivot": {
              "id_ordem_servico": 1493,
              "id_usuario": 1
            }
          }
        ],
        "disponibilidade": "Manhã, Tarde",
        "cliente": "(1395) GUILHERME COUTO",
        "servico": "(1) PLANO 5 MBPS RAP10 E FIXO EM DOBRO",
        "endereco_instalacao": "PRAÇA GETÚLIO VARGAS, 77, SALA 411(SHOPPING WORK) - CENTRO, SANTO ANTÔNIO DO MONTE\/MG | CEP: 35560-000"
      }
    }

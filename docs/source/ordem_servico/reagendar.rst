Reagendar
============

**Necessário**

Para fazer requisições nos dados de ordem de serviço, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

A requisição de reagendamento da ordem de serviço, deve ser feita na rota::

	/api/v1/integracao/ordem_servico/reagendar

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/ordem_servico/reagendar

**Endpoint (Rota)**

Neste endpoint, será possível reagendar a ordem de serviço, obtendo o retorno no formato JSON como resposta. Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_ordem_servico
      -  Identificador da ordem de serviço
      -  Sim

   *  -  data_inicio_programado
      -  Data inicial programada para iniciar a execução da ordem de serviço
      -  Sim

   *  -  hora_inicio_programado
      -  Hora inicial programada para iniciar a execução da ordem de serviço
      -  Sim

   *  -  data_termino_programado
      -  Data final programada para finalizar a execução da ordem de serviço
      -  Sim

   *  -  hora_termino_programado
      -  Hora final programada para finalizar a execução da ordem de serviço
      -  Sim

   *  -  id_usuario_antigo
      -  Identificador do usuário (técnico) responsável pela ordem de serviço
      -  Sim, se o id_usuario_novo for especificado

   *  -  id_usuario_novo
      -  Identificador do usuário (técnico) responsável pela ordem de serviço
      -  Sim, se o id_usuario_antigo for especificado

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_ordem_servico
      -  Número Inteiro
      -  Nenhum

   *  -  data_inicio_programado
      -  Timestamp (2020-01-01)
      -  Nenhum

   *  -  hora_inicio_programado
      -  Texto (12:00:00)
      -  Nenhum

   *  -  data_termino_programado
      -  Texto (2020-01-01)
      -  Nenhum

   *  -  hora_termino_programado
      -  Texto (13:00:00)
      -  Nenhum

   *  -  id_usuario_antigo
      -  Número Inteiro
      -  Nenhum

   *  -  id_usuario_novo
      -  Número Inteiro
      -  Nenhum

Exemplo de requisição POST na rota de consulta da ordem de serviço::

    curl -X POST 
    --header "Accept:application/json"
    --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
    https://endereco_servidor/api/v1/integracao/ordem_servico/reagendar -d 
    '{
	"id_ordem_servico": "1493",
	"data_inicio_programado": "2020-11-23",
	"hora_inicio_programado": "08:00:00",
	"data_termino_programado": "2020-11-23",
	"hora_termino_programado": "09:30:00",
	"id_usuario_antigo": 4,
	"id_usuario_novo": 1
    }' -k


Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

    {
        "id_ordem_servico": "1493",
        "data_inicio_programado": "2020-11-23",
        "hora_inicio_programado": "08:00:00",
        "data_termino_programado": "2020-11-23",
        "hora_termino_programado": "09:30:00",
        "id_usuario_antigo": 4,
        "id_usuario_novo": 1
    }

Retorno da requisição POST::

    {
      "status": "success",
      "msg": "Reagendamento salvo com sucesso",
      "ordem_servico": {
        "id_ordem_servico": 1493,
        "numero": "1262",
        "tipo": "INSTALAÇÃO FIBRA - VALORES OBRIGATÓRIOS: R$ 280.00",
        "data_inicio_programado": "2020-11-23 08:00",
        "data_termino_programado": "2020-11-23 09:30",
        "data_inicio_executado": null,
        "data_termino_executado": null,
        "data_cadastro": "2020-11-18 13:35:31",
        "descricao_abertura": "TESTE",
        "descricao_servico": "TESTE",
        "descricao_fechamento": null,
        "status": "Pendente",
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

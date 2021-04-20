Consulta (Todos os Atendimentos - Com Paginação)
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação).

As requisições de atendimentos, devem ser feitos na rota::

	/api/v1/integracao/atendimento/paginado/{quantidade}?page={numero_pagina}
  
**O parâmetro quantidade indica quantos itens serão retornados por página. E o parâmetro numero_pagina indica qual pagina será consultada na requisição**

O endereço completo, ficará da seguinte forma::

  https://endereco_do_servidor/api/v1/integracao/atendimento/paginado/10?page=1
  
**POST**

No método POST, irá consultar os dados dos atendimentos e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  data_inicio
      -  Data de Cadastro Inicial
      -  Sim

   *  -  data_fim
      -  Data de Cadastro Final
      -  Sim
      
Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  data_inicio
      -  Valor no formato DateTime (YYYY-MM-DD)
      -  Nenhum

   *  -  data_fim
      -  Valor no formato DateTime (YYYY-MM-DD) Obs: Maior ou igual data_inicio
      -  Nenhum

Exemplo de requisição POST na rota de atendimentos::

        curl --request POST \
          --url 'http://endereco_servidor/api/v1/integracao/atendimento/paginado/5?page=1' \
          --header 'Accept: application/json' \
          --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O \
          --header 'Content-Type: application/json' \
          --data '{
          "data_inicio":"2021-04-10",
          "data_fim":"2021-04-15"
        }'

Retorno da requisição POST::

        {
          "status": "success",
          "msg": "Dados consultados com sucesso",
          "atendimentos": {
            "current_page": 2,
            "data": [
              {
                "id_atendimento": 2364,
                "protocolo": "202104151321184",
                "id_cliente_servico": 11883,
                "id_tipo_atendimento": 132,
                "id_usuario_abertura": 1129,
                "id_usuario_fechamento": null,
                "descricao_abertura": "ir no cliente com urgência",
                "descricao_fechamento": null,
                "data_cadastro": "2021-04-15 13:24:14",
                "data_fechamento": null,
                "ip_cadastro": "177.22.5.2",
                "id_usuario_responsavel": null,
                "id_setor_responsavel": null,
                "destino": "usuario",
                "status_fechamento": null,
                "id_motivo_fechamento_atendimento": null,
                "id_atendimento_status": 22,
                "nome_contato": "JULIO CESAR ANANIAS",
                "telefone_contato": "37988469145",
                "email_contato": "naotem@naotem.com.br",
                "rascunho": false,
                "deleted_at": null,
                "id_origem_contato": null,
                "avaliacao": null,
                "comentario_avaliacao": null,
                "push_notification_enviado": false,
                "ordem_servico_count": 1,
                "anexos_count": 1,
                "ingressado": false,
                "data_cadastro_br": "15\/04\/2021 13:24",
                "data_cadastro_timestamp": 1618503854000,
                "data_fechamento_br": null,
                "data_fechamento_timestamp": null,
                "minutos_em_aberto": 5945,
                "tempo_restante": "-98h 5min",
                "percentual_tempo_restante": 0,
                "percentual_color_class": "white-fg md-red-bg",
                "status": {
                  "id_atendimento_status": 22,
                  "prefixo": "pendente",
                  "descricao": "Pendente",
                  "cor": "md-purple-900-bg",
                  "abrir_ordem_servico": true,
                  "display": "Pendente (Abertura de OS)"
                },
                "tipo_atendimento": {
                  "id_tipo_atendimento": 132,
                  "descricao": "FINANCEIRO"
                },
                "cliente_servico": {
                  "id_cliente_servico": 11883,
                  "id_cliente": 11357,
                  "id_servico": 1208,
                  "endereco_numero_completo": "RUA PEDRO F DE OLIVEIRA, 55, CH BARRETOS - BARRETOS, NOVA SERRANA\/MG | CEP: 35519-000",
                  "cliente": {
                    "id_cliente": 11357,
                    "ativo": true,
                    "codigo_cliente": 577,
                    "nome_razaosocial": "JULIO CESAR ANANIAS",
                    "display": "(577) JULIO CESAR ANANIAS"
                  }
                },
                "usuarios_responsaveis": []
              },
              {
                "id_atendimento": 2362,
                "protocolo": "202104150938230",
                "id_cliente_servico": 15871,
                "id_tipo_atendimento": 126,
                "id_usuario_abertura": 1131,
                "id_usuario_fechamento": null,
                "descricao_abertura": "INSTALAR PONTO NOVO",
                "descricao_fechamento": null,
                "data_cadastro": "2021-04-15 09:38:23",
                "data_fechamento": null,
                "ip_cadastro": null,
                "id_usuario_responsavel": null,
                "id_setor_responsavel": null,
                "destino": "usuario",
                "status_fechamento": null,
                "id_motivo_fechamento_atendimento": null,
                "id_atendimento_status": 22,
                "nome_contato": "GLEIDSON PEREIRA TORRES",
                "telefone_contato": "83996555702",
                "email_contato": "gleidson@alsol.com.br",
                "rascunho": false,
                "deleted_at": null,
                "id_origem_contato": 2,
                "avaliacao": null,
                "comentario_avaliacao": null,
                "push_notification_enviado": false,
                "ordem_servico_count": 0,
                "anexos_count": 0,
                "ingressado": false,
                "data_cadastro_br": "15\/04\/2021 09:38",
                "data_cadastro_timestamp": 1618490303000,
                "data_fechamento_br": null,
                "data_fechamento_timestamp": null,
                "minutos_em_aberto": 6171,
                "tempo_restante": "-101h 51min",
                "percentual_tempo_restante": 0,
                "percentual_color_class": "white-fg md-red-bg",
                "status": {
                  "id_atendimento_status": 22,
                  "prefixo": "pendente",
                  "descricao": "Pendente",
                  "cor": "md-purple-900-bg",
                  "abrir_ordem_servico": true,
                  "display": "Pendente (Abertura de OS)"
                },
                "tipo_atendimento": {
                  "id_tipo_atendimento": 126,
                  "descricao": "ATIVAÇÃO FIBRA ÓPTICA"
                },
                "cliente_servico": {
                  "id_cliente_servico": 15871,
                  "id_cliente": 24532,
                  "id_servico": 2610,
                  "endereco_numero_completo": "RUA ALZIRA PEREIRA DE MELO, 181, CASA VERMELHA(VIZINHO A MERCEARIA DA SAMARA) - JARDIM PLANALTO, CATOLÉ DO ROCHA\/PB | CEP: 58884-000",
                  "cliente": {
                    "id_cliente": 24532,
                    "ativo": true,
                    "codigo_cliente": 1679,
                    "nome_razaosocial": "GLEIDSON PEREIRA TORRES",
                    "display": "(1679) GLEIDSON PEREIRA TORRES"
                  }
                },
                "usuarios_responsaveis": [
                  {
                    "id": 1131,
                    "name": "Gleidson Torres",
                    "id_imagem_upload": null,
                    "pivot": {
                      "id_atendimento": 2362,
                      "id_usuario": 1131
                    },
                    "imagem": null
                  }
                ]
              }
            ],
            "first_page_url": "http:\/\/localhost:8000\/api\/v1\/integracao\/atendimento\/paginado\/2?page=1",
            "from": 3,
            "last_page": 5,
            "last_page_url": "http:\/\/localhost:8000\/api\/v1\/integracao\/atendimento\/paginado\/2?page=5",
            "next_page_url": "http:\/\/localhost:8000\/api\/v1\/integracao\/atendimento\/paginado\/2?page=3",
            "path": "http:\/\/localhost:8000\/api\/v1\/integracao\/atendimento\/paginado\/2",
            "per_page": 2,
            "prev_page_url": "http:\/\/localhost:8000\/api\/v1\/integracao\/atendimento\/paginado\/2?page=1",
            "to": 4,
            "total": 10
          },
          "cliente": null
        }

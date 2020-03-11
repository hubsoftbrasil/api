Editar Atendimento
============

**Necessário**

Para fazer requisições nos dados de atendimento, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de atendimento, devem ser feitos na rota::

	/api/v1/integracao/atendimento

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/atendimento/1

**PUT**

No método PUT, será possível editar e fechar os atendimentos em abertos dos clientes e obter o retorno no formato JSON como resposta. Os segintes parâmetros podem/devem estar presentes no corpo do requisição:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  descricao
      -  Descrição de abertura do atendimento (Opcional)
      -  Não

   *  -  fechar_atendimento
      -  Indica se deve ser fechado os atendimento e suas ordens de serviço
      -  Sim

   *  -  parametros
      -  Objeto JSON que poderá conter qualquer informação da integração
      -  Sim

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  descricao
      -  Texto
      -  Nenhum

   *  -  fechar_atendimento
      -  Boolean ( Verdadeiro ou Falso )
      -  false

   *  -  parametros
      -  Array Associativo, JSON
      -  Nenhum

Exemplo de requisição PUT na rota de edição do atendimento::

	curl -X PUT 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/atendimento/1 -d '{"parametros": { "url_ligacao": "https://www.meusite.com.br/ligacao/3", "empresa": "NeWave", "xpto": 123456 }, "fechar_atendimento": true }' -k


Veja que os paramêtros enviados na requisição PUT devem obedecer a estrutura no formato JSON::

        {
            "parametros": {
                    "url_ligacao": "https://www.meusite.com.br/ligacao/3",
                    "empresa": "NeWave",
                    "xpto": 123456
            },
            "fechar_atendimento": true
        }

Retorno da requisição PUT::

        {
          "status": "success",
          "msg": "Atendimento atualizado com sucesso",
          "atendimento": {
            "id_atendimento": 1114,
            "protocolo": "202003051452007",
            "id_cliente_servico": 13677,
            "id_tipo_atendimento": 44,
            "id_usuario_abertura": 56,
            "id_usuario_fechamento": 1,
            "descricao_abertura": "INSTALAÇÃO NOVA",
            "descricao_fechamento": "Fechamento automático.",
            "data_cadastro": "2020-03-05 14:52:00",
            "data_fechamento": "2020-03-11 09:56:10",
            "ip_cadastro": null,
            "id_usuario_responsavel": 22,
            "id_setor_responsavel": null,
            "destino": "usuario",
            "status_fechamento": "concluido",
            "id_motivo_fechamento_atendimento": 5,
            "id_atendimento_status": 24,
            "resultado_diagnostico": null,
            "nome_contato": "TESTE APRESENT",
            "telefone_contato": "3734151100",
            "email_contato": null,
            "rascunho": false,
            "deleted_at": null,
            "id_origem_contato": null,
            "avaliacao": null,
            "comentario_avaliacao": null,
            "push_notification_enviado": false,
            "data_cadastro_br": "05\/03\/2020 14:52",
            "data_cadastro_timestamp": 1583430720000,
            "data_fechamento_br": "11\/03\/2020 09:56",
            "data_fechamento_timestamp": 1583931370000,
            "minutos_em_aberto": 8344,
            "tempo_restante": "-138h 4min",
            "percentual_tempo_restante": 0,
            "percentual_color_class": "white-fg md-red-bg"
          }
        }
        
.. ::note

    É necessário fornecer o ID do atendimento na rota da requisição.

Financeiro > Envio por Email
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/financeiro/enviar_email

**POST**

No método POST, será possível fazer o disparo da fatura do cliente por e-mail. Podem ser passados emails adicionais, além dos que já estão cadastrados no sistema.

.. warning::

	IMPORTANTE: O sistema vai fazer a validação dos dados de e-mail e verificar se a API possui um servidor de e-mail válido configurado. Caso todas as regras sejam atendidas, o disparo do e-mail será efetuado instantaneamente, ou seja, é enviado em tempo real. Por esse motivo, o tempo de resposta da API, irá variar de acordo com a quantidade de e-mails que está na requisição para ser disparado.

.. warning::

	IMPORTANTE 2: O(s) servidor(es) de e-mails configurados no HubSoft possuem configuração de timeout entre um disparo e outro, dessa forma evita-se que o servidor seja adicionado em BlackLists de SPAM. Por esse motivo, a chamada da API, poderá ter um tempo de resposta diferente do comum.

**Atributos da Requisição**

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_fatura
      -  Identificador único da fatura do cliente
      -  Sim

   *  -  email_adicional
      -  Outros e-mails adicionais, podem ser enviados na requisição.
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_fatura
      -  Deve conter um número inteiro maior que 0
      -  Nenhum

   *  -  email_adicional
      -  Deve conter um array de strings (emails)
      -  Nenhum

Exemplo de requisição POST na rota do envio de e-mail::

	curl -X POST 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/financeiro/enviar_email -d '{"id_fatura":"11000", "email_adicional":["email1@email.com","email2@email.com"]}' -k

Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
		"id_fatura":"11000",
		"email_adicional":[
			"email1@email.com",
			"email2@email.com"
		]
	}

Retorno da requisição POST::

    {
        "status": "success",
        "msg": "As faturas foram adicionadas para serem disparadas por e-mail. Por se tratar de um processo de envio massivo, o sistema fará o agendamento do disparo. Dentro de alguns minutos o cliente irá receber os e-mails com as faturas. OBS: Para cada fatura selecionada será enviado um e-mail",
        "job": {
            "tries": 1,
            "timeout": 172800,
            "memory": 2048,
            "faturas": [
                {
                    "id_fatura": 50949
                }
            ],
            "emails": [
                {
                    "id_contato": null,
                    "id_cliente": 12025,
                    "email": "macielrsf@gmail.com",
                    "nome": "MACIEL RODRIGUES",
                    "name": "MACIEL RODRIGUES",
                    "permite_enviar_email": true,
                    "origem": "cadastro_cliente"
                },
                {
                    "id_contato": null,
                    "id_cliente": 12025,
                    "email": "macielrsf@gmail.com",
                    "nome": "MACIEL RODRIGUES",
                    "name": "MACIEL RODRIGUES",
                    "permite_enviar_email": true,
                    "origem": "cadastro_cliente"
                },
                {
                    "id_contato": 12035,
                    "id_cliente": 12025,
                    "email": "macielrsf@gmail.com",
                    "nome": "MACIEL RODRIGUES",
                    "name": "MACIEL RODRIGUES",
                    "permite_enviar_email": "sim",
                    "origem": "contato"
                }
            ],
            "connection": null,
            "queue": "hubsoft-prioritario",
            "delay": {
                "date": "2019-10-07 13:39:48.000000",
                "timezone_type": 3,
                "timezone": "America/Sao_Paulo"
            }
        }
    }

.. note::

	OBSERVAÇÃO: Perceba que foram enviados 2 e-mails adicionais, porém o sistema fez um disparo de 3 emails. Isso aconteceu, pois o cliente já possuia 1 endereço de e-mail em seu cadastro. No momento do disparo, o sistema enviou para os e-mails já cadastrados no sistema e também para os telefones adicionais passados na requisição POST

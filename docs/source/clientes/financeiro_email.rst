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

:id_fatura: (OBRIGATÓRIO) Identificador único da fatura do cliente
:email_adicional: (OPCIONAL). Outros e-mails adicionais, podem ser enviados na requisição.

Os atributos podem conter os seguintes valores:

:id_cliente_servico: (OBRIGATÓRIO) Deve conter um número inteiro maior que 0
:email_adicional: Deve conter um array de strings (emails)

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
	    "msg": "Um total de 3/3 email(s) foram enviados com sucesso",
	    "emails_enviados": [
	        {
	            "id_cliente": 12013,
	            "id_usuario": null,
	            "id_usuario_envio": 1,
	            "host": "mx1.weblink.com.br",
	            "email_origem": "teste@hubsoft.com.br",
	            "email_destino": "biancacouto16@gmail.com",
	            "tipo_envio": "manual",
	            "tipo_documento": "fatura",
	            "data_envio": "2019-01-10 08:59:15",
	            "lido": false,
	            "id_email_enviado": 278,
	            "data_envio_br": "10/01/2019 08:59",
	            "data_envio_timestamp": 1547117955000
	        },
	        {
	            "id_cliente": 12013,
	            "id_usuario": null,
	            "id_usuario_envio": 1,
	            "host": "smtp.isimples.com.br",
	            "email_origem": "hubsoftteste@isimples.com.br",
	            "email_destino": "email1@email.com",
	            "tipo_envio": "manual",
	            "tipo_documento": "fatura",
	            "data_envio": "2019-01-10 08:59:15",
	            "lido": false,
	            "id_email_enviado": 279,
	            "data_envio_br": "10/01/2019 08:59",
	            "data_envio_timestamp": 1547117955000
	        },
	        {
	            "id_cliente": 12013,
	            "id_usuario": null,
	            "id_usuario_envio": 1,
	            "host": "mx1.weblink.com.br",
	            "email_origem": "teste@hubsoft.com.br",
	            "email_destino": "email2@email.com",
	            "tipo_envio": "manual",
	            "tipo_documento": "fatura",
	            "data_envio": "2019-01-10 08:59:59",
	            "lido": false,
	            "id_email_enviado": 280,
	            "data_envio_br": "10/01/2019 08:59",
	            "data_envio_timestamp": 1547117999000
	        }
	    ]
	}

.. note::

	OBSERVAÇÃO: Perceba que foram enviados 2 e-mails adicionais, porém o sistema fez um disparo de 3 emails. Isso aconteceu, pois o cliente já possuia 1 endereço de e-mail em seu cadastro. No momento do disparo, o sistema enviou para os e-mails já cadastrados no sistema e também para os telefones adicionais passados na requisição POST
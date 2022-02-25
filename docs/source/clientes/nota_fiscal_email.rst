Fiscal > Nota Fiscal > Envio por Email
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/nota_fiscal/enviar_email

**POST**

No método POST, será possível fazer o disparo da nota fiscal do cliente por e-mail. Podem ser passados emails adicionais, além dos que já estão cadastrados no sistema.

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

   *  -  id_nota_fiscal
      -  Identificador único da nota fiscal
      -  Sim

  *  -   tipo_documento
      -  Tipo de documento
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

   *  -  id_nota_fiscal
      -  Identificado da Nota, pode ser obtido na consulta de notas fiscais do cliente
      -  Nenhum

  *   -  tipo_documento
      -  nf_telecom,nfe,nfse
      -  Nenhum

   *  -  email_adicional
      -  Deve conter um array de strings (emails)
      -  Nenhum

Exemplo de requisição POST na rota do envio de e-mail::

	curl -X POST 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
  --header "Content-Type: application/json"
	https://endereco_servidor/api/v1/integracao/cliente/nota_fiscal/enviar_email -d '{"id_nota_fiscal":"123","tipo_documento":"nfe", "email_adicional":["email1@email.com"]}' -k

Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
		"id_nota_fiscal":"123",
    "tipo_documento":"nfe",
		"email_adicional":[
			"email1@email.com"
		]
	}

Retorno da requisição POST::

  {
    "status": "success",
    "msg": "Um total de 2/3 email(s) foram enviados com sucesso",
    "emails_enviados": [
        {
            "id_cliente": 23285,
            "id_usuario": 1,
            "id_usuario_envio": 915,
            "host": "smtp.mailtrap.io",
            "email_origem": "b860cbd1ea1dca",
            "email_destino": "naotem@naotem.com.br",
            "tipo_envio": "manual",
            "tipo_documento": "nota_fiscal_produto",
            "data_envio": "2022-02-25 09:59:46",
            "enviado": true,
            "mensagem_erro": null,
            "id_email_enviado": 1416,
            "data_envio_br": "25/02/2022 09:59",
            "data_envio_timestamp": 1645793986000
        },
        {
            "id_cliente": 23285,
            "id_usuario": 1,
            "id_usuario_envio": 915,
            "host": "smtp.mailtrap.io",
            "email_origem": "b860cbd1ea1dca",
            "email_destino": "guilherme@hubsoft.com.br",
            "tipo_envio": "manual",
            "tipo_documento": "nota_fiscal_produto",
            "data_envio": "2022-02-25 10:00:30",
            "enviado": true,
            "mensagem_erro": null,
            "id_email_enviado": 1417,
            "data_envio_br": "25/02/2022 10:00",
            "data_envio_timestamp": 1645794030000
        }
    ]
  }

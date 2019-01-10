Financeiro > Envio por SMS
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/financeiro/enviar_sms

**POST**

No método POST, será possível fazer o disparo da fatura do cliente por SMS. Podem ser passados números de telefones adicionais, além dos que já estão cadastrados no sistema.

.. warning::

	IMPORTANTE: O disparo do SMS é efetuado para a Plataforma de SMS. Caso o HubSoft consiga entregar o SMS para plataforma, o resultado da requisição será uma resposta de SUCESSO, mesmo que a plataforma não efetue o disparo, para o HubSoft a tarefa foi efetuada com sucesso. 

**Atributos da Requisição**

:id_fatura: (OBRIGATÓRIO) Identificador único da fatura do cliente
:telefone_adicional: (OPCIONAL). Outros telefones adicionais, podem ser enviados na requisição.

Os atributos podem conter os seguintes valores:

:id_cliente_servico: (OBRIGATÓRIO) Deve conter um número inteiro maior que 0
:telefone_adicional: Deve conter um array de strings com os telefones no formato DDNNNNNNNN ou DDNNNNNNNNN

Exemplo de requisição POST na rota do envio de e-mail::

	curl -X POST --header "Accept:application/json" https://endereco_servidor/api/v1/integracao/cliente/financeiro/enviar_sms -d '{"id_fatura":"11000", "telefone_adicional":["11988887777","1188887776"]}' -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"

Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
		"id_fatura":"11000",
		"email_adicional":[
			"11988887777",
			"1188887776"
		]
	}

Retorno da requisição POST::

	{
	    "status": "success",
	    "msg": "Um total de 3/3 SMS foram enviados com sucesso",
	    "sms_enviados": [
	        {
	            "id_cliente": 12013,
	            "telefone": "5537999999999",
	            "conteudo": "HUBSOFT%3A+Ola+BIANCA%2C+sua+fatura+com+valor+80.00%2C+vence+em+08-01-2019.+Codigo+de+Barras%3A+75691.31662+01006.726101+27660.830012+4+77650000008170",
	            "status": "enviado_para_gateway"
	        },
	        {
	            "id_cliente": 12013,
	            "telefone": "11988887777",
	            "conteudo": "HUBSOFT%3A+Ola+BIANCA%2C+sua+fatura+com+valor+80.00%2C+vence+em+08-01-2019.+Codigo+de+Barras%3A+75691.31662+01006.726101+27660.830012+4+77650000008170",
	            "status": "enviado_para_gateway"
	        },
	        {
	            "id_cliente": 12013,
	            "telefone": "1188887776",
	            "conteudo": "HUBSOFT%3A+Ola+BIANCA%2C+sua+fatura+com+valor+80.00%2C+vence+em+08-01-2019.+Codigo+de+Barras%3A+75691.31662+01006.726101+27660.830012+4+77650000008170",
	            "status": "enviado_para_gateway"
	        },
	    ]
	}

.. note::

	OBSERVAÇÃO: Perceba que foram enviados 2 telefones adicionais, porém o sistema fez um disparo de 3 SMS. Isso aconteceu, pois o cliente já possuia 1 número de telefone celular válido em seu cadastro. No momento do disparo, o sistema enviou para os telefones já cadastrados no sistema e também para os telefones adicionais passados na requisição POST
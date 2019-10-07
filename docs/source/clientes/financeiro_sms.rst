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

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_fatura
      -  Identificador único da fatura do cliente
      -  Sim

   *  -  telefone_adicional
      -  Outros telefones adicionais, podem ser enviados na requisição.
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

   *  -  telefone_adicional
      -  Deve conter um array de strings com os telefones no formato DDNNNNNNNN ou DDNNNNNNNNN
      -  Nenhum

Exemplo de requisição POST na rota do envio de e-mail::

	curl -X POST 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/financeiro/enviar_sms -d '{"id_fatura":"11000", "telefone_adicional":["11988887777","1188887776"]}' -k

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
        "msg": "As faturas foram adicionadas para serem disparadas por SMS. Por se tratar de um processo de envio massivo, o sistema fará o agendamento do disparo. Dentro de alguns minutos o cliente irá receber as mensgens SMS com os dados das faturas. OBS: Para cada fatura selecionada será enviado um SMS",
        "job": {
            "tries": 1,
            "timeout": 172800,
            "memory": 2048,
            "faturas": [
                {
                    "id_fatura": 50949
                }
            ],
            "telefones": [
                {
                    "id_contato": null,
                    "id_cliente": 12025,
                    "telefone": "37999931412",
                    "nome": "MACIEL RODRIGUES",
                    "permite_enviar_sms": true,
                    "origem": "cadastro_cliente"
                }
            ],
            "connection": null,
            "queue": "teste",
            "delay": {
                "date": "2019-10-07 13:20:51.000000",
                "timezone_type": 3,
                "timezone": "America/Sao_Paulo"
            }
        }
    }

.. note::

	OBSERVAÇÃO: Perceba que foram enviados 2 telefones adicionais, porém o sistema fez um disparo de 3 SMS. Isso aconteceu, pois o cliente já possuia 1 número de telefone celular válido em seu cadastro. No momento do disparo, o sistema enviou para os telefones já cadastrados no sistema e também para os telefones adicionais passados na requisição POST

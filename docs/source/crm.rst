CRM
============

**Necessário**

Para fazer requisições nos dados de CRM, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação).
OBS: Essa rota irá retornar todos os dados de CRM.

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/crm/all

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/crm/all

**GET**

No método GET, irá consultar os dados dos CRM e retornar um JSON como resposta.
Retorno da requisição GET::

 {
    "status": "success",
    "msg": "Dados consultados com sucesso",
    "crms": [
        {
            "id_crm": 1,
            "nome": "CRM - VENDAS"
        },
        {
            "id_crm": 201,
            "nome": "TESTE INTEGRACAO API"
        }
    ]
 }

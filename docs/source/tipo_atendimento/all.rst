All (Todos os Tipos de Atendimento)
============

**Necessário**

Para fazer requisições nos dados de tipos de atendimento, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação).
OBS: Essa rota irá retornar todos os dados de tipos de atendimento.

As requisições de tipos de atendimento, devem ser feitos na rota::

	/api/v1/integracao/tipo_atendimento

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/tipo_atendimento

**GET**

No método GET, irá consultar os dados dos tipos de atendimento e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

Exemplo de requisição GET na rota de cliente::

    curl --request GET \
      --url http://endereco_do_servidor:8000/api/v1/integracao/tipo_atendimento \
      --header 'Accept: application/json' \
      --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O' \
      --header 'Content-Type: application/json'

Retorno da requisição GET::

      {
        "status": "success",
        "msg": "Dados consultados com sucesso",
        "tipos_atendimento": [
          {
            "id_tipo_atendimento": 109,
            "descricao": "SEM ACESSO A INTERNET"
          },
          {
            "id_tipo_atendimento": 111,
            "descricao": "OSCILAÇÃO\/QUEDAS DE CONEXÃO"
          }
        ],
        "encrypted": false
      }

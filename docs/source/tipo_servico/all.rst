All (Todos os Tipos de Serviço)
============

**Necessário**

Para fazer requisições nos dados de tipos de serviço, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação).
OBS: Essa rota irá retornar todos os dados de tipos de serviço.

As requisições de tipos de serviço, devem ser feitos na rota::

	/api/v1/integracao/configuracao/tipo_servico

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/configuracao/tipo_servico

**GET**

No método GET, irá consultar os dados dos tipos de serviço e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

Exemplo de requisição GET na rota de cliente::

    curl --request GET \
      --url http://endereco_do_servidor:8000/api/v1/integracao/tipo_servico \
      --header 'Accept: application/json' \
      --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O' \
      --header 'Content-Type: application/json'

Retorno da requisição GET::

      {
        "status": "success",
        "msg": "Dados consultados com sucesso",
        "tipos_servico": [
          {
            "id_tipo_servico": 3,
            "descricao": "Taxa de Instalação",
            "bloquear": true,
            "display": "Taxa de Instalação"
          },
          {
            "id_tipo_servico": 4,
            "descricao": "Ordem de Serviço",
            "bloquear": true,
            "display": "Ordem de Serviço"
          }
        ],
        "encrypted": false
      }

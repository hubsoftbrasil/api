Buscar Prospectos
============

**Necessário**

Para fazer requisições de busca de prospectos, é necessário que você já possua o TOKEN, adquirido na etapa (Autenticação)

As requisições devem ser feitos na rota::

	/api/v1/integracao/prospecto?busca=<valor_busca>

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/prospecto?busca=xpto


Rota e parâmetros da requisição
-----------

- A rota em questão é do tipo **GET** e é necessário informar o parâmetro **busca** no formato *query string*. 

    .. note::

        A busca irá funcionar apenas para o campo **Nome ou Razão Social** no banco de dados do HubSoft.



Respostas da requisição
-----------

As seguintes respostas podem ser obtidas de acordo com o que for informado na rota em questão:

**Casos de erro**

- Caso o parâmetro de busca seja omitido, a seguinte resposta será obtida::
  
    {
        "status": "error",
        "msg": "O campo busca é obrigatória"
    }

**Casos de sucesso**

- Caso o a busca encontre algum registro, a seguinte resposta será obtida::

   {
      "status": "success",
      "msg": "Dados consultados com sucesso",
      "prospectos": [
        {
          "id_prospecto": 100,
          "nome_razaosocial": "EMPRESA XPTO LTDA",
          "cpf_cnpj": "41483316000169",
          "email": null,
          "telefone": "3732818000",
          "observacao": null,
          "id_cliente": null,
          "id_endereco_numero": 33320,
          "created_at": "2020-07-28 10:27:56",
          "updated_at": "2020-07-28 10:27:56",
          "tipo_pessoa": "pj",
          "id_usuario": 1,
          "origem": "API",
          "created_at_br": "28\/07\/2020"
        }
      ]
    }

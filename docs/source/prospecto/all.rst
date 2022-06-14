All (Todos os Prospectos)
============

**Necessário**

Para fazer requisições nos dados de prospectos, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação).
OBS: Essa rota irá retornar todos os dados de prospectos, caso nenhum parâmetro seja enviado. Utilize com cautela.

As requisições de prospectos, devem ser feitos na rota::

	/api/v1/integracao/prospecto/all

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/prospecto/all

**GET**

No método GET, irá consultar os dados de prospectos e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  convertido
      -  Retornar prospectos convertidos
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  convertido
      -  sim,nao
      -  nao

Exemplo de requisição GET na rota de prospectos::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/prospecto/all?convertido=sim -k

Retorno da requisição GET::

  {
    "status": "success",
    "msg": "Dados consultados com sucesso",
    "prospectos": [
        {
            "id_prospecto": 3,
            "nome_razaosocial": "FULANO DE TAL",
            "cpf_cnpj": "54691185097",
            "email": null,
            "telefone": null,
            "observacao": null,
            "id_cliente": 23360,
            "id_endereco_numero": 34934,
            "created_at": "2020-02-20 08:52:44",
            "updated_at": "2020-02-20 17:53:45",
            "tipo_pessoa": "pf",
            "id_usuario": 1,
            "origem": "web",
            "rg": null,
            "telefone_secundario": null,
            "data_nascimento": null,
            "id_vendedor": null,
            "id_vencimento": null,
            "nome_pai": null,
            "nome_mae": null,
            "estado_civil": null,
            "genero": null,
            "nacionalidade": "brasileiro",
            "profissao": null,
            "created_at_br": "20/02/2020"
        }
    }

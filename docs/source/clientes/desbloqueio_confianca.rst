Desbloqueio em Confiança
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/desbloqueio_confianca

**POST**

No método POST, será possível efetuar o desbloqueio em confiança, pela quantidade de dias desejados.

.. warning::

	IMPORTANTE: O sistema vai fazer a validação da regra configurada pelo painel do administrador. Por exemplo, se a regra configurada pelo painel, estiver definido que o máximo de dias para desbloqueio for menor ou igual a 3 dias e a requisição da API, possuir um valor maior que 3 (no atributo dias_desbloqueio), o desbloqueio não será efetuado, e uma mensagem de erro será retornada, avisando que o valor informado para os dias de desbloqueio não é permitido, pois ultrapassa a configuração pré-estabelecida.

**Atributos da Requisição**

No método GET, irá consultar os dados dos clientes e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_cliente_servico
      -  Identificador único do serviço do cliente
      -  Sim

   *  -  dias_desbloqueio
      -  Quantidade de dias, a partir da data atual que o cliente ficará desbloqueado em confiança
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_cliente_servico
      -  Deve conter um número inteiro maior que 0
      -  Nenhum

   *  -  dias_desbloqueio
      -  Deve conter um número inteiro maior que 0. Se não for preenchido o valor 1 será atributo, ou seja, será desbloqueado até o próximo dia
      -  Nenhum

Exemplo de requisição POST na rota do desbloqueio em confiança::

	curl -X POST 
	--header "Accept:application/json" 
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/desbloqueio_confianca -d '{"id_cliente_servico":"11000", "dias_desbloqueio":"1"}' -k

Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
		"id_cliente_servico":"11000",
		"dias_desbloqueio":"1"
	}

Retorno da requisição POST::

	{
		"status": "success",
		"msg": "Desbloqueio em confiança realizado com sucesso até a data 26/11/2018"
	}
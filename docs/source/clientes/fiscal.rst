Fiscal
============

**Necessário**

Para fazer requisições nos dados de nota fiscal dos clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente/nota_fiscal

**GET**

No método GET, será possível consultar as notas fiscais e obter o retorno no formato JSON como resposta. Os seguintes parâmetros podem/devem ser utilizados:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  busca
      -  Tipo de busca que deseja fazer no cliente
      -  Sim

   *  -  termo_busca
      -  Termo utilizado para fazer a busca
      -  Sim

   *  -  data_inicio
      -  Data de Início (Utiliza a data de vencimento como base)
      -  Não

   *  -  data_fim
      -  Data de Fim (Utiliza a data de vencimento como base)
      -  Não

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default   

   *  -  busca
      -  id_cliente
      -  Nenhum

   *  -  termo_busca
      -  Campo livre
      -  Sim

   *  -  data_inicio
      -  Campo no formato DateTime (YYYY-MM-DD): refere-se a data de emissão da nota
      -  Nenhum

   *  -  data_fim
      -  Campo no formato DateTime (YYYY-MM-DD): refere-se a data de emissão da nota
      -  Nenhum

.. warning::

  A API vai retornar somente notas que já foram processadas e enviadas aos respectivos orgãos responsavéis, sendo assim será retornado somente as notas com os seguintes status: NFe: efetivada / NFSe: autorizado / Nota Fiscal Telecom 21/22: normal

.. note::

  Para os parâmetros data_inicio e data_fim não pode ser informado um intervalo de datas maior que 60 dias.  

Exemplo de requisição GET na rota do cliente::

	curl -X GET 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
	https://endereco_servidor/api/v1/integracao/cliente/nota_fiscal?busca=id_cliente&termo_busca=999&data_inicio=2021-01-01&data_fim=2022-02-23 -k

Retorno da requisição GET::

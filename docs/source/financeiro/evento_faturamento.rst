Evento de Faturamento
============

**Necessário**

Para fazer requisições nos dados de financeiro, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de financeiro, devem ser feitos na rota::

	/api/v1/integracao/financeiro

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/financeiro/evento_faturamento

**POST**

No método POST, será possível fazer o cadastro de evento de faturamento. Pode ser cadastrado um evento de Acréscimo ou Desconto, permitindo também parcelamento.

.. warning::

	IMPORTANTE: É necessário informar o id_cliente_servico e o id_tipo_servico, ambos retornados nas rotas Clientes > Consulta e Tipo de Serviço > All respectivamente

.. warning::

	IMPORTANTE 2: Ao enviar a o parâmetro parcelado como true, os parâmetros numero_total_parcelas, mes_primeira_parcela e ano_primeira_parcela tornam-se obrigatórios

.. warning::

	IMPORTANTE 3: Ao enviar a o parâmetro parcelado como false, o parâmetro proximo_faturamento torna-se obrigatório. Caso ele seja enviado como false, os parâmetros mes_processar e ano_processar também deverão ser enviados

**Atributos da Requisição**

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Obrigatório

   *  -  id_cliente_servico
      -  Identificador único do serviço do cliente
      -  Sim

   *  -  id_tipo_servico
      -  Identificador único do tipo de serviço
      -  Sim

   *  -  tipo
      -  Textual (aceita os valores acrescimo e desconto).
      -  Sim

   *  -  descricao
      -  Descrição textual para o evento.
      -  Sim

   *  -  valor
      -  Campo númerico (aceita valor decimal separado por ponto. Ex.: 10.2).
      -  Sim

   *  -  parcelado
      -  Boolean para identificar se o evento é parcelado ou não
      -  Sim

   *  -  numero_total_parcelas
      -  Valor maior que 0 para identificar o total de parcelas
      -  Sim (Se parcelado = true)

   *  -  mes_primeira_parcela
      -  Valor inteiro que representa o mês do ano (Dezembro = 12). Utilizado para verificar o mês da primeira parcela
      -  Sim (Se parcelado = true)

   *  -  ano_primeira_parcela
      -  Valor inteiro que representa o ano. Utilizado para verificar o ano da primeira parcela
      -  Sim (Se parcelado = true)

   *  -  proximo_faturamento
      -  Boolean para identificar se o evento será lançado no próximo faturamento
      -  Sim (Se parcelado = false)

   *  -  mes_processar
      -  Valor inteiro que representa o mês do ano (Dezembro = 12). Utilizado para verificar o mês de processamento do faturamento
      -  Sim (Se proximo_faturamento = false)

   *  -  ano_processar
      -  Valor inteiro que representa o ano. Utilizado para verificar o ano de processamento do faturamento
      -  Sim (Se proximo_faturamento = false) 

Os atributos podem conter os seguintes valores:

.. list-table::
   :header-rows: 1
   
   *  -  Atributo
      -  Descrição
      -  Valor Default

   *  -  id_cliente_servico
      -  Deve conter um número inteiro maior que 0
      -  Nenhum

   *  -  id_tipo_servico
      -  Deve conter um número inteiro maior que 0
      -  Nenhum

   *  -  tipo
      -  Textual
      -  Nenhum

   *  -  descricao
      -  Textual
      -  Nenhum

   *  -  valor
      -  Número Inteiro/Decimal
      -  Nenhum

   *  -  parcelado
      -  Boolean
      -  Nenhum

   *  -  numero_total_parcelas
      -  Número Inteiro
      -  Nenhum

   *  -  mes_primeira_parcela
      -  Número Inteiro (maior que 0 e menor que 13)
      -  Nenhum

   *  -  ano_primeira_parcela
      -  Número Inteiro
      -  Nenhum

   *  -  proximo_faturamento
      -  Boolean
      -  Nenhum

   *  -  mes_processar
      -  Número Inteiro (maior que 0 e menor que 13)
      -  Nenhum

   *  -  ano_processar
      -  Número Inteiro
      -  Nenhum 

Exemplo de requisição POST na rota do envio de e-mail::

	curl -X POST 
	--header "Accept:application/json"
	--header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
  --header "Content-Type: application/json"
	https://endereco_servidor/api/v1/integracao/financeiro/evento_faturamento -d '{"id_cliente_servico":"13579", "id_tipo_servico":"2", "descricao": "ADICIONAL", "parcelado": false, "proximo_faturamento": true, "tipo": "acrescimo", "valor": 10.3}' -k

Veja que os paramêtros enviados na requisição POST devem obedecer a estrutura no formato JSON::

	{
        "id_cliente_servico": 13579,
        "id_tipo_servico": 2,
        "descricao": "ADICIONAL",
        "parcelado": false,
        "proximo_faturamento": true,
        "tipo": "acrescimo",
        "valor": 10.3
    }

Retorno da requisição POST::

    {
        "status": "success",
        "msg": "1 Evento(s) de Farturamento de acréscimo cadastrados com sucesso. VALOR TOTAL: R$ 10.30",
        "eventos_faturamento": [
            {
                "id_evento_faturamento": 1575
            }
        ]
    }

.. note::

	OBSERVAÇÃO: Perceba que foi retornado um array contendo o ID do Evento de Faturamento. Esse retorno é caracterizado pelo fato do evento poder ser parcelado, caso ele tenha 3 parcelas, por exemplo, será retornado um array com 3 itens. Como no exemplo demonstrado acima foi cadastro um evento sem parcelamento, o array com uma posição foi retornado

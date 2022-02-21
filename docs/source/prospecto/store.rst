Cadastrar Prospecto
============

**Necessário**

Para fazer requisições de cadastro de prospectos, é necessário que você já possua o TOKEN, adquirido na etapa (Autenticação)

As requisições devem ser feitos na rota::

	/api/v1/integracao/prospecto

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/prospecto


Rota e corpo (payload) da requisição
-----------

- A rota em questão é do tipo **POST** e o corpo da requisição deve ter o formato abaixo:: 

        {
            "cep": "35560000",
            "servico": {
                "id_servico": 1,
                "valor": 100
            },
            "cpf_cnpj": "68346567000158",
            "telefone": "3732818000",
            "nome_razaosocial": "Empresa XPTO LTDA",
            "tipo_pessoa": "pj",
            "bairro": "Centro",
            "endereco": "Praça Getúlio Vargas",
            "numero": 77
        }

- Obrigatoriedade dos campos:

.. list-table::
   :header-rows: 1
   
   *  -  Campo
      -  Descrição
      -  Obrigatório

   *  -  cep
      -  CEP referente ao endereço de instalação
      -  Sim

   *  -  servico.id_servico
      -  Identificador único do serviço / plano de contratação
      -  Sim

   *  -  servico.valor
      -  Valor em reais (R$) do serviço / plano ofertado
      -  Sim

   *  -  nome_razaosocial
      -  Nome ou Razão Social do contratante
      -  Sim

   *  -  cpf_cnpj
      -  CPF ou CNPJ do contratante
      -  Não

   *  -  telefone
      -  Telefone principal do contratante
      -  Sim

   *  -  email
      -  email principal do contratante
      -  Não

   *  -  observacao
      -  Campo livre para observações do contratante
      -  Não

   *  -  tipo_pessoa
      -  Informar "pj" para pessoa jurídica ou "pf" para pessoa física
      -  Sim

   *  -  bairro
      -  Bairro referente ao endereço de instalação
      -  Sim

   *  -  endereco
      -  Endereço referente ao local de instalação
      -  Sim

   *  -  numero
      -  Número referente ao endereço de instalação
      -  Sim
      
   *  -  id_crm
      -  ID referente ao CRM que será vinculado o prospecto
      -  Nao

- Tipo de valores aceitos pelos campos:

.. list-table::
   :header-rows: 1
   
   *  -  Campo
      -  Tipo 

   *  -  cep
      -  Numérico

   *  -  servico.id_servico
      -  Numérico

   *  -  servico.valor
      -  Numérico

   *  -  nome_razaosocial
      - Texto

   *  -  cpf_cnpj
      -  Numérico

   *  -  telefone
      -  Numérico

   *  -  email
      - Texto

   *  -  observacao
      - Texto

   *  -  tipo_pessoa
      - Texto

   *  -  bairro
      - Texto

   *  -  endereco
      - Texto

   *  -  numero
      - Numérico
   
   *  -  id_crm
      - Numérico

Respostas da requisição
-----------

As seguintes respostas podem ser obtidas de acordo com o que for informado na rota em questão:

**Casos de erro**

- Em casos de um CPF ou CNPJ já tiver sido cadastrado, a seguinte resposta será obtida::

    {
      "status": "error",
      "msg": "O CPF/CNPJ já foi cadastrado antes no prospecto EMPRESA XPTO LTDA"
    }
    
**Observação ao vincular Prospecto a um CRM**

- Caso seja informado o atributo id_crm, o prosecto será vinculado a lista **PROSPECTOS-API** por padrão.

**Casos de sucesso**

- Um prospecto que atende todos os requisitos, será cadastrado e a seguinte resposta será obtida::

    {
      "status": "success",
      "msg": "Prospecto adicionado com sucesso",
      "prospecto": {
        "nome_razaosocial": "EMPRESA XPTO LTDA",
        "telefone": "3732818000",
        "email": null,
        "observacao": null,
        "id_endereco_numero": 33320,
        "tipo_pessoa": "pj",
        "cpf_cnpj": "41483316000169",
        "id_usuario": 1,
        "origem": "API",
        "updated_at": "2020-07-28 10:27:56",
        "created_at": "2020-07-28 10:27:56",
        "id_prospecto": 100,
        "created_at_br": "28\/07\/2020",
        "prospecto_servico": {
          "id_prospecto_servico": 99,
          "id_prospecto": 100,
          "id_servico": 1,
          "valor": "100"
        }
      }
    }

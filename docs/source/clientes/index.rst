Clientes
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente

Abaixo estão todas as funções disponíveis do cliente

.. toctree::
    :caption: Funções da API do cliente

    all
    atendimento
    consulta
    configurar_autenticacao
    desbloqueio_confianca
    desconexao
    extrato_conexao
    financeiro
    financeiro_email
    financeiro_sms
    financeiro_push
    nota_fiscal_email
    ordem_servico
    resetar_mac

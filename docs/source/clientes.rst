Clientes
============

**Necessário**

Para fazer requisições nos dados de clientes, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de clientes, devem ser feitos na rota::

	/api/v1/integracao/cliente

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/cliente

**GET**

No método GET, irá consultar os dados dos clientes e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

- busca (Obrigatório): Tipo de busca que deseja fazer no cliente
- termo_busca (Obrigatório): Termo utilizado para fazer a busca
- limit: Limite de resultados
- cancelado: Informa se deseja trazer os cancelados ou não
- order_by: Campo que será utilizado para ordenação
_ order_type: Tipo da Ordenação



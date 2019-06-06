PBX
============

**Necessário**

Para fazer requisições nas rotas de notificação de ligação do PBX, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação)

As requisições de **notificação** de ligação, devem ser feitos na rota::

	/api/v1/integracao/pbx/ligacao/notificar

As requisições de **cancelamento** de ligação (notificar ligação perdida), devem ser feitos na rota::

	/api/v1/integracao/pbx/ligacao/cancelar

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/pbx/ligacao/notificar
	
        https://endereco_do_servidor/api/v1/integracao/pbx/ligacao/cancelar

**POST**

No método POST, de ambas as rotas poderão ser realizadas as notificações e cancelamento de ligações.

.. warning::

    **IMPORTANTE:** Ao realizar a requisição na rota de "notificação", o sistema irá automaticamente abrir uma janela pro usuário de destino, com os dados da chamada: ramal, identificador interno, telefone de origem da ligação. Caso algum cliente tenha sido identificado, será possível abrir o atendimento e já fornecer o protocolo ao cliente, caso contrário terá a opção de consultar um cliente na base. Ao relizar a requisição na rota de "cancelamento" da ligação, a janela de ligação será fechada automaticamente caso ela ainda esteja aberta.

**Atributos da Requisição de ambas as rotas**

:ramal: Número de ramal correspondente ao usuário **(Obrigatório caso o identificador_interno não seja informado)**
:identificador_interno: ID Interno correspondente ao usuário **(Obrigatório caso o ramal não seja informado)**
:id_cliente: Identificador único do cliente **(Obrigatório caso o telefone não seja informado)**
:telefone: Telefone da ligação externa do PBX **(Obrigatório)**

Os atributos podem conter os seguintes valores:

:ramal: Deve ser um valor numérico
:identificador_interno: Deve ser um valor alfanumérico
:id_cliente: Deve ser um valor númerico e existir na base de dados
:telefone: Deve ser um valor númerico

Exemplo de requisição POST na rota de notificação de ligação::
        
        curl -X POST https://endereco_servidor/api/v1/integracao/pbx/ligacao/notificar
        -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNjN2VjYTY1"
        -H "content-type: application/json"
        -d '{"ramal": 111, "telefone": 37999912222}'

Exemplo de requisição POST na rota de cancelamento da ligação::
        
        curl -X POST https://endereco_servidor/api/v1/integracao/pbx/ligacao/cancelar
        -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNjN2VjYTY1"
        -H "content-type: application/json"
        -d '{"ramal": 111, "telefone": 37999912222}'

Retorno da requisição POST notificação de ligação::
        
        {
            "status": "success",
            "msg": "Ligação notificada com sucesso"
        }

Retorno da requisição POST cancelamento de ligação::
        
        {
            "status": "success",
            "msg": "Ligação cancelada com sucesso"
        }

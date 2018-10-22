Autenticação da API
============

**Necessário**

Para autenticar na API, será necessário possuir os seguintes dados em mãos:

- client_id
- client_secret
- username
- password
- host

Para fazer a autenticação na API é necessário fazer uma requisição POST na rota::

	https://endereco_do_servidor/oauth/token

Deverá ser enviado na requisição um JSON, com as seguintes informações::

	{
		"grant_type":"password",
		"client_id":"3",
		"client_secret":"ONe7Ns48Y30tB",
		"username":"teste@teste.com",
		"password":"1234"
	}

O exemplo acima, possui alguns prarâmetros, que serão explicados abaixo:

- grant_type: Sempre deverá conter o valor "password"
- client_id: Será o client_id que a empresa e/ou equipe do HubSoft lhe enviar
- client_secret: Será o client_secret que a empresa e/ou equipe do HubSoft lhe enviar
- username: Será o nome de usuário do sistema (Sempre será um endereço de e-mail)
- password: Senha do usuário

O resultado da requisição da rota /oauth/token, será igual ao exemplo abaixo::

	{
		access_token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"
		expires_in:2592000
		refresh_token:"def502007d459fb49e6b09071f127a0163714607233687eac066
		token_type:"Bearer"
	}

Nesse momento, você já possui todos os dados necessário para iniciar as chamadas na rota da API.
Em todas as rotas da API, será necessário enviar o TOKEN que foi recebido na rota /oauth/token.
O TOKEN que deve ser enviado, é formado pelo token_type + access_token, no caso do exemplo acima o token ficaria da seguinte forma::

	Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O

Exemplo de chamada em uma rota, enviando os dados do Token::

	curl -X GET --header "Accept:application/json" https://endereco_servidor/api/v1/teste -k --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg0MTM2O"

.. warning::

	IMPORTANTE: Veja que o token foi enviado no HEADER da requisição HTTP. Conforme o exemplo acima, podemos observar que o token é enviado sempre no header ``Authorization``. Caso o Token não esteja presente no header ``Authorization`` a API irá responder com o código ``HTTP 401 (Unauthorized)``, não permitindo a utilização da API.



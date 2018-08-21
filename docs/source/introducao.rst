Introdução
============

HubSoft é um sistema voltado para empresas de telecomunicação. A ideia de liberar a API do sistema, torna todos os processos de integração / comunicação mais dinâmicos, tornando as rotinas das empresas mais simples e ágeis.

Com intuito de sempre inovar, a API do HubSoft foi construída em cima das tecnologias mais recentes do mercado. A troca de mensagens com a API é feita através do HTTP (Hypertext Transfer Protocol) utilizando o estilo arquitetural REST (Representation State Transfer).

Exemplos::
	
	https://example.com/produto/1234

Ao fazer uma chamada na rota acima utilizando o método GET, estaremos fazendo a consulta do produto de código 1234.
Porém ao fazer a chamada na mesma rota, utilizando o método DELETE, estaremos enviando a instrução para que a API faça a remoção do produto 1234.

Dessa forma, todas as funções do CRUD estarão dipsoníveis pela API, através dos métodos:

- GET (Consultar)
- POST (Adicionar)
- PUT (Editar)
- DELETE (Apagar)
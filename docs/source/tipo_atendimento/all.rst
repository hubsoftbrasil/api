All (Todos os Tipos de Atendimento)
============

**Necessário**

Para fazer requisições nos dados de tipos de atendimento, é necessário que você já possua o TOKEN, conseguido na etapa (Autenticação).
OBS: Essa rota irá retornar todos os dados de tipos de atendimento.

As requisições de tipos de atendimento, devem ser feitos na rota::

	/api/v1/integracao/tipo_atendimento

O endereço completo, ficará da seguinte forma::

	https://endereco_do_servidor/api/v1/integracao/tipo_atendimento

**GET**

No método GET, irá consultar os dados dos tipos de atendimento e retornar um JSON como resposta.
Os seguintes parâmetros podem/devem ser utilizados:

Exemplo de requisição GET na rota de cliente::

    curl --request GET \
      --url http://endereco_do_servidor:8000/api/v1/integracao/tipo_atendimento \
      --header 'Accept: application/json' \
      --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU2NjQ1ODdhZjA0MDkwMWMxOGNmNmIyYjY3NGUxMmI4MWYwYTkzMjY5YTAxZTkxZDBjNWQwYmUyYmQwMDQwYTgzYjhkOTFjOWFiMTI3OTU0In0.eyJhdWQiOiIxMCIsImp0aSI6ImU2NjQ1ODdhZjA0MDkwMWMxOGNmNmIyYjY3NGUxMmI4MWYwYTkzMjY5YTAxZTkxZDBjNWQwYmUyYmQwMDQwYTgzYjhkOTFjOWFiMTI3OTU0IiwiaWF0IjoxNjE4NTc3NTI4LCJuYmYiOjE2MTg1Nzc1MjgsImV4cCI6MTkzNDExMDMyOCwic3ViIjoiOTE1Iiwic2NvcGVzIjpbXX0.XqeyO-C-pgspX2MJkxyDUP0i-dwacFYFfvmS7S6A595Yja0JF6HsDL2jb1jN3uJIs4QTEfLXatr2B1CuiyZlk2f8vIQMxtk3APLy0lJcGeP9n1Q3ffFRNkore3cN6FAQr0NVO5ma0TlCStjQW1YIxQaIthq8XygKF7FhHMA6kztnklf3dkxrTbct657f3CcCntpe2bhLTivbCYLrdJxNO3fWwgMnuawo5cvwofcKAJXD1hhg0hyqmpACwR37bBCsfdnZJGfiIeVdvli17N3K-4i_8zo4J0zfrgtPKMLfbWQpM8GCtOIbYtAomlhbUz30Uh7fIf2tQmkIn4rjN4HDLwFWFViomrRuA5qrev8rP5gLT62EJgu4X_BMbh-XySfd_nLAtNwo0ZOysYWxI7_lJt3bqik7CG8vqVI909zhMdRHMO2MxX_4AF8O2XMwW6DDzHtFrdb7N6RV_k_EGTuWyBweWDxFUnuAk_6T7TWQrfpIZPGktkOOC1AhFXKWgRB1Hb0yevatjVBnUd_uj7M8HovOPIy9EG-pTrlBhLWiEkZmq-6dwWnOhBfMVccheMGZ5U5fx_hH_1Bx8XuBz76DxI8cDkF-9GzKX1ccnztn8Tv2P0O4fBFvtACOLfPpvDtK3mPVnWmZXc6wB5l_0dzJEFCJqvNThjj7DAjLNpgUjoI' \
      --header 'Content-Type: application/json'

Retorno da requisição GET::

      {
        "status": "success",
        "msg": "Dados consultados com sucesso",
        "tipos_atendimento": [
          {
            "id_tipo_atendimento": 109,
            "descricao": "SEM ACESSO A INTERNET"
          },
          {
            "id_tipo_atendimento": 111,
            "descricao": "OSCILAÇÃO\/QUEDAS DE CONEXÃO"
          }
        ],
        "encrypted": false
      }

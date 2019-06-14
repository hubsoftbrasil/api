PHP
============

.. note::

	OBSERVAÇÃO: O código abaixo é apenas um exemplo para facilitar o desenvolvimento. Em ambiente de produção, o ideal é que faça a separação das funções e se possível faça o desenvolvimento com orientação a objetos (caso a sua linguagem de programação assim permita).

```php
<?php
/**
 * O código abaixo é apenas um exemplo para facilitar o desenvolvimento
 * Em ambiente de produção, o ideal é que faça a separação das funções
 * e se possível faça o desenvolvimento com orientação a objetos.
 */
function requisicao($url, $method, $body = [], $token = null){
    $req = curl_init($url);
    $header = array();
    $header[] = 'Accept: application/json';
    if(!is_null($token)){
        $header[] = 'Authorization: ' . $token;
    }
    curl_setopt($req, CURLOPT_HTTPHEADER, $header);
    curl_setopt($req, CURLOPT_RETURNTRANSFER, true);
    if($method == "POST"){
        curl_setopt($req, CURLOPT_POST, true );
        curl_setopt($req, CURLOPT_POSTFIELDS, http_build_query($body));
    }
    $respCode = curl_getinfo($req, CURLINFO_HTTP_CODE);
    $resp = json_decode(curl_exec($req), true);
    curl_close($req);
    return $resp;
}

$clientId = "3";
$clientSecret = "ONe7Ns48Y30tBMzneWAwL6hWuh4ze09Jf7qcMsO9";
$username = "api@hubsoft.com.br";
$password = "api123api";
$url = "https://api.dev.hubsoft.com.br";
$urlOauth = $url . "/oauth/token";
$urlCliente = $url . "/api/v1/integracao/cliente?busca=cpf_cnpj&termo_busca=09141806654";

//Body da requisição do oauth
$requestBody = [
    "client_id"=>$clientId,
    "client_secret"=>$clientSecret,
    "username"=>$username,
    "password"=>$password,
    "grant_type"=>"password"
];

//Faz autorização do oauth
$reqOauth = requisicao($urlOauth, 'POST', $requestBody);

//Armazena os dados pra montar o token (Authorization)
$tokenType = $reqOauth['token_type'];
$accessToken = $reqOauth['access_token'];

//Monta o token Authorization
$authorizationToken = $tokenType . " " . $accessToken;

//Faz requisição do cliente
$reqCliente = requisicao($urlCliente, 'GET', [], $authorizationToken);

//Exibe o resultado da requisição
var_dump($reqCliente);
```
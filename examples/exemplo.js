//Exemplo básico utilizando a linguagem JAVASCRIPT

var url = "https://api.dev.hubsoft.com.br/oauth/token";
var data = {
	"grant_type":"password",
	"client_id":"3",
	"client_secret":"ONe7Ns48Y30tBMzneW",
	"username":"api@hubsoft.com.br",
	"password":"api123api"
};
  
$.ajax({
  type: "POST",
  url: url,
  data: data,
  success: success,
  error: error
});

function success(response){
  var alerta = 'SUCESSO ---- TOKEN TYPE: ' + response.token_type + ' | ACCESS TOKEN: ' + response.access_token;
  
  alert(alerta);
}

function error(){
   alert('error');
}

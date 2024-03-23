http = require("http")

http.createServer((requisicao, resposta) => {
    //aqui iremos "codar"
    nome = "Hello World!!!"
    resposta.end(nome)
    console.log(nome)
}).listen(3000)

console.log("O servidor está rodando em http://localhost:",3000)

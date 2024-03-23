http = require('http')
/*
6)  Faça um servidor de uma calculadora, que tenha as seguintes rotas:
Rota 1 = “/soma”
Rota 2 = “/subtracao”
Rota 3 = “/divisao”
Rota 4 = “/multiplicacao”
Rota 5 = “/elevar_ao_quadrado”

*/
http.createServer((req,res)=>{
    caminho = req.url;
    A = 12
    B = 2

    if(caminho == '/soma'){
        soma = A+B
        res.end("O resultado da soma e: "+soma)
    }else if(caminho == '/subtracao'){
        subtracao = A-B
        res.end("O resultado da subtração e"+subtracao)
    }else if(caminho == '/divisao'){
        divisao = A/B
        res.end("O resultado da divisão e"+divisao)
    }else if(caminho == '/multiplicacao'){
        divisao = A*B
        res.end("O resultado da multiplicação e:" + divisao)
    }else{
        res.end("Erro! Rota não existe.")
    }

}).listen(3000)

console.log("O servidor está rodando em http://localhost:",3000)

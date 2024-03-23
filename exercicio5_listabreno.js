http = require('http')
/*
5) Faça um servidor que calcule o quadrado de um número definido e forneça
como resposta o quadrado desse número.
*/
http.createServer((req,res)=>{
    
    num = 2
    quadrado = num**2
    res.end("Mensagem de retorno: "+quadrado)

}).listen(3000)

console.log("O servidor está rodando em http://localhost:",3000)

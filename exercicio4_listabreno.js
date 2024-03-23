http = require('http')
/*
Faça um servidor que tenha duas rotas, a rota 1 deve fornecer a resposta
“Rota 1”, a rota 2 deve fornecer a resposta “Rota2”
*/
http.createServer((req,res)=>{
    caminho_url = req.url 

    if(caminho_url == '/rota1'){
        res.end('Rota1')
    }else if(caminho_url == '/rota2'){
        res.end('Rota2')
    }else{
        //padrão
        res.end('Erro! Rota inválida')
    }


}).listen(3000)

console.log("O servidor está rodando em http://localhost:",3000)

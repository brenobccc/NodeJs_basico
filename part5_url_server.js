http = require('http')

http.createServer((req,res)=>{
    caminho_url = req.url
    // res.end('Verificando url:'+caminho_url)

    if(caminho_url == "/alunos_devweb2"){
        res.end('ALUNOS DEV WEB 2, url acessada:'+caminho_url)
    }else if(caminho_url == "/alunos_redes"){
        res.end('ALUNOS REDES, url acessada:'+caminho_url)
    }else{
        res.end('ERRO, Rota inválida!!!')
    }

}).listen(3000)

console.log("O servidor está rodando em http://localhost:",3000)

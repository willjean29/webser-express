const http = require ('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-type':'application/json' });
    let salida = {
        nombre : 'Jean Osco',
        edad : 23,
        url : req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
    .listen(5000);
console.log("Escuchando el puerto 3000")


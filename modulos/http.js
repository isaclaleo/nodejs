const http = require('http');

http.createServer(router).listen(3001);

function router(req, res) {
    console.log('Nueva peticion');
    console.log(req.url);
    switch (req.url) {
        case '/hola':
            let saludo = hola();
            res.write('hola que tal');
            res.end();
            break;
    
        default:
            res.write('error 404');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain'});
    // res.write('uasr http en node');
    // res.end();
}

function hola() {
    return 'hola que hace..'
}

console.log("Escuchando http puerto 3001");


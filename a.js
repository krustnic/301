const http = require('http');

http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case "/a":
            console.log('a');
            
            res.writeHead(200);
            res.end('a page');
            
            break
        case "/b":
            console.log('b');
    
            res.writeHead(301, {
                'Location': '/a'
            });
            res.end();
            break
    }
}).listen(8081);
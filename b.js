const http = require('http');

http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case "/a":
            console.log('a');
            
            res.writeHead(301, {
                'Location': '/b'
            });
            res.end();
            break
        case "/b":
            console.log('b');
            
            res.writeHead(200);
            res.end('b page');
    
            break
    }
}).listen(8081);
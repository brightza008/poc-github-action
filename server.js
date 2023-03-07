let http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello');
}).listen(1234, () => console.log('Server running on localhost:1234...')) ;
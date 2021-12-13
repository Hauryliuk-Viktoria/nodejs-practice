const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response) {
    response.setHeader('Content-type', 'text/html');
    //вернуть Json =>???
    // if(request.url == "/json"){
    //     const request1 = new XMLHttpRequest();
    //     request1.open('GET', request.url);
    //     request1.responseType = 'json';
    //     request1.send();
    // } else
    // if(request.url == "/json"){
    //     response.json();
    // }
     if(request.url === "/"){
        const html = fs.readFileSync('./index.html');
        response.write(html);
    } else if(request.url == "/about"){
        const html = fs.readFileSync('./about.html');
        response.write(html);
    } else if(request.url == "/services"){
        const html = fs.readFileSync('./services.html');
        response.write(html);
    }
    else{
        response.statusCode = 404; 
        response.write("Not Found");
    }
    // работа с методами =>???
    if (request.method = 'POST' || request.url == "/post"){
        response.write("post ")
    }
    if (request.method = 'PUT' || request.url == "/put"){
        response.write("put ")
    }
    if (request.method = 'DELETE' || request.url == "/delete"){
        response.write("delete ")
    }
    if (request.method = 'PATCH' || request.url == "/patch"){
        response.write("patch ")
    }
    response.end();
});

server.listen(3000, () => {
    console.log('It is running');
})

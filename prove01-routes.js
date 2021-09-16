const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Prove 1</title></head>');
    res.write('<body><p>Hello World!</p>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username">');
    res.write('<button type="submit">Send</button>');
    res.write('<form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

});

router.get('/users', (req, res, next) => {

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Prove 1</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
    res.write('</html>');
    return res.end();

});

router.get('/create-user', (req, res, next) => {

    const body = [];
    req.on('data', (chunk) =>{
        body.push(chunk);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody.split('=')[1]); // usernames
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();

});

module.exports = router;
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.setHeader('Content-type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Prove 1</title></head>');
//         res.write('<body><p>Hello World!</p>');
//         res.write('<form action="/create-user" method="POST"><input type="text" name="username">');
//         res.write('<button type="submit">Send</button>');
//         res.write('<form>');
//         res.write('</body>');
//         res.write('</html>');
//         res.end();
//     }
//     if (url === '/users') {
//         res.setHeader('Content-type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Prove 1</title></head>');
//         res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
//         res.write('</html>');
//         res.end();
//     }
//     if (url === '/create-user'){
//         const body = [];
//         req.on('data', (chunk) =>{
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             console.log(parsedBody.split('=')[1]); // usernames
//         });
//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         res.end();
//     }
    
// });

// server.listen(3000);
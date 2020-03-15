
const fs = require('fs');

const requesthandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<title>Portal</title>');
        res.write('<body>');
        res.write('<h1>Welcome to the Portal</h1>');
        res.write('<form action="/createUser" method="POST"><input type="text" name = "user"><button type="submit">create</button></form>');
        res.write('<form action=/users><button>View</button></form>');
        res.write('</body>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<title>Users</title>');
        res.write('<body>');
        res.write('<h1>List of Users</h1>');
        res.write('<ul><li>Google</li><li>Yahoo</li><li>Bing</li><li>DuckDuckGo</li></ul>');
        res.write('</body>');
        return res.end();
    }

    if (url === '/createUser' ) {
        const body = [];
        req.on('data',chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);
            fs.writeFile('users.txt', user, err =>{
                res.statusCode = 302;
                res.setHeader = ('Location', '/createUser');
                return res.end();
            });
        });

    }

    res.setHeader('Content-Type', 'text/html');
    res.end();

}

module.exports = {
    handler: requesthandler
}
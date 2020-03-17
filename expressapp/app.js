const http =  require('http'); 
const express = require('express');

const app = express();
app.use((req ,res ,next) => {
    console.log("In the first Middleware");
    next();
});
app.use((req ,res ,next) => {
    console.log("In the second Middleware");
    next();
});
app.use((req ,res ,next) => {
    console.log("In the third Middleware");
});
const server = http.createServer(app);
server.listen(3000);
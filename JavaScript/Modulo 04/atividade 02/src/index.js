const express = require('express');

const app = express();

app.listen(8080);

app.get('projects', (request, response) => {
    console.log('server ok')
    return response.send('hello world')
})
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('A yellow icon approaches!');
});

app.get('/api/domain_structure?domain=pat-reading', (request, response) => {
    response.send('Hello, /');
});


app.listen(3000, () => console.log('The API app is now listening on port 3000 @ http://localhost:3000'));

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('A yellow icon approaches!');
});

app.listen(3000, () => console.log('LOCAL API app listening on port 3000 @ http://localhost:3000'));

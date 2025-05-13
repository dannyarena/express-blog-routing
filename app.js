const express = require ('express');
const app = express();
const postsRouter = require('./routers/posts');

app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.send('Bnevenuto nel blog!');
});
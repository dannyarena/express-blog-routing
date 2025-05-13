const express = require ('express');
const router = express.Router();
const { posts } = require('../data/posts');

router.get('/', (req, res) => {
    res.send('Lista dei post');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Dettagli del post ${id}`);
});

router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
});


module.exports = router;

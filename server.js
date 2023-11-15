// ./server.js
const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render(
        'search', 
        {nom : "LECOMTE", prenom: "Cyril"}
    );
})

app.get('/search', (req, res) => {
    // recherche enn bdd (via le modele (repository))
    //console.log(req.query.q)
    res.render('search', { q :req.query.q });
})

app.post('/search', (req, res) => {
    // recherche enn bdd (via le modele (repository))
    console.log(req.body.q)
    res.render('search', { q :req.body.q });
})


app.listen(process.env.PORT_HTTP,() => {
    if(process.env.APP_ENV == 'dev') {
        console.log(`Le serveur est démarré : http://localhost:${process.env.PORT_HTTP}`);
    }
})

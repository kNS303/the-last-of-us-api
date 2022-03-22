const express = require('express');
const cors = require('cors');

const CharacterRoutes = require ("./src/api/characters/character.route");
const EnemyRoutes = require ("./src/api/enemies/enemy.route");

const { connect } = require('./src/utils/database/db');

connect();

const app = express();

app.use(express.json({limit: "5mb"}));

app.use(express.urlencoded({
    limit: "5mb", 
    extended: false
}));


app.use(cors());

app.use('/api/characters', CharacterRoutes);
app.use('/api/enemies', EnemyRoutes)

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});

app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Ellie dont find the way'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});



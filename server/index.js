const express = require('express');
const cors = require('cors');

const { connect } = require('./src/utils/database/db');

connect();

const app = express();

app.use(express.json({limit: "5mb"}));

app.use(express.urlencoded({
    limit: "5mb", 
    extended: false
}));


app.use(cors());

app.use('/public', express.static('public'));

app.use('/api', (req, res, next) => "im alive")

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});

app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});



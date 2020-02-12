const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const selectAll = `SELECT * from routecard`;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pbfxby12!',
    database: 'oregontrail_db'
})

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/api', (req,res) => {
    connection.query(selectAll, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            });
        };
    });
});


app.listen(4000, () => {
    console.log(`Listening to port 4000 `)
})
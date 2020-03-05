const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pbfxby12!",
    database: "oregontrail_db"
  });

app.get('/', (req, res) => {
    connection.query(`select * from routecard`, (err, results) => {
        if (err) {
            return res. send(err);
        } else {
            return res.json({
                data: results
            })
        }
    })
});

connection.connect(function(err) {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

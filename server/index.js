const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'My$qll@unchc0de',
    database: 'customerquotes'
});

app.post('/create', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const username = req.body.username
    const email = req.body.email
    const phoneNumber = req.body.phoneNumber
    const serviceType = req.body.serviceType
    const comments = req.body.comments

    // console.log(firstName);
    // console.log(typeof(firstName));

    db.query("INSERT INTO quotes (first_name, last_name, username, email, phone_number, service_type, comments) VALUES (?,?,?,?,?,?,?)", 
        [firstName, lastName, username, email, phoneNumber, serviceType, comments], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values successfully inserted into database!")
            }
        
        }
    );
});

app.listen(3002, ()=> {
    console.log("Yay, the server is running on port 3002");
});

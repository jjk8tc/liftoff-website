const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer');

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
    const address = req.body.address
    const comments = req.body.comments

    // console.log(firstName);
    // console.log(typeof(firstName));

    db.query("INSERT INTO quotes (first_name, last_name, username, email, phone_number, service_type, address, comments) VALUES (?,?,?,?,?,?,?)", 
        [firstName, lastName, username, email, phoneNumber, serviceType, addresss, comments], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values successfully inserted into database!")
            }
        
        }
    );

    const output = `
            <p>You have been sent a request for quote</p>
            <h3>Quote Details</h3>
            <ul>
                <li>Name: ${firstName} ${lastName}</li>
                <li>Username: ${username}</li>
                <li>Email: ${email}</li>
                <li>Phone Number: ${phoneNumber}</li>
                <li>Service Type: ${serviceType}</li>
                <li>Job Site Address: ${address}</li>
                <li>Comments: ${comments}</li>
            </ul>`;


    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'hulsteinconcretewebsite@gmail.com',
            pass: 'liftoff2022!'
        },
        // tls:{
        //     rejectUnauthorized: false
        // }
    });
        
    var mailOptions = {
        from: 'hulsteinconcretewebsite@gmail.com',
        to: 'jjkroese20@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'Test Test One Two',
        html: output
    };
        
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }

        //sending a message once quote is sent and clearing the form
        //res.render('form-box', {msg: `Quote has been sent!`});
    });


});

app.get('/quotelist', (req,res) => {
    db.query("SELECT * FROM quotes", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    
    });
});

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id
    db.query("DELETE FROM quotes WHERE id = ?", id, (err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3002, ()=> {
    console.log("Yay, the server is running on port 3002");
});

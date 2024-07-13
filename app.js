const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
});

app.post('/submit-form', function(req, res) {
    const comm = req.body.message;
    const na = req.body.name;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    var mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.body.email,
        cc: process.env.EMAIL_USER,
        subject: 'Thanks for the feedback, ' + na,
        text: 'Thanks for your message you have sent to us: ' + comm
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.send('Error sending email');
        } else {
            res.redirect('/');
            console.log("Email sent: " + info.response);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
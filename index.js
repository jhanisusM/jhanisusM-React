const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name:${req.body.name}</li>
            <li>Name:${req.body.email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smt.etheral.email',
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'mv3yfwu2qfzk4bmz@ethereal.email',
                pass: 'Pf7AfGF9NrWr3pkGBy'
            }
        });

        let mailOptions ={
            from:"test@testaccount.com",
            to:'mv3yfwu2qfzk4bmz@ethereal.email',
            replyTo:"test@testaccount.com",
            subject:'New Message Homboy',
            text:req.body.message,
            html:htmlEmail
        };

        transporter.sendMail(mailOptions, (err,info)=>{
            if(err){
                return console.log(err)
            }
            console.log("Message Was sent: %s", info.message);
            console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
        });
    });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
const express = require ('express');
const bodyParser = require ('body-parser');
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT ||3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/api/form',(req,res) =>{
    console.log(req.body);
});


app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
});
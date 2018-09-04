const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();

const PORT = process.env.PORT || 5000;


// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
const app = express();
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




  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, () => {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}

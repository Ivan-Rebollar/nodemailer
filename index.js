const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

let mailOptions = {
  from: '@gmail.com',
  to: '@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html:'<h1>Welcome</h1><p></p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
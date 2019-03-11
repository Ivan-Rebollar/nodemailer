const nodemailer = require('nodemailer');
const ejs = require('ejs');
var fs = require('fs');
//const xoauth2 = require('xoauth2');


//usando configuraciones de SMTP y OAuth2
let transporter = nodemailer.createTransport({
  service: 'gmail',
  host:'smtp.gmail.com',
  port: 465,
  secure: true,
  auth:{
    type:'OAuth2',
    user: 'joivrh18@gmail.com',
    clientId: '22305086248-qq12ce9040m4ts3hk1aacofbttiuo5h3.apps.googleusercontent.com',
    clientSecret: 'X7SzIo5clwJ-RbA645TOF8ji',
    refreshToken: '1/BewLvdqSrR-dnrgZ8HEMJgayF3GetoGlGzEGblIE6cA',
  }
});

//objeto email a enviar
let mailOptions = {
  from: 'joivrh18@gmail.com',
  to: 'macunamjirhpk@gmail.com',
  subject: 'Prueba de correo',
  //html:'<h1>Prueba HTML</h1><h3>código html con imagen attachada</h3>',
  attachments:[{
    path:'/home/ivan/Imágenes/Captura de pantalla de 2019-01-22 16-04-33.png'
  }]
}

var filePath = './template/main.ejs';
var compiled = ejs.compile(fs.readFileSync(filePath,'utf8'));
mailOptions.html = compiled(mailOptions);

//verificando conexión SMTP
transporter.verify((error,success) => {
  if(error){
    console.log(error);
  }else{
    console.log('Servidor listo para tomar el mensaje');
    //enviando correo
    transporter.sendMail(mailOptions,(err,info) => {
      if(err){
        console.log(err);
      }else{
        console.log(`Email enviado ${info.response}`);
      }
    });
  }
});
require('dotenv').config()

const sgMail = require('@sendgrid/mail') 


const API_KEY_1= process.env.API_KEY ;
console.log(API_KEY_1);
sgMail.setApiKey(API_KEY_1)

const message = {
    // to: 'alicemusayidire@gmail.com',
    

    to: ['alicemusayidire@gmail.com','ericmaniraguha@hotmail.com','kaalicy@gmail.com'],

    // from:'ericmaniraguha@gmail.com',
    from:{
        name:'Your name from sendgrid',
        email:'ericmaniraguha@gmail.com'
    },
    subject:'Hello from sendgrid subject here',
    text:'Hello from sendgrid message here',
    html:'<h1>Hello from sendgrid with html </h1>'
};

sgMail.send(message)
.then(response => console.log("Email has been sent"))
.catch(error => console.log(error.message));
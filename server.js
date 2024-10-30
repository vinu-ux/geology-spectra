const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path module

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to send email
app.post('/send-email', (req, res) => {
    // const { name, email, message } = req.body;
    const { htmlBody } = req.body;

    // Create a transporter for sending email
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Change this to the appropriate email service
        auth: {
            user: 'teamshop2host@gmail.com', // Your email
            pass: 'cokjyyodvsobwajc', // Your email password or app password
        }
    });

    // Set up mail options
    const mailOptions = {
        from: 'teamshop2host@gmail.com',
        to: 'teamshop2host@gmail.com', // Your receiving email address
        subject: 'message',
        html: htmlBody,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

// // Start server
// app.listen(PORT, () => {
//     console.log(Server is running on http://localhost:${PORT});
// });

// // Nodemailer configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // or your email service
//   auth: {
//     user: 'teamshop2host@gmail.com',
//     pass: 'cokjyyodvsobwajc',
//   },
// });

// // Email sending route
// app.post('/send-email', (req, res) => {
//   const { to, subject, text } = req.body;

//   const mailOptions = {
//     from: 'teamshop2host@gmail.com',
//     to: 'teamshop2host@gmail.com',
//     subject: 'teamshop2host@gmail.com',
//     text: req.body,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

// // Serve the index.html file when accessing the root
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path module
const dontenv = require('dotenv').config()
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
            user: process.env.EMAIL, // Your email
            pass: process.env.PASS, // Your email password or app password
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

app.get('/:page', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, 'public', `${page}.html`);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Page not found');
        }
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
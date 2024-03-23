const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('frontend')); // Serve your static files from frontend directory

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akbotazhaksy@gmail.com', //input your email
    pass: 'qloj gvcc puwi pzqi', //input your app password
  },
});

// Route to handle POST request
app.post('/send-email', async (req, res) => {
  const { recipient, subject, message } = req.body;
  try {
    await transporter.sendMail({
      from: 'akbotazhaksy@gmail.com',
      to: recipient,
      subject: subject,
      text: message,
    });
    res.send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).send({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Email sender app listening at http://localhost:${port}`);
});

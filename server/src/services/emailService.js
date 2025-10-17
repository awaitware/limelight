const nodemailer = require('nodemailer');

const sendContactEmail = async (formData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: `Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
    html: `
      <h2>Contact Form Message</h2>
      <p><b>Name:</b> ${formData.firstName} ${formData.lastName}</p>
      <p><b>Email:</b> ${formData.email}</p>
      <p><b>Phone:</b> ${formData.phone}</p>
      <p><b>Organization:</b> ${formData.organization}</p>
      <p><b>Services:</b> ${formData.services.join(', ')}</p>
      <p><b>Message:</b><br/>${formData.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail };

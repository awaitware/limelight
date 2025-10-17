const { sendContactEmail } = require('../services/emailService');

exports.sendEmail = async (req, res) => {
  try {
    await sendContactEmail(req.body);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, surveyTitle, customerName } = req.body;

  // SendGrid integration ready
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_KEY);
  // await sgMail.send({ to, from: 'cortex@platform.com', subject: surveyTitle });

  // Mock response for prototype
  res.status(200).json({
    success: true,
    message: `Survey "${surveyTitle}" dispatched to ${customerName}`,
    timestamp: new Date().toISOString()
  });
}

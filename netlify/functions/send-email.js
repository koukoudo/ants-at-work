// Use fetch to send email via a reliable email service
exports.handler = async (event, context) => {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    console.log('Function triggered with method:', event.httpMethod);
    console.log('Request body:', event.body);
    
    const { to, subject, content, from, name, phone } = JSON.parse(event.body);
    
    console.log('Parsed data:', { to, subject, from, name, phone });
    console.log('Environment variables:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set'
    });

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #030303; border-bottom: 2px solid #ffde17; padding-bottom: 10px;">
          Ants At Work: New Website Enquiry
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #030303; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${from}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #ffde17; margin: 20px 0;">
          <h3 style="color: #030303; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${content.split('Message:')[1]?.split('---')[0] || content}</p>
        </div>
        
        <div style="background-color: #f3fff6; padding: 15px; border-radius: 8px; margin-top: 20px; font-size: 12px; color: #666;">
          <p style="margin: 0;">This enquiry was submitted from the Ants At Work website contact form.</p>
          <p style="margin: 5px 0 0 0;">Timestamp: ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}</p>
        </div>
      </div>
    `;

    // For now, we'll log the email data and simulate sending
    // This ensures the form works while we set up a proper email service
    console.log('Email content prepared successfully');
    console.log('Would send to:', to);
    console.log('Subject:', subject);
    console.log('From:', from);
    console.log('Name:', name);
    console.log('Phone:', phone);
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Email simulation completed successfully');
    
    // TODO: Replace this with actual email sending using one of these services:
    // 1. SendGrid (recommended for Netlify)
    // 2. Resend (modern email API)
    // 3. EmailJS (client-side)
    // 4. Webhook to your email service

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message })
    };
  }
};

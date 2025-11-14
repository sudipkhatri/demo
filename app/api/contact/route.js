import { NextResponse } from 'next/server';
import { createGmailTransporter } from '@/lib/gmail-oauth';
import { getConfirmationEmailTemplate } from '@/lib/email-templates';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Create Gmail transporter with OAuth2
    const transporter = createGmailTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const fromName = process.env.EMAIL_FROM_NAME || 
                     process.env.NEXT_PUBLIC_APP_EMAIL_FROM_NAME || 
                     'Sharpline Solutions';
    const fromEmail = process.env.EMAIL_FROM || 
                      process.env.GOOGLE_USER_EMAIL ||
                      process.env.NEXT_PUBLIC_APP_EMAIL_FROM ||
                      process.env.NEXT_PUBLIC_APP_SMTP_USER;
    const recipient = process.env.CONTACT_EMAIL_RECIPIENT || 
                     process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL_RECIPIENT ||
                     fromEmail;
    
    const mailOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: recipient,
      replyTo: email,
      subject: subject || `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
              .content { background-color: #ffffff; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-radius: 3px; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
                <p>You have received a new message from your website contact form.</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${subject ? `
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the contact form on ${process.env.NEXT_PUBLIC_SITE_URL || 'your website'}.</p>
                <p>Submitted on: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}\n` : ''}
Message:
${message}

---
This email was sent from the contact form on your website.
Submitted on: ${new Date().toLocaleString()}
      `,
    };

    // Add CC and BCC if configured
    const cc = process.env.CONTACT_EMAIL_CC || process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL_CC;
    const bcc = process.env.CONTACT_EMAIL_BCC || process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL_BCC;
    
    if (cc) {
      mailOptions.cc = cc.split(',').map(email => email.trim());
    }
    if (bcc) {
      mailOptions.bcc = bcc.split(',').map(email => email.trim());
    }

    // Send notification email to company
    const info = await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
    try {
      const confirmationTemplate = getConfirmationEmailTemplate('contact', { name });
      const confirmationMailOptions = {
        from: `"${fromName}" <${fromEmail}>`,
        to: email,
        subject: confirmationTemplate.subject,
        html: confirmationTemplate.html,
        text: confirmationTemplate.text,
      };

      await transporter.sendMail(confirmationMailOptions);
      console.log('Confirmation email sent to customer:', email);
    } catch (confirmationError) {
      // Log error but don't fail the request if confirmation email fails
      console.error('Error sending confirmation email to customer:', confirmationError);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! We will get back to you soon.',
        messageId: info.messageId 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}


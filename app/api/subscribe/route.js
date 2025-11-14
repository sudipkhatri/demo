import { NextResponse } from 'next/server';
import { createGmailTransporter } from '@/lib/gmail-oauth';
import { getSubscriptionEmailTemplate } from '@/lib/email-templates';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required.' },
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
    const recipient = process.env.SUBSCRIPTION_EMAIL_RECIPIENT || 
                     process.env.CONTACT_EMAIL_RECIPIENT ||
                     process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL_RECIPIENT ||
                     fromEmail;
    
    // Notification email to company
    const mailOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: recipient,
      replyTo: email,
      subject: `New Newsletter Subscription: ${email}`,
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
              .highlight { background-color: #e8f4f8; padding: 15px; border-left: 4px solid #25d366; margin: 20px 0; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Newsletter Subscription</h2>
                <p>You have received a new newsletter subscription from your website.</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Subscriber Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="highlight">
                  <p><strong>Action Required:</strong> A welcome email has been automatically sent to the subscriber. You may want to add this email to your newsletter distribution list.</p>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the subscription form on ${process.env.NEXT_PUBLIC_SITE_URL || 'your website'}.</p>
                <p>Subscribed on: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Newsletter Subscription

Subscriber Email: ${email}

Action Required: A welcome email has been automatically sent to the subscriber. You may want to add this email to your newsletter distribution list.

---
This email was sent from the subscription form on your website.
Subscribed on: ${new Date().toLocaleString()}
      `,
    };

    // Add CC and BCC if configured
    const cc = process.env.SUBSCRIPTION_EMAIL_CC || process.env.CONTACT_EMAIL_CC || process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL_CC;
    const bcc = process.env.SUBSCRIPTION_EMAIL_BCC || process.env.CONTACT_EMAIL_BCC || process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL_BCC;
    
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
      const confirmationTemplate = getSubscriptionEmailTemplate(email);
      const confirmationMailOptions = {
        from: `"${fromName}" <${fromEmail}>`,
        to: email,
        subject: confirmationTemplate.subject,
        html: confirmationTemplate.html,
        text: confirmationTemplate.text,
      };

      await transporter.sendMail(confirmationMailOptions);
      console.log('Subscription confirmation email sent to customer:', email);
    } catch (confirmationError) {
      // Log error but don't fail the request if confirmation email fails
      console.error('Error sending subscription confirmation email to customer:', confirmationError);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing! Please check your email for confirmation.',
        messageId: info.messageId 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process subscription. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}


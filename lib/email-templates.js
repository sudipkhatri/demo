/**
 * Professional email templates for customer confirmations
 */

export function getConfirmationEmailTemplate(type, customerData) {
  const fromName = process.env.EMAIL_FROM_NAME || 
                   process.env.NEXT_PUBLIC_APP_EMAIL_FROM_NAME || 
                   'Sharpline Solutions';
  const companyPhone = process.env.COMPANY_PHONE || '+61 414 603 059';
  const companyEmail = process.env.COMPANY_EMAIL || 'info@sharplinesolutions.com.au';
  const companyWebsite = process.env.COMPANY_WEBSITE || process.env.NEXT_PUBLIC_SITE_URL || 'https://sharplinesolutions.com.au';
  const coverage = process.env.COMPANY_COVERAGE || 'Sydney, Central Coast, and Wollongong';

  const isContactForm = type === 'contact';
  const customerName = isContactForm ? customerData.name : `${customerData.firstName} ${customerData.lastName || ''}`.trim();
  const subject = isContactForm 
    ? 'Thank You for Contacting Sharpline Solutions'
    : 'Thank You for Your Quote Request - Sharpline Solutions';

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
          }
          .email-header {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
          }
          .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
            color: #ffffff;
          }
          .email-body {
            padding: 40px 30px;
            background-color: #ffffff;
          }
          .greeting {
            font-size: 18px;
            color: #1a1a1a;
            margin-bottom: 20px;
            font-weight: 600;
          }
          .message {
            font-size: 16px;
            color: #555555;
            margin-bottom: 25px;
            line-height: 1.8;
          }
          .highlight-box {
            background-color: #f8f9fa;
            border-left: 4px solid #2196F3;
            padding: 20px;
            margin: 25px 0;
            border-radius: 4px;
          }
          .highlight-box p {
            margin: 0;
            color: #333333;
            font-size: 15px;
          }
          .contact-info {
            background-color: #f8f9fa;
            padding: 25px;
            margin: 30px 0;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
          }
          .contact-info h3 {
            margin: 0 0 15px 0;
            color: #1a1a1a;
            font-size: 18px;
          }
          .contact-item {
            margin: 12px 0;
            font-size: 15px;
            color: #555555;
          }
          .contact-item strong {
            color: #1a1a1a;
            display: inline-block;
            min-width: 100px;
          }
          .contact-item a {
            color: #2196F3;
            text-decoration: none;
          }
          .contact-item a:hover {
            text-decoration: underline;
          }
          .email-footer {
            background-color: #1a1a1a;
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
            font-size: 13px;
            line-height: 1.6;
          }
          .email-footer p {
            margin: 8px 0;
            color: #cccccc;
          }
          .email-footer a {
            color: #ffffff;
            text-decoration: underline;
          }
          .divider {
            border-top: 1px solid #e0e0e0;
            margin: 30px 0;
          }
          @media only screen and (max-width: 600px) {
            .email-body {
              padding: 30px 20px;
            }
            .email-header {
              padding: 25px 15px;
            }
            .email-header h1 {
              font-size: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <!-- Header -->
          <div class="email-header">
            <h1>Sharpline Solutions</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; color: #cccccc;">Professional Property Services</p>
          </div>

          <!-- Body -->
          <div class="email-body">
            <div class="greeting">
              Dear ${customerName},
            </div>

            <div class="message">
              ${isContactForm 
                ? `Thank you for reaching out to Sharpline Solutions! We have successfully received your message and appreciate you taking the time to contact us.`
                : `Thank you for your interest in Sharpline Solutions! We have successfully received your quote request and are excited about the opportunity to assist you with your property service needs.`
              }
            </div>

            <div class="highlight-box">
              <p>
                <strong>What happens next?</strong><br>
                ${isContactForm
                  ? `Our team will review your message and get back to you within 24-48 hours. We're committed to providing you with the best service and addressing all your inquiries.`
                  : `Our experienced team will review your requirements and prepare a detailed quote tailored to your needs. We'll contact you within 24-48 hours to discuss your project and provide you with a comprehensive proposal.`
                }
              </p>
            </div>

            <div class="contact-info">
              <h3>Get in Touch</h3>
              <div class="contact-item">
                <strong>Phone:</strong> <a href="tel:${companyPhone}">${companyPhone}</a>
              </div>
              <div class="contact-item">
                <strong>Email:</strong> <a href="mailto:${companyEmail}">${companyEmail}</a>
              </div>
              <div class="contact-item">
                <strong>Website:</strong> <a href="${companyWebsite}" target="_blank">${companyWebsite}</a>
              </div>
              <div class="contact-item">
                <strong>Coverage:</strong> ${coverage}
              </div>
            </div>

            <div class="message">
              ${isContactForm
                ? `If you have any urgent questions or need immediate assistance, please don't hesitate to call us directly. We're here to help!`
                : `If you have any questions or need to discuss your requirements further, please feel free to contact us. We're here to help make your project a success!`
              }
            </div>

            <div class="message" style="margin-top: 30px;">
              Best regards,<br>
              <strong>The Sharpline Solutions Team</strong>
            </div>
          </div>

          <!-- Footer -->
          <div class="email-footer">
            <p><strong>Sharpline Solutions</strong></p>
            <p>Professional Property Services Across Sydney, Central Coast & Wollongong</p>
            <div class="divider" style="border-color: #444444; margin: 20px 0;"></div>
            <p style="font-size: 12px; color: #999999;">
              This is an automated confirmation email. Please do not reply directly to this message.<br>
              If you need to contact us, please use the information provided above.
            </p>
            <p style="font-size: 11px; color: #777777; margin-top: 15px;">
              © ${new Date().getFullYear()} Sharpline Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
Dear ${customerName},

${isContactForm 
  ? `Thank you for reaching out to Sharpline Solutions! We have successfully received your message and appreciate you taking the time to contact us.`
  : `Thank you for your interest in Sharpline Solutions! We have successfully received your quote request and are excited about the opportunity to assist you with your property service needs.`
}

What happens next?
${isContactForm
  ? `Our team will review your message and get back to you within 24-48 hours. We're committed to providing you with the best service and addressing all your inquiries.`
  : `Our experienced team will review your requirements and prepare a detailed quote tailored to your needs. We'll contact you within 24-48 hours to discuss your project and provide you with a comprehensive proposal.`
}

Get in Touch:
Phone: ${companyPhone}
Email: ${companyEmail}
Website: ${companyWebsite}
Coverage: ${coverage}

${isContactForm
  ? `If you have any urgent questions or need immediate assistance, please don't hesitate to call us directly. We're here to help!`
  : `If you have any questions or need to discuss your requirements further, please feel free to contact us. We're here to help make your project a success!`
}

Best regards,
The Sharpline Solutions Team

---
Sharpline Solutions
Professional Property Services Across Sydney, Central Coast & Wollongong

This is an automated confirmation email. Please do not reply directly to this message.
If you need to contact us, please use the information provided above.

© ${new Date().getFullYear()} Sharpline Solutions. All rights reserved.
  `;

  return { subject, html, text };
}

/**
 * Subscription email template for newsletter signups
 */
export function getSubscriptionEmailTemplate(customerEmail) {
  const fromName = process.env.EMAIL_FROM_NAME || 
                   process.env.NEXT_PUBLIC_APP_EMAIL_FROM_NAME || 
                   'Sharpline Solutions';
  const companyPhone = process.env.COMPANY_PHONE || '+61 414 603 059';
  const companyEmail = process.env.COMPANY_EMAIL || 'info@sharplinesolutions.com.au';
  const companyWebsite = process.env.COMPANY_WEBSITE || process.env.NEXT_PUBLIC_SITE_URL || 'https://sharplinesolutions.com.au';
  const coverage = process.env.COMPANY_COVERAGE || 'Sydney, Central Coast, and Wollongong';

  const subject = 'Welcome to Sharpline Solutions Newsletter!';

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
          }
          .email-header {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
          }
          .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
            color: #ffffff;
          }
          .email-body {
            padding: 40px 30px;
            background-color: #ffffff;
          }
          .greeting {
            font-size: 18px;
            color: #1a1a1a;
            margin-bottom: 20px;
            font-weight: 600;
          }
          .message {
            font-size: 16px;
            color: #555555;
            margin-bottom: 25px;
            line-height: 1.8;
          }
          .highlight-box {
            background-color: #f8f9fa;
            border-left: 4px solid #25d366;
            padding: 20px;
            margin: 25px 0;
            border-radius: 4px;
          }
          .highlight-box p {
            margin: 0;
            color: #333333;
            font-size: 15px;
          }
          .benefits-list {
            background-color: #f8f9fa;
            padding: 25px;
            margin: 30px 0;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
          }
          .benefits-list h3 {
            margin: 0 0 15px 0;
            color: #1a1a1a;
            font-size: 18px;
          }
          .benefits-list ul {
            margin: 0;
            padding-left: 20px;
            color: #555555;
          }
          .benefits-list li {
            margin: 10px 0;
            font-size: 15px;
          }
          .contact-info {
            background-color: #f8f9fa;
            padding: 25px;
            margin: 30px 0;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
          }
          .contact-info h3 {
            margin: 0 0 15px 0;
            color: #1a1a1a;
            font-size: 18px;
          }
          .contact-item {
            margin: 12px 0;
            font-size: 15px;
            color: #555555;
          }
          .contact-item strong {
            color: #1a1a1a;
            display: inline-block;
            min-width: 100px;
          }
          .contact-item a {
            color: #2196F3;
            text-decoration: none;
          }
          .contact-item a:hover {
            text-decoration: underline;
          }
          .email-footer {
            background-color: #1a1a1a;
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
            font-size: 13px;
            line-height: 1.6;
          }
          .email-footer p {
            margin: 8px 0;
            color: #cccccc;
          }
          .email-footer a {
            color: #ffffff;
            text-decoration: underline;
          }
          .divider {
            border-top: 1px solid #e0e0e0;
            margin: 30px 0;
          }
          @media only screen and (max-width: 600px) {
            .email-body {
              padding: 30px 20px;
            }
            .email-header {
              padding: 25px 15px;
            }
            .email-header h1 {
              font-size: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <!-- Header -->
          <div class="email-header">
            <h1>Welcome to Sharpline Solutions!</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px; color: #cccccc;">Thank You for Subscribing</p>
          </div>

          <!-- Body -->
          <div class="email-body">
            <div class="greeting">
              Hello,
            </div>

            <div class="message">
              Thank you for subscribing to Sharpline Solutions newsletter! We're thrilled to have you join our community of property service enthusiasts.
            </div>

            <div class="highlight-box">
              <p>
                <strong>What to expect:</strong><br>
                You'll receive exclusive updates, property service tips, industry insights, special offers, and news about our latest services. We promise to keep our communications valuable and relevant to your needs.
              </p>
            </div>

            <div class="benefits-list">
              <h3>What You'll Get:</h3>
              <ul>
                <li>Expert property service tips and advice</li>
                <li>Exclusive offers and promotions</li>
                <li>Latest industry news and updates</li>
                <li>Early access to new services</li>
                <li>Helpful maintenance guides</li>
              </ul>
            </div>

            <div class="contact-info">
              <h3>Need Help Right Now?</h3>
              <div class="contact-item">
                <strong>Phone:</strong> <a href="tel:${companyPhone}">${companyPhone}</a>
              </div>
              <div class="contact-item">
                <strong>Email:</strong> <a href="mailto:${companyEmail}">${companyEmail}</a>
              </div>
              <div class="contact-item">
                <strong>Website:</strong> <a href="${companyWebsite}" target="_blank">${companyWebsite}</a>
              </div>
              <div class="contact-item">
                <strong>Coverage:</strong> ${coverage}
              </div>
            </div>

            <div class="message">
              If you have any questions about our services or need immediate assistance, please don't hesitate to reach out. We're here to help!
            </div>

            <div class="message" style="margin-top: 30px;">
              Best regards,<br>
              <strong>The Sharpline Solutions Team</strong>
            </div>
          </div>

          <!-- Footer -->
          <div class="email-footer">
            <p><strong>Sharpline Solutions</strong></p>
            <p>Professional Property Services Across Sydney, Central Coast & Wollongong</p>
            <div class="divider" style="border-color: #444444; margin: 20px 0;"></div>
            <p style="font-size: 12px; color: #999999;">
              You're receiving this email because you subscribed to our newsletter.<br>
              If you no longer wish to receive these emails, please <a href="${companyWebsite}/unsubscribe?email=${encodeURIComponent(customerEmail)}" style="color: #ffffff;">unsubscribe here</a>.
            </p>
            <p style="font-size: 11px; color: #777777; margin-top: 15px;">
              © ${new Date().getFullYear()} Sharpline Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
Hello,

Thank you for subscribing to Sharpline Solutions newsletter! We're thrilled to have you join our community of property service enthusiasts.

What to expect:
You'll receive exclusive updates, property service tips, industry insights, special offers, and news about our latest services. We promise to keep our communications valuable and relevant to your needs.

What You'll Get:
- Expert property service tips and advice
- Exclusive offers and promotions
- Latest industry news and updates
- Early access to new services
- Helpful maintenance guides

Need Help Right Now?
Phone: ${companyPhone}
Email: ${companyEmail}
Website: ${companyWebsite}
Coverage: ${coverage}

If you have any questions about our services or need immediate assistance, please don't hesitate to reach out. We're here to help!

Best regards,
The Sharpline Solutions Team

---
Sharpline Solutions
Professional Property Services Across Sydney, Central Coast & Wollongong

You're receiving this email because you subscribed to our newsletter.
If you no longer wish to receive these emails, please visit ${companyWebsite}/unsubscribe

© ${new Date().getFullYear()} Sharpline Solutions. All rights reserved.
  `;

  return { subject, html, text };
}


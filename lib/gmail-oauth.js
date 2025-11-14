import nodemailer from 'nodemailer';

/**
 * Create a Gmail transporter using OAuth2
 * Requires: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, GOOGLE_ACCESS_TOKEN (optional)
 */
export function createGmailTransporter() {
  // Support multiple variable name formats
  const clientId = process.env.GOOGLE_CLIENT_ID || 
                   process.env.NEXT_PUBLIC_APP_CLIENT_ID ||
                   process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
                   
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET || 
                       process.env.NEXT_PUBLIC_APP_CLIENT_SECRET ||
                       process.env.APP_CLIENT_SECRET;
                       
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN ||
                       process.env.NEXT_PUBLIC_APP_REFRESH_TOKEN ||
                       process.env.APP_REFRESH_TOKEN;

  // Check for required environment variables
  if (!clientId || !clientSecret) {
    throw new Error('Google Client ID and Client Secret are required. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET (or NEXT_PUBLIC_APP_CLIENT_ID and NEXT_PUBLIC_APP_CLIENT_SECRET)');
  }

  if (!refreshToken) {
    throw new Error('Refresh token is required. Set GOOGLE_REFRESH_TOKEN (or NEXT_PUBLIC_APP_REFRESH_TOKEN)');
  }

  // Get the email address to send from (support multiple variable name formats)
  const userEmail = process.env.EMAIL_FROM || 
                    process.env.GOOGLE_USER_EMAIL ||
                    process.env.NEXT_PUBLIC_APP_EMAIL_FROM ||
                    process.env.NEXT_PUBLIC_APP_SMTP_USER;
  
  if (!userEmail) {
    throw new Error('EMAIL_FROM, GOOGLE_USER_EMAIL, NEXT_PUBLIC_APP_EMAIL_FROM, or NEXT_PUBLIC_APP_SMTP_USER must be set in environment variables');
  }

  // Create OAuth2 transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: userEmail,
      clientId: clientId,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
      accessToken: process.env.GOOGLE_ACCESS_TOKEN || 
                   process.env.NEXT_PUBLIC_APP_ACCESS_TOKEN, // Optional, will be auto-generated if not provided
    },
  });

  return transporter;
}

/**
 * Get a new access token using refresh token
 * This is automatically handled by nodemailer, but can be used manually if needed
 */
export async function refreshAccessToken() {
  const { google } = await import('googleapis');
  
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3001/api/auth/callback'
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const { credentials } = await oauth2Client.refreshAccessToken();
  return credentials.access_token;
}


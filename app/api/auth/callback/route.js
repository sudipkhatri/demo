import { NextResponse } from 'next/server';
import { google } from 'googleapis';

/**
 * OAuth2 callback handler for Gmail token generation
 * This route handles the redirect from Google OAuth consent screen
 */
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.json(
      { error: `OAuth error: ${error}` },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json(
      { error: 'No authorization code provided' },
      { status: 400 }
    );
  }

  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/api/auth/callback`
    );

    const { tokens } = await oauth2Client.getToken(code);

    // Return a simple HTML page with the tokens
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Gmail OAuth Success</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 600px;
              margin: 50px auto;
              padding: 20px;
              background-color: #f5f5f5;
            }
            .container {
              background: white;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            h1 { color: #34a853; }
            .token-box {
              background: #f8f9fa;
              padding: 15px;
              border-radius: 4px;
              margin: 15px 0;
              word-break: break-all;
              font-family: monospace;
              border: 1px solid #ddd;
            }
            .warning {
              background: #fff3cd;
              border: 1px solid #ffc107;
              padding: 15px;
              border-radius: 4px;
              margin-top: 20px;
            }
            button {
              background: #34a853;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 4px;
              cursor: pointer;
              margin-top: 10px;
            }
            button:hover {
              background: #2d8f47;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>✅ Gmail OAuth Authorization Successful!</h1>
            <p>Copy these values to your <code>.env.local</code> file:</p>
            
            <div class="token-box">
              <strong>GOOGLE_REFRESH_TOKEN:</strong><br>
              ${tokens.refresh_token || 'Not provided'}
            </div>
            
            ${tokens.access_token ? `
            <div class="token-box">
              <strong>GOOGLE_ACCESS_TOKEN:</strong><br>
              ${tokens.access_token}
            </div>
            ` : ''}
            
            <div class="warning">
              <strong>⚠️ Important:</strong>
              <ul>
                <li>Keep these tokens secure</li>
                <li>Never commit them to version control</li>
                <li>The refresh token is permanent (unless revoked)</li>
                <li>The access token expires and will be auto-refreshed</li>
              </ul>
            </div>
            
            <button onclick="copyTokens()">Copy Refresh Token</button>
          </div>
          
          <script>
            function copyTokens() {
              const token = '${tokens.refresh_token}';
              navigator.clipboard.writeText('GOOGLE_REFRESH_TOKEN=' + token).then(() => {
                alert('Refresh token copied to clipboard!');
              });
            }
          </script>
        </body>
      </html>
      `,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  } catch (error) {
    console.error('Error in OAuth callback:', error);
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>OAuth Error</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 600px;
              margin: 50px auto;
              padding: 20px;
            }
            .error {
              background: #f8d7da;
              border: 1px solid #f5c6cb;
              padding: 20px;
              border-radius: 4px;
              color: #721c24;
            }
          </style>
        </head>
        <body>
          <div class="error">
            <h1>❌ OAuth Error</h1>
            <p>${error.message}</p>
            <p>Please try running the token generation script again.</p>
          </div>
        </body>
      </html>
      `,
      {
        status: 400,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  }
}


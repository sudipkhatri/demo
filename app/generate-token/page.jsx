"use client";
import { useState } from 'react';

export default function GenerateTokenPage() {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState('');
  const [tokens, setTokens] = useState(null);
  const [error, setError] = useState('');

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';
  const redirectUri = typeof window !== 'undefined' 
    ? `${window.location.origin}/api/auth/callback`
    : '';

  const handleGenerateUrl = () => {
    if (!clientId) {
      setError('NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set in environment variables');
      return;
    }

    const scopes = 'https://www.googleapis.com/auth/gmail.send';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${clientId}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `response_type=code&` +
      `scope=${encodeURIComponent(scopes)}&` +
      `access_type=offline&` +
      `prompt=consent`;

    window.open(authUrl, '_blank');
    setStep(2);
  };

  const handleSubmitCode = async () => {
    if (!code) {
      setError('Please enter the authorization code');
      return;
    }

    try {
      const response = await fetch('/api/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setTokens(data);
        setStep(3);
      }
    } catch (err) {
      setError('Failed to exchange code for token. Please try again.');
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <h1>Gmail OAuth2 Token Generator</h1>

      {step === 1 && (
        <div>
          <h2>Step 1: Generate Authorization URL</h2>
          <p>Click the button below to open Google's authorization page in a new tab.</p>
          <button 
            onClick={handleGenerateUrl}
            style={{
              padding: '10px 20px',
              backgroundColor: '#34a853',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Open Google Authorization Page
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Enter Authorization Code</h2>
          <p>After authorizing, you'll be redirected. Copy the "code" parameter from the URL.</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter authorization code"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          <button
            onClick={handleSubmitCode}
            style={{
              padding: '10px 20px',
              backgroundColor: '#34a853',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px',
              fontSize: '16px'
            }}
          >
            Get Refresh Token
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
      )}

      {step === 3 && tokens && (
        <div>
          <h2>Step 3: Copy Your Tokens</h2>
          <div style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginTop: '20px'
          }}>
            <h3>Add these to your .env.local file:</h3>
            
            <div style={{ marginTop: '15px' }}>
              <strong>GOOGLE_REFRESH_TOKEN:</strong>
              <div style={{
                background: 'white',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '4px',
                wordBreak: 'break-all',
                fontFamily: 'monospace',
                border: '1px solid #ddd'
              }}>
                {tokens.refresh_token}
              </div>
              <button
                onClick={() => copyToClipboard(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`)}
                style={{
                  marginTop: '5px',
                  padding: '5px 10px',
                  backgroundColor: '#4285f4',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Copy
              </button>
            </div>

            {tokens.access_token && (
              <div style={{ marginTop: '15px' }}>
                <strong>GOOGLE_ACCESS_TOKEN (optional):</strong>
                <div style={{
                  background: 'white',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '4px',
                  wordBreak: 'break-all',
                  fontFamily: 'monospace',
                  border: '1px solid #ddd'
                }}>
                  {tokens.access_token}
                </div>
              </div>
            )}

            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffc107',
              padding: '15px',
              borderRadius: '4px',
              marginTop: '20px'
            }}>
              <strong>⚠️ Important:</strong>
              <ul>
                <li>Keep these tokens secure</li>
                <li>Never commit them to version control</li>
                <li>The refresh token is permanent (unless revoked)</li>
                <li>The access token expires and will be auto-refreshed</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


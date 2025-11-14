import { NextResponse } from 'next/server';
import { google } from 'googleapis';

/**
 * Exchange authorization code for refresh token
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { code } = body;

    if (!code) {
      return NextResponse.json(
        { error: 'Authorization code is required' },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be configured' },
        { status: 500 }
      );
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/api/auth/callback`
    );

    const { tokens } = await oauth2Client.getToken(code);

    return NextResponse.json({
      refresh_token: tokens.refresh_token,
      access_token: tokens.access_token,
    });
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to exchange authorization code',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}


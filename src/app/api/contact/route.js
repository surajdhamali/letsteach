// src/app/api/contact/route.js
// Proxy API — receives form submissions from letsteach.com
// and forwards them to SparkTG's lead capture endpoint.

import { NextResponse } from 'next/server';

// ── Encoder ───────────────────────────────────────────────────────────────────
function encodeField(value) {
  const sanitized = String(value).trim()
    .replace(/·/g,    '-')
    .replace(/•/g,    '-')
    .replace(/–/g,    '-')
    .replace(/—/g,    '-')
    .replace(/[""]/g, '')
    .replace(/['']/g, "'")
    .replace(/…/g,    '...')
    .replace(/[^\x00-\x7F]/g, '');

  return encodeURIComponent(sanitized)
    .replace(/%40/gi,  '@')
    .replace(/%3A/gi,  ':')
    .replace(/%20/g,   ' ')
    .replace(/%2C/gi,  ',')
    .replace(/%21/gi,  '!')
    .replace(/%27/gi,  "'")
    .replace(/%2F/gi,  '/')
    .replace(/%28/gi,  '(')
    .replace(/%29/gi,  ')')
    .replace(/%2D/gi,  '-')
    .replace(/%5F/gi,  '_')
    .replace(/%2E/gi,  '.')
    .replace(/%5B/gi,  '[')
    .replace(/%5D/gi,  ']')
    .replace(/%7C/gi,  '|');
}

// ── POST ──────────────────────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      mobile,
      company      = '',
      subject      = 'General Enquiry',
      query        = 'No message provided',
      form_name    = 'Unknown Form',       // ← which form was filled
      utm_source   = 'direct',
      utm_medium   = 'none',
      utm_campaign = 'none',
      utm_term     = 'none',
      utm_adgroup  = 'none',
    } = body;

    // ── Validation ────────────────────────────────────────────────────────
    if (!name || !email || !mobile) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and mobile are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(mobile.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    // ── Clean ─────────────────────────────────────────────────────────────
    const cleanName    = name.trim();
    const cleanEmail   = email.trim();
    const cleanMobile  = mobile.trim();
    const cleanCompany = company.trim() || 'Not provided';
    const cleanSubject = subject.trim();
    const cleanQuery   = query.trim();
    const cleanForm    = form_name.trim();

    // ── Build full query with website + form identification ───────────────
    // This makes it clear in SparkTG email exactly which site and form this came from
    const utmNote   = `Source: ${utm_source} | Medium: ${utm_medium} | Campaign: ${utm_campaign} | Keyword: ${utm_term} | Ad Group: ${utm_adgroup}`;
    const fullQuery = `[letsteach.com] [${cleanForm}] ${cleanQuery} -- UTM -- ${utmNote}`;

    // ── Build SparkTG API URL ─────────────────────────────────────────────
    const params = [
      `name=${encodeField(cleanName)}`,
      `email=${encodeField(cleanEmail)}`,
      `mobile=${encodeField(cleanMobile)}`,
      `company=${encodeField(cleanCompany)}`,
      `subject=${encodeField(cleanSubject)}`,
      `query=${encodeField(fullQuery)}`,
    ].join('&');

    const apiUrl = `https://sparktg.com/contactusapi?${params}`;

    console.log('=== letsteach.com → SparkTG ===');
    console.log('Website :', 'letsteach.com');
    console.log('Form    :', cleanForm);
    console.log('Lead    :', { name: cleanName, email: cleanEmail, mobile: cleanMobile, company: cleanCompany });
    console.log('Subject :', cleanSubject);
    console.log('UTM     :', { utm_source, utm_medium, utm_campaign, utm_term, utm_adgroup });

    // ── Forward to SparkTG ────────────────────────────────────────────────
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept':     'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SparkTG error:', errorText);
      throw new Error(`SparkTG returned ${response.status}`);
    }

    const result = await response.text();
    console.log('SparkTG response:', result.slice(0, 120));

    return NextResponse.json(
      { success: true, message: 'Thank you! Our team will connect with you shortly.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== letsteach Contact API Error ===', error.message);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'This endpoint only accepts POST requests.' },
    { status: 405 }
  );
}
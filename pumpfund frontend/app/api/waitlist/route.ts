import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, telegram, role } = await request.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Get database connection - check multiple possible env var names
    const databaseUrl = 
      process.env.NETLIFY_DATABASE_URL || 
      process.env.DATABASE_URL || 
      process.env.NEON_DATABASE_URL ||
      process.env.POSTGRES_URL ||
      process.env.NEON_NEON_DATABASE_URL
    
    if (!databaseUrl) {
      // Log all env vars starting with common prefixes for debugging
      const envKeys = Object.keys(process.env).filter(k => 
        k.includes('DATABASE') || k.includes('NEON') || k.includes('POSTGRES') || k.includes('PG')
      )
      console.error('No database URL found. Available related env vars:', envKeys)
      return NextResponse.json(
        { error: 'Database configuration error' },
        { status: 500 }
      )
    }
    
    console.log('Using database URL from env')

    const sql = neon(databaseUrl)

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        telegram VARCHAR(255),
        role VARCHAR(50) DEFAULT 'trader',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Insert the new waitlist entry
    await sql`
      INSERT INTO waitlist (email, telegram, role)
      VALUES (${email}, ${telegram || null}, ${role || 'trader'})
      ON CONFLICT (email) DO UPDATE SET
        telegram = COALESCE(EXCLUDED.telegram, waitlist.telegram),
        role = COALESCE(EXCLUDED.role, waitlist.role)
    `

    return NextResponse.json(
      { success: true, message: 'Successfully joined the waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    
    // Check for duplicate email error
    if (error instanceof Error && error.message.includes('duplicate')) {
      return NextResponse.json(
        { success: true, message: 'You are already on the waitlist!' },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    )
  }
}

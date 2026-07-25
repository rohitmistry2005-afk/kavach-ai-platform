import { neon } from "@neondatabase/serverless";

export const DATABASE_URL =
  "postgresql://neondb_owner:npg_ZEQG3UR2Wukf@ep-billowing-band-ayjezhvs-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

// Initialize Neon HTTP query client
export const sql = neon(DATABASE_URL);

/**
 * Ensures the officers database table exists and seeds default officers if empty.
 */
export async function initDb() {
  try {
    // 1. Create officers table if not existing
    await sql`
      CREATE TABLE IF NOT EXISTS officers (
        id SERIAL PRIMARY KEY,
        badge_id VARCHAR(50) UNIQUE NOT NULL,
        full_name VARCHAR(100) NOT NULL,
        rank_designation VARCHAR(100) NOT NULL,
        assigned_division VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        police_code VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Check if default DCP Arindam Roy exists, seed if empty
    const existing = await sql`
      SELECT id FROM officers WHERE badge_id = 'KP-8842' OR email = 'arindam.roy@kolkatapolice.gov.in';
    `;

    if (existing.length === 0) {
      await sql`
        INSERT INTO officers (
          badge_id, full_name, rank_designation, assigned_division, phone, email, password, police_code
        ) VALUES (
          'KP-8842',
          'DCP. Arindam Roy',
          'Deputy Commissioner of Police',
          'Salt Lake Division (East Zone)',
          '+91 98300 12345',
          'arindam.roy@kolkatapolice.gov.in',
          'password123',
          'KP-OFFICER-2024'
        );
      `;
    }
    return { success: true };
  } catch (error) {
    console.error("Database init error:", error);
    return { success: false, error: String(error) };
  }
}

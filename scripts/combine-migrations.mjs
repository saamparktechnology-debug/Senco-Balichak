import fs from 'fs';
import path from 'path';

const migrationsDir = path.resolve('supabase/migrations');
const outputFile = path.resolve('supabase/complete_fresh_setup.sql');

const files = fs.readdirSync(migrationsDir)
  .filter(f => f.endsWith('.sql'))
  .sort();

let combined = `-- ============================================================
-- SENCO GOLD & DIAMONDS - COMPLETE FRESH DATABASE SETUP
-- Generated from migrations 001 to 042
-- ============================================================

`;

for (const file of files) {
  const filePath = path.join(migrationsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  combined += `\n-- ------------------------------------------------------------\n`;
  combined += `-- MIGRATION: ${file}\n`;
  combined += `-- ------------------------------------------------------------\n\n`;
  combined += content;
  combined += `\n`;
}

fs.writeFileSync(outputFile, combined, 'utf8');
console.log(`Combined ${files.length} migrations into ${outputFile}`);

const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.query(`CREATE TABLE IF NOT EXISTS visits (
  id SERIAL PRIMARY KEY,
  visited_at TIMESTAMP DEFAULT NOW()
)`);

app.get('/', async (req, res) => {
  await pool.query('INSERT INTO visits DEFAULT VALUES');
  const result = await pool.query('SELECT COUNT(*) FROM visits');
  res.send(`
    <h1>Hello! SWE40006 Portfolio 3 - Charlene</h1>
    <p>This page has been visited <strong>${result.rows[0].count}</strong> times.</p>
    <p>Each visit is recorded in a Render PostgreSQL database.</p>
  `);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
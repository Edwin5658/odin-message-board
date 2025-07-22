import { pool } from './db.js';

export async function initDB() {
    try {
    await pool.connect();
    console.log('Database pool connected');
    
    await pool.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='messages' AND xtype='U')
      CREATE TABLE messages (
        id INT IDENTITY(1,1) PRIMARY KEY,
        username NVARCHAR(100) NOT NULL,
        text NVARCHAR(MAX) NOT NULL,
        time DATETIME2 NOT NULL,
        flagged BIT NOT NULL DEFAULT 0
      )
    `);
    
    console.log('Database initialized');
  } catch (err) {
    console.error('Database initialization failed:', err);
  }
}


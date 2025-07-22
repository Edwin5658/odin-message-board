import { pool } from "./db.js";
import sql from 'mssql';

const getAllMessages = async () => {
  try {
    const result = await pool.request().query(`
      SELECT * FROM messages 
      ORDER BY time 
    `);
    return result.recordset;
  } catch (err) {
    console.error('Error fetching messages:', err);
  }
};

const insertMessage = async (username, text) => {
  try {
    const result = await pool.request()
            .input('username', sql.NVarChar(100), username)
            .input('text', sql.NVarChar(sql.MAX), text)
            .query(`
                INSERT INTO messages (username, text, time) 
                VALUES (@username, @text, SYSDATETIME())
            `);
        return result.rowsAffected[0] === 1; 
  } catch (err) {
    console.error('Error fetching messages:', err);
  }
};

export default { getAllMessages, insertMessage };
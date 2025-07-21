import config from './config.js';
import sql from 'mssql';

const initDatabase = async () => {
  try {
    await sql.connect(config);
    console.log('Connected to the database!');

  } catch (err) {
    console.error(err);
  }
};

export default initDatabase;
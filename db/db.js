import sql from 'mssql';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  options: {
    trustedConnection: false,
    trustServerCertificate: true,
    trustedConnection: false,    
    encrypt: false                   
  },
};

export const pool = new sql.ConnectionPool(config);

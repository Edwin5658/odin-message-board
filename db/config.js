const config = {
  server: '(localdb)\\MessageTables',
  database: 'messages',
  options: {
    trustedConnection: true,
    trustServerCertificate: true,    
    encrypt: false                   
  },
};

export default config;
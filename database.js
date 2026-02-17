import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST || process.env.MYSQL_HOST,
  user: process.env.MYSQLUSER || process.env.MYSQL_USER,
  password: process.env.MYSQLPASSWORD || process.env.MYSQL_PASSWORD,
  database: process.env.MYSQLDATABASE || process.env.MYSQL_NAME,
  port: parseInt(process.env.MYSQLPORT || process.env.MYSQL_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection on startup
pool.getConnection()
  .then(connection => {
    console.log('✅ Database connected successfully');
    console.log(`📍 Connected to: ${process.env.MYSQLHOST || process.env.MYSQL_HOST}`);
    connection.release();
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err.message);
    console.error('Config:', {
      host: process.env.MYSQLHOST || process.env.MYSQL_HOST,
      user: process.env.MYSQLUSER || process.env.MYSQL_USER,
      database: process.env.MYSQLDATABASE || process.env.MYSQL_NAME,
      port: process.env.MYSQLPORT || process.env.MYSQL_PORT
    });
  });

export default pool;
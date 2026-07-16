import mysql from 'mysql2/promise'

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_password',
  database: 'BlogDB',
  waitForConnections: true,
  connectionLimit: 10,
})
const exportado = { db }

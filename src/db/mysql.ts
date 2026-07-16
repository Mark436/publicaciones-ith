import mysql from 'mysql2/promise'

export const db = await mysql.createConnection({
  uri: import.meta.env.MYSQL_URI,
})

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
const urlDB = "mysql://root:RrgKstUuVqlJfRyUwVqeKIsrugwYLNug@mysql.railway.internal:3306/railway"
export const pool = mysql.createPool( urlDB );    
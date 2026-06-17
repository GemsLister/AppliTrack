import { pool } from "../db";

export const UserModel = {
  // Create a new user
  create: async (username: string, email: string, password: string) => {
    const result = await pool.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email`,
      [username, email, password],
    );
    return result.rows[0];
  },

  //  If the user already exixts
  findByEmail: async (email: string) => {
    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    return result.rows[0];
  },
};

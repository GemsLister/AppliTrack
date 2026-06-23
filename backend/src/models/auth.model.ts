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

  // Forgot Password
  saveResetToken: async (
    email: string,
    resetToken: string,
    resetTokenExpiry: Date,
  ) => {
    try {
      const result = await pool.query(
        `UPDATE users SET reset_token = $1, reset_token_expiry = $2 WHERE email = $3 RETURNING *`,
        [resetToken, resetTokenExpiry, email],
      );
      console.log(result.rows[0]);
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  },

  // Reset Password
  findByResetToken: async (resetToken: string) => {
    const result = await pool.query(
      `SELECT * FROM users WHERE reset_token = $1 AND reset_token_expiry > NOW()`,
      [resetToken],
    );
    return result.rows[0];
  },

  updatePassword: async (email: string, password: string) => {
    const result = await pool.query(
      `UPDATE users SET password = $1 WHERE email = $2`,
      [password, email],
    );
    return result.rows[0];
  },

  clearResetToken: async (email: string) => {
    await pool.query(
      `UPDATE users SET reset_token = NULL, reset_token_expiry = NULL WHERE email = $1`,
      [email],
    );
  },
};

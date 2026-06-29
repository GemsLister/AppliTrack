import { pool } from "../db";

export const ApplicationModel = {
  // Add Application
  create: async (
    userId: string,
    company: string,
    position: string,
    date: Date,
  ) => {
    const result = await pool.query(
      `INSERT INTO applications (user_id, company, position, data) VALUES($1, $2, $3, $4) RETURNING *`,
      [userId, company, position, date],
    );
    return result.rows[0];
  },

  // For archiving
  toggleArchive: async (id: string, userId: string) => {
    const result = await pool.query(
      `UPDATE applications SET is_archived = NOT is_archived WHERE id = $1 AND user_id = $2 RETURNING *`,
      [id, userId],
    );
    return result.rows[0];
  },
};

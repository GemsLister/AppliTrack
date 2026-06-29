import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Include user in request
export interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Get token from the header
    const authHeader = req.headers.authorization;

    // Check if token exists
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ message: "No token" });

    // Extract token
    const token = authHeader.split(" ")[1];

    // Token verification
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };

    req.user = { id: decoded.id };
    next();
  } catch (error) {
    return res.status(500).json({ message: "Expired Token" });
  }
};

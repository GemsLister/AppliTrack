import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/auth.model";

// Create new user function
export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Cheks if the user already exists
    const existingUser = await UserModel.findByEmail(email);
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create(username, email, hashedPassword);

    // Create token
    const token = jwt.sign(
      { id: newUser.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" },
    );

    return res
      .status(201)
      .json({ message: "User created successfully", token, user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login user function
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check email
    const user = await UserModel.findByEmail(email);
    if (!user) return res.status(404).json({ message: "User does not exists" });

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid password" });

    // Create token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    // If successful
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

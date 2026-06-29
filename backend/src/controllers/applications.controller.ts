import { Response } from "express";
import { ApplicationModel } from "../models/applications.model";
import { AuthRequest } from "../middleware/auth.middleware";

export const addApplication = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const { company, position, date } = req.body;

    if (!userId) return res.status(400).json({ message: "Unauthorized" });

    if (!company || !position || !date)
      return res.status(400).json({ message: "Field empty" });

    const application = await ApplicationModel.create(
      userId,
      company,
      position,
      date,
    );

    return res.status(201).json({ message: "Success", application });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const toggleArchiveApplication = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id as string;

    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const application = await ApplicationModel.toggleArchive(id, userId);
    if (!application)
      return res.status(404).json({ message: "Application not found" });

    // If Successful
    return res.status(200).json({
      message: application.is_archived
        ? "Application Archived"
        : "Application Unarchived",
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

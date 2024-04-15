import Admin from "../models/admin.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import exportToXLSX from "../Excel/exportToXLSX.js"; // Import your export function
import fs from "fs";
import { updateModel } from "../models/dailyupdates.model.js";

export const getAllAdmin = async (req, res, next) => {
  try {
    const admins = await Admin.find({}); // Fetch all admins

    if (!admins || admins.length === 0) {
      return next(errorHandler(404, "Admins not found!")); // Handle case where no admins are found
    }

    res.status(200).json(admins); // Return admins array
  } catch (error) {
    next(error); // Pass any errors to the error handling middleware
  }
};

export const getAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.params.id); // Find admin by ID

    if (!admin) {
      return next(errorHandler(404, "Admin not found!")); // Handle case where admin is not found
    }

    const { password: pass, ...rest } = admin._doc; // Omit password from response

    res.status(200).json(rest); // Return admin details
  } catch (error) {
    next(error); // Pass any errors to the error handling middleware
  }
};

export const updateAdmin = async (req, res, next) => {
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedAdmin._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteAdmin = async (req, res, next) => {
  try {
    await Admin.findByIdAndDelete(req.params.id); // Find admin by ID and delete
    // Assuming you're not using access tokens for admin authentication
    res.status(200).json("Admin has been deleted successfully!"); // Send success message
  } catch (error) {
    next(error); // Pass any errors to the error handling middleware
  }
};

export const exportToExcel = async (req, res) => {
  try {
    // Call the exportToXLSX function to generate the Excel file
    await exportToXLSX();

    // Define the path to the generated Excel file
    const filePath = "C:\\Users\\hp\\OneDrive\\Desktop\\Final Codes\\FinalPVprotechGithub\\Backend\\output.xlsx";

    // Read the Excel file as a stream
    const fileStream = fs.createReadStream(filePath);

    // Set the appropriate headers for file download
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=data.xlsx");

    // Pipe the file stream to the response object
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error exporting Excel file:", error);
    res.status(500).json({ error: "Failed to export Excel file" });
  }
};

export const createDailyPost = async (req, res) => {
  const { date, powergeneration, userRef } = req.body;
  try {
      const newDailyPost = await updateModel.create({
          date,
          powergeneration,
          userRef,
      });
      res.status(201).json(newDailyPost);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};


export const getDailyPost = async (req, res) => {
  const { id } = req.params;
  try {
      const dailyPosts = await updateModel.find({ userRef: id });
      res.status(200).json(dailyPosts);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

export const getallDailyPost = async (req, res) => {
  try {
      const dailyPosts = await updateModel.find();
      res.status(200).json(dailyPosts);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

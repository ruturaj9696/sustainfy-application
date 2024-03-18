//Main Backend code:

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors package
import listingRouter from './routes/listing.route.js';
import UserRouter from './routes/user.route.js'
import adminRouter from './routes/admin.route.js'
import authRouter from './routes/auth.route.js';

dotenv.config();
const app = express();

// Body parsing middleware
app.use(express.json()); // Parse JSON bodies

// CORS middleware
app.use(cors());

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.json({ msg: "Hello World!" });
});

// Mount the userListingRouter
app.use('/api/listing', listingRouter);
app.use('/api/user',UserRouter );
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);

// Adding middlewate to protect from the errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
//Main backend code ends here


// // Script to export the mongodb data into excel sheet  using xlsx library and fs for saving it in local system
// import mongoose from "mongoose";
// import fs from "fs";
// import XLSX from "xlsx";

// // Connect to MongoDB Atlas
// mongoose.connect(
//   "mongodb+srv://ruturajd9696:KC38Zw5s2ttwIpas@cluster0.m4d0zv8.mongodb.net/SustainfyEnergy?retryWrites=true&w=majority"
// );
// const db = mongoose.connection;

// // Define MongoDB schema and model
// const ListingDataSchema = new mongoose.Schema(
//   {
//     plantCapacity: {
//       type: Number,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,

//     },
//     siteLocation: {
//       type: String,
//       required: true,
//     },
//     siteAddress: {
//       type: String,
//       required: true,
//     },
//     siteContactNumber: {
//       type: String,
//       required: true,
//     },
//     msedclConsumerNumber: {
//       type: String,
//       required: true,
//     },
//     assignedPlan: {
//       type: String,
//       enum: ["Basic", "PVProtect", "ProPVProtect"],
//       required: true,
//     },
//     plantCOD: {
//       type: String,
//       required: true,
//     },
//     msedclRegisteredMobileNumber: {
//       type: String,
//       required: true,
//     },
//     numberOfModules: {
//       type: Number,
//       required: true,
//     },
//     moduleMake: {
//       type: String,
//       required: true,
//     },
//     moduleType: {
//       type: String,
//       required: true,
//     },
//     numberOfStrings: {
//       type: Number,
//       required: true,
//     },
//     inverterMake: {
//       type: String,
//       required: true,
//     },
//     inverterModelName: {
//       type: String,
//       required: true,
//     },
//     inverterSerialNumber: {
//       type: String,
//       required: true,
//     },
//     inverterCapacity: {
//       type: Number,
//       required: true,
//     },
//     modeOfInternetConnection: {
//       type: String,
//       required: true,
//     },
//     sld: {
//       type: String,
//       required: true,
//     },
//     plantLayout: {
//       type: String,
//       required: true,
//     },
//     netMeteringFile: {
//       type: String,
//       required: true,
//     },
//     moduleDatasheet: {
//       type: String,
//       required: true,
//     },
//     inverterDatasheet: {
//       type: String,
//       required: true,
//     },
//     userRef: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const ListingData = mongoose.model("ListingData", ListingDataSchema);

// // Function to export MongoDB data to XLSX
// async function exportToXLSX() {
//   try {
//     // Retrieve data from MongoDB
//     const data = await ListingData.find({}).lean(); // Using lean() for performance

//     // Convert data to XLSX format
//     const ws = XLSX.utils.json_to_sheet(data);

//     // Create a workbook and add the worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

//     // Define output file path
//     const outputPath = "./output.xlsx";
//     // const outputPath = "https://docs.google.com/spreadsheets/d/1boxBT0UrG-eIfQNEmvZnuBgw6brc0Z3d-RsGAz3zRpA/edit?usp=drive_link";

//     // Write to XLSX file
//     XLSX.writeFile(wb, outputPath);

//     console.log(`Data exported to ${outputPath}`);
//   } catch (error) {
//     console.error("Error exporting data:", error);
//   } finally {
//     // Disconnect from MongoDB after exporting
//     mongoose.disconnect();
//   }
// }

// // Call the export function
// exportToXLSX();


// import mongoose from "mongoose";
// import { google } from "googleapis";
// import fs from "fs";
// import XLSX from "xlsx";
// import { authenticate } from "./google-auth"; // This is a separate file for Google OAuth authentication

// // Connect to MongoDB Atlas
// mongoose.connect(
//   "mongodb+srv://ruturajd9696:KC38Zw5s2ttwIpas@cluster0.m4d0zv8.mongodb.net/SustainfyEnergy?retryWrites=true&w=majority"
// );
// const db = mongoose.connection;

// // Define MongoDB schema and model
// const ListingDataSchema = new mongoose.Schema(
//     {
//       plantCapacity: {
//         type: Number,
//         required: true,
//       },
//       email: {
//         type: String,
//         required: true,
//       },
//       siteLocation: {
//         type: String,
//         required: true,
//       },
//       siteAddress: {
//         type: String,
//         required: true,
//       },
//       siteContactNumber: {
//         type: String,
//         required: true,
//       },
//       msedclConsumerNumber: {
//         type: String,
//         required: true,
//       },
//       assignedPlan: {
//         type: String,
//         enum: ["Basic", "PVProtect", "ProPVProtect"],
//         required: true,
//       },
//       plantCOD: {
//         type: String,
//         required: true,
//       },
//       msedclRegisteredMobileNumber: {
//         type: String,
//         required: true,
//       },
//       numberOfModules: {
//         type: Number,
//         required: true,
//       },
//       moduleMake: {
//         type: String,
//         required: true,
//       },
//       moduleType: {
//         type: String,
//         required: true,
//       },
//       numberOfStrings: {
//         type: Number,
//         required: true,
//       },
//       inverterMake: {
//         type: String,
//         required: true,
//       },
//       inverterModelName: {
//         type: String,
//         required: true,
//       },
//       inverterSerialNumber: {
//         type: String,
//         required: true,
//       },
//       inverterCapacity: {
//         type: Number,
//         required: true,
//       },
//       modeOfInternetConnection: {
//         type: String,
//         required: true,
//       },
//       sld: {
//         type: String,
//         required: true,
//       },
//       plantLayout: {
//         type: String,
//         required: true,
//       },
//       netMeteringFile: {
//         type: String,
//         required: true,
//       },
//       moduleDatasheet: {
//         type: String,
//         required: true,
//       },
//       inverterDatasheet: {
//         type: String,
//         required: true,
//       },
//       userRef: {
//         type: String,
//         required: true,
//       },
//     },
//     { timestamps: true }
//   );

// const ListingData = mongoose.model("ListingData", ListingDataSchema);

// // Function to export MongoDB data to Google Sheets
// async function exportToGoogleSheets(auth) {
//   try {
//     // Retrieve data from MongoDB
//     const data = await ListingData.find({}).lean(); // Using lean() for performance

//     // Convert data to XLSX format
//     const ws = XLSX.utils.json_to_sheet(data);

//     // Create a workbook and add the worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

//     // Convert XLSX data to binary format
//     const excelData = XLSX.write(wb, { type: "binary" });

//     // Initialize Google Sheets API
//     const sheets = google.sheets({ version: "v4", auth });

//     // Define Google Sheets spreadsheet ID and range
//     const spreadsheetId = "1boxBT0UrG-eIfQNEmvZnuBgw6brc0Z3d-RsGAz3zRpA"; // Your spreadsheet ID from the link
//     const range = "Sheet1!A1";

//     // Update the Google Sheets document
//     const response = await sheets.spreadsheets.values.update({
//       spreadsheetId,
//       range,
//       valueInputOption: "RAW",
//       resource: {
//         values: XLSX.utils.sheet_to_json(ws, { header: 1 }),
//       },
//     });

//     console.log(`Data exported to Google Sheets successfully.`);
//   } catch (error) {
//     console.error("Error exporting data to Google Sheets:", error);
//   } finally {
//     // Disconnect from MongoDB after exporting
//     mongoose.disconnect();
//   }
// }

// // Authenticate with Google and then call the export function
// authenticate().then((auth) => {
//   exportToGoogleSheets(auth);
// });


// This is the code for google sheets 
// import mongoose from "mongoose";
// import { GoogleSpreadsheet } from "google-spreadsheet";

// // Connect to MongoDB Atlas
// mongoose.connect(
//   "mongodb+srv://ruturajd9696:KC38Zw5s2ttwIpas@cluster0.m4d0zv8.mongodb.net/SustainfyEnergy?retryWrites=true&w=majority"
// );
// const db = mongoose.connection;

// // Define MongoDB schema and model
// const ListingDataSchema = new mongoose.Schema(
//   {
//     // Your schema fields here
//   },
//   { timestamps: true }
// );

// const ListingData = mongoose.model("ListingData", ListingDataSchema);

// // Function to export MongoDB data to Google Sheets
// async function exportToGoogleSheets() {
//   try {
//     // Retrieve data from MongoDB
//     const data = await ListingData.find({}).lean(); // Using lean() for performance

//     // Initialize Google Sheets API with OAuth2 credentials
//     const doc = new GoogleSpreadsheet(
//       "1boxBT0UrG-eIfQNEmvZnuBgw6brc0Z3d-RsGAz3zRpA"
//     );
//     await doc.useOAuth2({
//       client_email: "ruturajdeshmukh2020.it@mmcoe.edu.in",
//       //   private_key: "your-private-key",
//       // Add any other required OAuth2 parameters here
//       // For example:
//       client_id:
//         "153233561604-59d9h9lt48fhcogchhngg59d49bfjoi5.apps.googleusercontent.com",
//       // client_secret: "your-client-secret",
//       // redirect_uris: ["your-redirect-uri"],
//       // scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });
//     await doc.loadInfo(); // Loads document properties and worksheets

//     // Get the first sheet of the document
//     const sheet = doc.sheetsByIndex[0];

//     // Clear existing data in the sheet (optional)
//     await sheet.clear();

//     // Add header row
//     const headers = Object.keys(data[0]);
//     await sheet.setHeaderRow(headers);

//     // Append data to the sheet
//     await sheet.addRows(data);

//     console.log("Data exported to Google Sheets successfully");
//   } catch (error) {
//     console.error("Error exporting data to Google Sheets:", error);
//   } finally {
//     // Disconnect from MongoDB after exporting
//     mongoose.disconnect();
//   }
// }

// // Call the export function
// exportToGoogleSheets();

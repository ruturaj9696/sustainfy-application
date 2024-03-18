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

// // const ListingData = mongoose.model("ListingData", ListingDataSchema);
// const ListingData = mongoose.models.ListingData || mongoose.model("ListingData", ListingDataSchema);

// // Function to export MongoDB data to XLSX
// const demo = async function exportToXLSX() {
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
// };

// // Call the export function
// // exportToXLSX();

// export default demo;

// Script to export the mongodb data into excel sheet  using xlsx library and fs for saving it in local system
import mongoose from "mongoose";
import XLSX from "xlsx";

// Connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://ruturajd9696:KC38Zw5s2ttwIpas@cluster0.m4d0zv8.mongodb.net/SustainfyEnergy?retryWrites=true&w=majority"
);
const db = mongoose.connection;

// Define MongoDB schema and model
const ListingDataSchema = new mongoose.Schema(
  {
    plantCapacity: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    siteLocation: {
      type: String,
      required: true,
    },
    siteAddress: {
      type: String,
      required: true,
    },
    siteContactNumber: {
      type: String,
      required: true,
    },
    msedclConsumerNumber: {
      type: String,
      required: true,
    },
    assignedPlan: {
      type: String,
      enum: ["Basic", "PVProtect", "ProPVProtect"],
      required: true,
    },
    plantCOD: {
      type: String,
      required: true,
    },
    msedclRegisteredMobileNumber: {
      type: String,
      required: true,
    },
    numberOfModules: {
      type: Number,
      required: true,
    },
    moduleMake: {
      type: String,
      required: true,
    },
    moduleType: {
      type: String,
      required: true,
    },
    numberOfStrings: {
      type: Number,
      required: true,
    },
    inverterMake: {
      type: String,
      required: true,
    },
    inverterModelName: {
      type: String,
      required: true,
    },
    inverterSerialNumber: {
      type: String,
      required: true,
    },
    inverterCapacity: {
      type: Number,
      required: true,
    },
    modeOfInternetConnection: {
      type: String,
      required: true,
    },
    sld: {
      type: String,
      required: true,
    },
    plantLayout: {
      type: String,
      required: true,
    },
    netMeteringFile: {
      type: String,
      required: true,
    },
    moduleDatasheet: {
      type: String,
      required: true,
    },
    inverterDatasheet: {
      type: String,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// const ListingData = mongoose.model("ListingData", ListingDataSchema);
const ListingData =
  mongoose.models.ListingData ||
  mongoose.model("ListingData", ListingDataSchema);

// Function to export MongoDB data to XLSX
const demo=async function exportToXLSX() {
  try {
    // Retrieve data from MongoDB
    const data = await ListingData.find({}).lean(); // Using lean() for performance

    // Convert data to XLSX format
    const ws = XLSX.utils.json_to_sheet(data);

    // Create a workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Define output file path
    const outputPath = "./output.xlsx";
    // const outputPath = "https://docs.google.com/spreadsheets/d/1boxBT0UrG-eIfQNEmvZnuBgw6brc0Z3d-RsGAz3zRpA/edit?usp=drive_link";

    // Write to XLSX file
    XLSX.writeFile(wb, outputPath);

    console.log(`Data exported to ${outputPath}`);
  } catch (error) {
    console.error("Error exporting data:", error);
  } finally {
    // Disconnect from MongoDB after exporting
    // mongoose.disconnect();
  }
}

// Call the export function
// exportToXLSX();

export default demo;

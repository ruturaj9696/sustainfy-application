// DownloadReport.jsx

import React from "react";
import axios from "axios"; // Import Axios for HTTP requests

const DownloadReport = () => {
  const handleDownloadExcel = async () => {
    try {
      const response = await axios.get("/api/admin/exportExcel", {
        responseType: "blob", // Set response type to blob for file download
      });

      // Create a download link for the Excel file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.xlsx"); // Set the filename for download
      document.body.appendChild(link);
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleDownloadExcel}>Download Excel</button>
    </div>
  );
};

export default DownloadReport;

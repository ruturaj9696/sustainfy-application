
import React, { useState } from "react";

const CrateListing = (email) => {
  const [formData, setFormData] = useState({
    plantCapacity: "",
    email: email.email || "",
    siteLocation: "",
    siteAddress: "",
    siteContactNumber: "",
    msedclConsumerNumber: "",
    assignedPlan: "",
    plantCOD: "",
    msedclRegisteredMobileNumber: "",
    numberOfModules: "",
    moduleMake: "",
    moduleType: "",
    numberOfStrings: "",
    inverterMake: "",
    inverterModelName: "",
    inverterSerialNumber: "",
    inverterCapacity: "",
    modeOfInternetConnection: "",
    sld: "",
    plantLayout: "",
    netMeteringFile: "",
    moduleDatasheet: "",
    inverterDatasheet: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sustainfy-application.onrender.com/api/listing/createlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Listing created successfully");
        alert("Listing created successfully !")
        // Optionally, you can reset the form after successful submission
        setFormData({
          plantCapacity: "",
          email:"",
          siteLocation: "",
          siteAddress: "",
          siteContactNumber: "",
          msedclConsumerNumber: "",
          assignedPlan: "",
          plantCOD: "",
          msedclRegisteredMobileNumber: "",
          numberOfModules: "",
          moduleMake: "",
          moduleType: "",
          numberOfStrings: "",
          inverterMake: "",
          inverterModelName: "",
          inverterSerialNumber: "",
          inverterCapacity: "",
          modeOfInternetConnection: "",
          sld: "",
          plantLayout: "",
          netMeteringFile: "",
          moduleDatasheet: "",
          inverterDatasheet: "",
          userRef: "",
        });
      } else {
        console.error("Failed to create listing");
      }
    } catch (error) {
      console.error("Error creating listing:", error);
    }
  };

  return (
    <div className="flex justify-center items-center py-15  overflow-auto">
      <div className="card w-96 glass">
        <div className="card-body">
          <div className="flex justify-center mb-4">
            <h2 className="card-title">Create Listing</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Your input fields */}
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Plant Capacity"
                value={formData.plantCapacity}
                onChange={handleChange}
                name="plantCapacity"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="email"
                className="grow"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Site Location"
                value={formData.siteLocation}
                onChange={handleChange}
                name="siteLocation"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Site Address"
                value={formData.siteAddress}
                onChange={handleChange}
                name="siteAddress"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Site Contact Number"
                value={formData.siteContactNumber}
                onChange={handleChange}
                name="siteContactNumber"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="MSEDCL Consumer Number"
                value={formData.msedclConsumerNumber}
                onChange={handleChange}
                name="msedclConsumerNumber"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Assigned Plan"
                value={formData.assignedPlan}
                onChange={handleChange}
                name="assignedPlan"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Plant COD"
                value={formData.plantCOD}
                onChange={handleChange}
                name="plantCOD"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="MSEDCL Registered Mobile Number"
                value={formData.msedclRegisteredMobileNumber}
                onChange={handleChange}
                name="msedclRegisteredMobileNumber"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Number of Modules"
                value={formData.numberOfModules}
                onChange={handleChange}
                name="numberOfModules"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Module Make"
                value={formData.moduleMake}
                onChange={handleChange}
                name="moduleMake"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Module Type"
                value={formData.moduleType}
                onChange={handleChange}
                name="moduleType"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Number of Strings"
                value={formData.numberOfStrings}
                onChange={handleChange}
                name="numberOfStrings"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Inverter Make"
                value={formData.inverterMake}
                onChange={handleChange}
                name="inverterMake"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Inverter Model Name"
                value={formData.inverterModelName}
                onChange={handleChange}
                name="inverterModelName"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Inverter Serial Number"
                value={formData.inverterSerialNumber}
                onChange={handleChange}
                name="inverterSerialNumber"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Inverter Capacity"
                value={formData.inverterCapacity}
                onChange={handleChange}
                name="inverterCapacity"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Mode of Internet Connection"
                value={formData.modeOfInternetConnection}
                onChange={handleChange}
                name="modeOfInternetConnection"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="SLD"
                value={formData.sld}
                onChange={handleChange}
                name="sld"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Plant Layout"
                value={formData.plantLayout}
                onChange={handleChange}
                name="plantLayout"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Net Metering File"
                value={formData.netMeteringFile}
                onChange={handleChange}
                name="netMeteringFile"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Module Datasheet"
                value={formData.moduleDatasheet}
                onChange={handleChange}
                name="moduleDatasheet"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Inverter Datasheet"
                value={formData.inverterDatasheet}
                onChange={handleChange}
                name="inverterDatasheet"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="User Reference"
                value={formData.userRef}
                onChange={handleChange}
                name="userRef"
              />
            </label>

            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary">
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrateListing;

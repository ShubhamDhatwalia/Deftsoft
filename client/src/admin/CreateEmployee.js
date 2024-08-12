import React, { useState, useRef, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import moment from "moment";

function CreateEmployee({
  addEmployee,
  updateEmployee,
  isModalOpen,
  setIsModalOpen,
  selectedEmployee,
  setSelectedEmployee,
  searchQuery,
  onSearchChange,
}) {
  const [startDate, setStartDate] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    designation: "",
    address: "",
    userId: "",
    join: "",
    education: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });
  const fileInputRef = useRef(null);
  const firstNameInputRef = useRef(null); // Ref for the first name input

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
      setStartDate(
        selectedEmployee.join
          ? moment(selectedEmployee.join).format("YYYY-MM-DD")
          : ""
      );
      setImageSrc(selectedEmployee.imageSrc || "");
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        designation: "",
        address: "",
        education: "",
        join: startDate ? moment(startDate).format("YYYY-MM-DD") : "",
      });
      setStartDate("");
      setImageSrc("");
    }
  }, [selectedEmployee, isModalOpen]);

  useEffect(() => {
    if (isModalOpen && firstNameInputRef.current) {
      firstNameInputRef.current.focus(); // Focus the first name input when modal opens
    }
  }, [isModalOpen]);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

 const handleInputChange = (e) => {
   const { name, value } = e.target;
   let error = "";

   // Validation for "First Name" and "Last Name"
   if (name === "firstName" || name === "lastName") {
     const regex = /^[a-zA-Z\s]{0,25}$/; // Allows only alphabets and spaces
     if (value && !regex.test(value)) {
       error = "Only alphabets and spaces are allowed with length up to 25.";
     }
   }

   // Validation for "Mobile"
   if (name === "mobile") {
     const regex = /^[0-9]{10}$/; // Assumes a 10-digit mobile number
     if (value && !regex.test(value)) {
       error = "Mobile number must be 10 digits.";
     }
   }

   // Validation for "Email"
   if (name === "email") {
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format validation
     if (value && !regex.test(value)) {
       error = "Invalid email format.";
     }
   }

   setFormData({
     ...formData,
     [name]: value,
   });

   if (name === "join") {
     setStartDate(value);
   }

   setErrors({
     ...errors,
     [name]: value ? error : "", // Clear error if input is empty
   });

 };


  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedDate = startDate || "";
    if (
      !errors.firstName &&
      !errors.lastName &&
      !errors.mobile &&
      !errors.email
    ) {
      if (selectedEmployee) {
        updateEmployee({ ...formData, imageSrc, join: formattedDate });
      } else {
        addEmployee({ ...formData, imageSrc, join: formattedDate });
      }
      setIsModalOpen(false);
    }
  };

  const resetSelectedEmployee = () => {
    setSelectedEmployee(null);
  };

  return (
    <>
      <div className="create-component">
        <div className="flex flex-wrap justify-center gap-3 px-3">
          <button
            className="flex text-gray-700 text-lg py-2 pr-2 items-center font-bold gap-4 rounded-xl hover:bg-green-400 bg-blue-300"
            onClick={() => {
              setIsModalOpen(true);
              resetSelectedEmployee();
            }}
          >
            <FaUserPlus size={24} className="text-black-200 ml-3" />
          </button>

          <div className="relative flex">
            <input
              type="text"
              placeholder="search..."
              className="employee-details-input bg-slate-200 rounded-3xl px-4 text-xl focus:outline-none pr-10 w-[30vw] h-10" // Adjusted width
              value={searchQuery}
              onChange={onSearchChange}
            />
            <IoSearchSharp
              size={40}
              className="text-slate-600 absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full hover:bg-blue-300 p-1 font-semibold"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg max-h-[90vh] max-w-xl overflow-y-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center ">
                  <img
                    src={imageSrc || "../assets/images/avatar.png"}
                    alt="Profile"
                    className="h-20 w-20 rounded-full border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200"
                    onClick={handleImageClick}
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="flex flex-col gap-0">
                  <div className="flex model-form-items gap-2">
                    <div className="flex flex-col max-w-xs">
                      <label className="text-red-500 -mb-3">*</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        ref={firstNameInputRef} // Attach ref to the first name input
                        className="bg-slate-100 rounded-xl p-1 border-2 h-9 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 w-[200px]" // Adjusted width
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs break-words leading-tight mb-2 w-[200px]">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col max-w-xs">
                      <label className="text-transparent -mb-3">*</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-slate-100 rounded-xl p-1 h-9 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 w-[200px]" // Adjusted width
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs break-words leading-tight mb-2 w-[200px]">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex model-form-items gap-2">
                    <div className="flex flex-col max-w-xs">
                      <label className="text-red-500 -mb-3">*</label>
                      <input
                        type="text"
                        placeholder="Mobile no."
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-100 rounded-xl p-1 h-9 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 w-[200px]" // Adjusted width
                      />
                      {errors.mobile && (
                        <p className="text-red-500 text-xs break-words leading-tight mb-2 w-[200px]">
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col max-w-xs">
                      <label className="text-red-500 -mb-3">*</label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-100 rounded-xl p-1 h-9 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 w-[200px]" // Adjusted width
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs break-words leading-tight mb-2 w-[200px]">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex model-form-items gap-2">
                    <div className="flex flex-col w-full">
                      <label className="text-red-500 -mb-3">*</label>
                      <input
                        type="text"
                        placeholder="Designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-100 rounded-xl p-1 h-9 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 w-[200px]" // Adjusted width
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-red-500 -mb-3">*</label>
                      <input
                        type="date"
                        id="startDate"
                        name="join"
                        value={startDate}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-100 rounded-xl p-1 h-9 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 w-[200px]" // Adjusted width
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex flex-col w-full">
                      <label className="text-red-500 -mb-3">*</label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-100 rounded-xl p-1 h-9 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 " // Adjusted width
                      >
                        <option value="">Select Education Level</option>
                        <option value="12th">12th</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex flex-col w-full">
                      <label className="text-red-500 -mb-3">*</label>
                      <textarea
                        placeholder="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-100 rounded-xl p-1 h-20 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 " // Adjusted width
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  className="py-1 px-3 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-rose-500"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="py-1 px-3 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-green-500"
                >
                  {selectedEmployee ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateEmployee;

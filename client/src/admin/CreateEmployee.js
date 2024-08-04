import React, { useState, useRef, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateEmployee({ addEmployee, updateEmployee, isModalOpen, setIsModalOpen, selectedEmployee, setSelectedEmployee, searchQuery, onSearchChange }) {
  const [startDate, setStartDate] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    designation: '',
    address: '',
    id: '',
    join: '',
    education: ""
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
      setStartDate(new Date(selectedEmployee.startDate));
      setImageSrc(selectedEmployee.imageSrc || "");
    } else {
      // Reset form data when there's no selected employee
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        designation: '',
        address: '',
        education: "",
        join: new Date().toISOString().split("T")[0],
      });
      setStartDate(null);
      setImageSrc("");
    }
  }, [selectedEmployee, isModalOpen]);

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
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedEmployee) {
      updateEmployee({ ...formData, imageSrc, startDate });
    } else {
      addEmployee({ ...formData, imageSrc, startDate });
    }
    setIsModalOpen(false);
  };

  const resetSelectedEmployee = () => {
    setSelectedEmployee(null);
  };

  return (
    <>
      <div className="create-component">
        <div className="flex flex-wrap justify-center gap-3 px-3 ">
        <button
            className="flex text-gray-700 text-lg py-2 pr-2 items-center font-bold gap-4 rounded-xl hover:bg-green-400 bg-blue-300"
            onClick={() => {
              setIsModalOpen(true);
              resetSelectedEmployee();
            }}
          >
            <FaUserPlus size={24} className="text-black-200 ml-3" />
          </button>

          <div className="relative flex ">
            <input
              type="text"
              placeholder="search..."
              className="employee-details-input bg-slate-300 rounded-3xl px-4 text-xl focus:outline-none pr-10 w-[35vw] h-10"
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
          <div className="bg-white p-4 rounded-lg max-h-[90vh] overflow-y-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="flex justify-center mb-4">
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

                <div className="flex flex-col gap-2">
                  <div className="flex model-form-items gap-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-100 rounded-xl p-2 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-slate-100 rounded-xl p-2 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200"
                    />
                  </div>

                  <div className="flex model-form-items gap-2">
                    <input
                      type="text"
                      placeholder="Mobile no."
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-100 rounded-xl p-2 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200"
                    />
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-100 rounded-xl p-2 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200"
                    />
                  </div>

                  <div className="flex model-form-items gap-2">
                    <input
                      type="text"
                      placeholder="Designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-100 rounded-xl p-2 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200"
                    />
                    <DatePicker
                      selected={startDate}
                      required
                      onChange={(date) => setStartDate(date)}
                      placeholderText="Date of joining"
                      className="bg-slate-100 rounded-xl p-2 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 w-full"
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </div>

                  <div className="flex gap-2">
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-100 rounded-xl p-2 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 w-full"
                    >
                      <option value="">
                        Select Education Level
                      </option>
                      <option value="12th">12th</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                    </select>
                  </div>

                  <div className="flex gap-2">
                    <textarea
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-100 rounded-xl p-2 border-2 border-slate-100 hover:border-blue-200 cursor-pointer focus:outline-blue-200 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-10">
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

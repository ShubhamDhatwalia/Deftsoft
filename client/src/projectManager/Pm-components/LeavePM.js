import React, { useState } from 'react';
import './LeavePM.css'

const LeavePM = () => {
  const [formData, setFormData] = useState({
    
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.leaveType) tempErrors.leaveType = "Leave type is required";
    if (!formData.startDate) tempErrors.startDate = "Start date is required";
    if (!formData.endDate) tempErrors.endDate = "End date is required";
    if (!formData.reason) tempErrors.reason = "Reason is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData); 
      setFormData({
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: '',
      }); 
    }
  };

  return (
    <div className='form-data w-full my-5'>
      <form onSubmit={handleSubmit}>
      <h1>Apply Leave</h1>
        <div className='form-data-content w-[70%] my-7'>
          
          <div className='outer-form justify-around mb-4' >
           <div className='leave-type w-full'>
          <label className='text-sm font-semibold '>Leave Type:</label>
          <select className='bg-white' name="leaveType" value={formData.leaveType} onChange={handleChange}>
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="casual">Casual Leave</option>
            <option value="annual">Annual Leave</option>
          </select>
          {errors.leaveType && <p className='error' >{errors.leaveType}</p>}
          </div>
          
   </div>
     <div className='Date flex justify-between mb-4'>
        <div className='start-date '>
          <label className='text-sm font-semibold'>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          {errors.startDate && <p className='error'>{errors.startDate}</p>}
        </div>
        <div className='end-date'>
          <label className='text-sm font-semibold'>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
          {errors.endDate && <p className='error'>{errors.endDate}</p>}

        </div>
        </div>
        <div className='reason'>
          <label className='text-sm font-semibold'>Reason:</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          />
          {errors.reason && <p className='error'>{errors.reason}</p>}
        </div>
        </div>
       
        <div className='btn flex justify-end '>
        <button className=' bg-blue-600 px-4 hover:bg-blue-700 mt-2 rounded-lg font-semibold py-1 'type="submit ">Apply</button>
        </div>
       
       
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p><strong>Leave Type:</strong> {submittedData.leaveType}</p>
          <p><strong>Start Date:</strong> {submittedData.startDate}</p>
          <p><strong>End Date:</strong> {submittedData.endDate}</p>
          <p><strong>Reason:</strong> {submittedData.reason}</p>
          
        </div>
      )}
      
    </div>
    
  );
};

export default LeavePM;

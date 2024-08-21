import React, { useState } from 'react';
import './LeavePM.css'
import TimePicker from 'react-time-picker';
// import { useNavigate } from 'react-router-dom';

const LeavePM = () => {
  const [formData, setFormData] = useState({
    
    leaveType: '',
    leaveDuration: '',
    startDate: '',
    endDate: '',
    specificTime:'',
    reason: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [leaveDuration, setLeaveDuration] = useState('full');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState('00:00');


  // const navigate = useNavigate();

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLeaveDuration = (e) => {
    setLeaveDuration(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };


  const validate = () => {
    let tempErrors = {};
    if (!formData.leaveType) tempErrors.leaveType = "Leave type is required";
    if (!startDate) tempErrors.startDate = "Start date is required";
    if (leaveDuration === 'full' && !endDate) tempErrors.endDate = "End date is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     setSubmittedData(formData); 
  //     setFormData({
  //       leaveType: '',
  //       Duration: '',
  //       startDate: '',
  //       endDate: '',
  //       reason: '',
  //     }); 
  //   }
  // };

  const handleSubmit =(e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({
        ...formData,
        leaveDuration,
        startDate,
        endDate: leaveDuration === 'full' ? endDate : startDate,
        specificTime: leaveDuration === 'specific-Time' ? time : '',
      });
      setFormData({
        leaveType: '',
        reason: '',
      });
      setLeaveDuration('full');
      setStartDate('');
      setEndDate('');
      setTime('00:00');

      // navigate('/submitted-data', { state: { submittedData } });
    }
  };

  return (
    <div className='form-data w-full my-5'>
      <form onSubmit={handleSubmit}>
      <h1>Apply Leave</h1>
        <div className='form-data-content w-[70%] my-7'>
          
          <div className='outer-form justify-around mb-4' >
           <div className='leave-type w-full'>
            <label className='text-sm font-semibold '>Leave Type<span style={{color:'red'}}>*</span></label>
          <select className='bg-white' name="leaveType" value={formData.leaveType} onChange={handleChange}>
            <option value="">Select Leave Type</option>
            <option value="sick">Medical Leave</option>
            <option value="emergency">Emergency Leave</option>
            <option value="casual">Casual Leave</option>
            <option value="annual">Annual Leave</option>
          </select>
          {errors.leaveType && <p className='error' >{errors.leaveType}</p>}
          </div>

          <div>
        <label  className='text-sm font-semibold py-2'>
           Duration: </label>
          <select className='bg-white' name='leaveDuration' value={leaveDuration} onChange={handleLeaveDuration}>
            <option value="full">Full Day</option>
            <option value="half-morning">Half-Morning</option>
            <option value="half-evening">Half-Evening</option>
            <option value="specific-Time">Specific Time</option>
          </select>
       
      </div>
          
   </div>

     <div className='Date flex justify-between mb-4'>
        <div className='start-date '>
          <label className='text-sm font-semibold'>Start Date<span style={{color:'red'}}>*</span></label>
          <input
            type="date"
            name="startDate"
            // value={formData.startDate}
            value={startDate}
            // onChange={handleChange}
            onChange={handleStartDateChange} 
          />
          {errors.startDate && <p className='error'>{errors.startDate}</p>}
        </div>

           {leaveDuration === 'specific-Time' && (
          <div className='time mt-4'>
          <label className='text-sm font-semibold block mb-2 '>Select Time</label>
          <TimePicker
          onChange={handleTimeChange}
          value={time}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <p className="mt-2 text-gray-700">Selected Time: {time}</p>
        </div>
        )}

       {leaveDuration ==='full'  && (
        <div className='end-date'>
          <label className='text-sm font-semibold'>End Date<span style={{color:'red'}}>*</span></label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            // onChange={handleChange}
            onChange={handleEndDateChange}
          />
          {errors.endDate && <p className='error'>{errors.endDate}</p>}
         </div> )}
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
          <p><strong>Duration:</strong> {submittedData.leaveDuration}</p>
          <p><strong>Start Date:</strong> {submittedData.startDate}</p>
          {submittedData.leaveDuration === 'full' && (
                      <p><strong>End Date:</strong> {submittedData.endDate}</p>
          )}
         {submittedData.leaveDuration === 'specific-Time' && (
             <p><strong>Specific Time:</strong> {submittedData.specificTime}</p>
          )}
           {submittedData.reason && ( 
          <p><strong>Reason:</strong> {submittedData.reason}</p>
          )}
         
           </div>
      )}
      
    </div>
    
  );
};

export default LeavePM;

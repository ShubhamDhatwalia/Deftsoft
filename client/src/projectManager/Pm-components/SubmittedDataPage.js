// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const SubmittedDataPage = () => {
//   const location = useLocation();
//   const { submittedData } = location.state || {}; 

//   if (!submittedData) {
//     return <p>No data submitted</p>;
//   }

//   return (
//     <div className="submitted-data">
//       <h2>Submitted Data:</h2>
//       <p><strong>Leave Type:</strong> {submittedData.leaveType}</p>
//       <p><strong>Duration:</strong> {submittedData.leaveDuration}</p>
//       <p><strong>Start Date:</strong> {submittedData.startDate}</p>
//       {submittedData.leaveDuration === 'full' && (
//         <p><strong>End Date:</strong> {submittedData.endDate}</p>
//       )}
//       {submittedData.leaveDuration === 'specific-Time' && (
//         <p><strong>Specific Time:</strong> {submittedData.specificTime}</p>
//       )}
//       {submittedData.reason && (
//         <p><strong>Reason:</strong> {submittedData.reason}</p>
//       )}
//     </div>
//   );
// };

// export default SubmittedDataPage;

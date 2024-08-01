import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import CreateEmployee from "../CreateEmployee";
import EmployeeList from "../EmployeeList";
import EMgraph from "../EMgraph";
import EmployeeDetailsModal from "../EmployeeDetailsModal";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    toast.success("Employee added successfully!");
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp =>
      emp.email === updatedEmployee.email ? updatedEmployee : emp
    ));
    toast.success("Employee updated successfully!");
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const deleteEmployee = (index) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const employee = employees[index];
      setEmployees(employees.filter((_, i) => i !== index));
      toast.success(`Deleted employee: ${employee.firstName} ${employee.lastName}`);
    }
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const openDetailsModal = (employee) => {
    setSelectedEmployee(employee);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="bg-blue-50 mt-7 mb-5 rounded-xl ml-4 py-3 shadow-lg h-[575px]">
          <h4 className="text-xl text-slate-600 font-bold text-center mb-6">Employees Details</h4>
          <CreateEmployee 
            addEmployee={addEmployee} 
            updateEmployee={updateEmployee} 
            isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
            selectedEmployee={selectedEmployee} 
          />
          <EmployeeList 
            employees={employees} 
            deleteEmployee={deleteEmployee} 
            onEdit={handleEdit} 
            openDetailsModal={openDetailsModal} 
          />
        </div>
        <div className="">
          <EMgraph />
        </div>
      </div>
      <Toaster />
      <EmployeeDetailsModal
        employee={selectedEmployee}
        isOpen={isDetailsModalOpen}
        onClose={closeDetailsModal}
      />
    </>
  );
}

export default Employees;

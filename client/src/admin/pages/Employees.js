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
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mt-7 mb-5 mx-4">
        <div className="flex-2 bg-blue-50 rounded-xl py-3 max-h-[575px]">
          <h4 className="text-xl text-slate-600 font-bold text-center mb-6">Employees Details</h4>
          <CreateEmployee 
            addEmployee={addEmployee} 
            updateEmployee={updateEmployee} 
            isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee} 
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
          <EmployeeList 
            employees={filteredEmployees} 
            deleteEmployee={deleteEmployee} 
            onEdit={handleEdit} 
            openDetailsModal={openDetailsModal} 
          />
        </div>
        <div className="flex-1 bg-white rounded-xl h-[575px]">
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

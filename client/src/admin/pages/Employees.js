import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import CreateEmployee from "../CreateEmployee";
import EmployeeList from "../EmployeeList";
import EMgraph from "../EMgraph";
import EmployeeDetailsModal from "../EmployeeDetailsModal";
import ConfirmationDialog from "../ConfirmationDialog";
import { INITIAL_EMPLOYEES } from "../../store/Data";
import { v4 as uuidv4 } from 'uuid';


function Employees() {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: uuidv4() }; // Generate unique ID
    setEmployees([...employees, newEmployee]);
    toast.success("Employee added successfully!");
  };
  
  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.email === updatedEmployee.email ? { ...updatedEmployee, id: emp.id } : emp
      )
    );
    toast.success("Employee updated successfully!");
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };
  

  const openConfirmDialog = (employee, index) => {
    setEmployeeToDelete({ employee, index });
    setIsConfirmDialogOpen(true);
  };

  const handleDelete = () => {
    if (employeeToDelete) {
      const { employee, index } = employeeToDelete;
      setEmployees(employees.filter((_, i) => i !== index));
      toast.success(`Deleted employee: ${employee.firstName}`);
      setIsConfirmDialogOpen(false);
      setEmployeeToDelete(null);
    }
  };

  const handleEdit = (employee) => {
    console.log("Editing employee:", employee);
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

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 py-7 mx-4">
        <div className="flex-2 bg-blue-50 rounded-xl pt-2 h-[80vh] flex flex-col">
          <h4 className="text-xl text-slate-600 font-bold text-center mb-6">
            Employees Details
          </h4>
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
          <div className="employee-list-container mt-4 rounded-xl flex-1 overflow-y-auto">
            <EmployeeList
              employees={filteredEmployees}
              deleteEmployee={(index) => openConfirmDialog(employees[index], index)}
              onEdit={handleEdit}
              openDetailsModal={openDetailsModal}
            />
          </div>
        </div>
        <div className="flex-1 rounded-xl">
          <EMgraph />
        </div>
      </div>
      <Toaster />
      <EmployeeDetailsModal
        employee={selectedEmployee}
        isOpen={isDetailsModalOpen}
        onClose={closeDetailsModal}
      />
      <ConfirmationDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        onConfirm={handleDelete}
        message="Are you sure you want to delete this employee?"
      />
    </>
  );
}

export default Employees;

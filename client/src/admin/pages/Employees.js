import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import CreateEmployee from "../CreateEmployee";
import EmployeeList from "../EmployeeList";
import EMgraph from "../EMgraph";
import EmployeeDetailsModal from "../EmployeeDetailsModal";
import ConfirmationDialog from "../ConfirmationDialog";
import { INITIAL_EMPLOYEES } from "../../store/Data";

function Employees() {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  // State to keep track of the last used ID number
  const [lastIdNumber, setLastIdNumber] = useState(() => {
    // Initialize lastIdNumber based on existing employees
    const lastEmployee = INITIAL_EMPLOYEES.reduce((max, emp) => {
      const num = parseInt(emp.userId.split('-')[1].slice(-2), 10);
      return num > max ? num : max;
    }, 0);
    return lastEmployee;
  });

  const generateEmployeeId = (joinDate) => {
    const year = new Date(joinDate).getFullYear();
    const newIdNumber = (lastIdNumber + 1).toString().padStart(2, '0');
    setLastIdNumber(lastIdNumber + 1); // Update lastIdNumber
    return `DS-${year}${newIdNumber}`;
  };

  const generatePassword = (firstName, joinDate) => {
    const year = new Date(joinDate).getFullYear();
    const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    return `${capitalizedFirstName}@${year}`;
  };

  const addEmployee = (employee) => {
    const employeeId = generateEmployeeId(employee.join);
    const password = generatePassword(employee.firstName, employee.join); // Generate password based on first name and year of joining
    const newEmployee = { ...employee, userId: employeeId, password };
    setEmployees([...employees, newEmployee]);
    toast.success("Employee added successfully!");
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.email === updatedEmployee.email ? { ...updatedEmployee, userId: emp.userId } : emp
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
      const { index } = employeeToDelete;
      setEmployees(employees.filter((_, i) => i !== index));
      toast.success(`Deleted employee: ${employeeToDelete.employee.firstName}`);
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
        <div className="flex-2 bg-blue-50 rounded-2xl pt-2 h-[84vh] flex flex-col">
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
          <div className="employee-list-container mt-4 rounded-xl flex-1 overflow-y-auto custom-scrollbar">
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
        message={`Are you sure you want to delete ${employeeToDelete?.employee?.firstName}?`}
      />
    </>
  );
}

export default Employees;

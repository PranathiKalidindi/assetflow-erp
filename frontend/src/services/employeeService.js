import axios from "axios";

const API = "http://localhost:5000/api/employees";

// Get all employees
export const getEmployees = () => axios.get(API);

// Add employee
export const addEmployee = (employee) => axios.post(API, employee);

// Delete employee
export const deleteEmployee = (id) =>
  axios.delete(`${API}/${id}`);
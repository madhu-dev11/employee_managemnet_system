import axios from "axios";

const REST_APIS_BASE_URL ='http://localhost:8080/api/employees';

export const lsitEmployees = () => axios.get(REST_APIS_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_APIS_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(REST_APIS_BASE_URL + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(REST_APIS_BASE_URL + '/' +employeeId,employee);

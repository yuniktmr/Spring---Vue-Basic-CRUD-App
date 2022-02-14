import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees"
const EMPLOYEE_API_SINGLE_URL = "http://localhost:8080/api/employee"

class EmployeeService {
    getEmployees(){
        return axios.get(
            EMPLOYEE_API_BASE_URL
        );
    }
    getEmployee() {
        return axios.get(
            EMPLOYEE_API_SINGLE_URL
        );
    }
}

export default new EmployeeService();
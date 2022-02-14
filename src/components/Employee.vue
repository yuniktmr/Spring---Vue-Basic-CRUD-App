<template>
    <div class="container">
        <h1 class="text-center">Employees List</h1>
        <table class="table table-striped">
            <thead>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.firstName }}</td>
                    <td>{{ employee.lastName }}</td>
                    <td>{{ employee.email }}</td>
                </tr>
            </tbody>
        </table>
          <h1 class="text-center">Lucky Employee</h1>
         <table class="table table-striped">
            <thead>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
            </thead>
            <tbody>
                <tr>
                    <td>{{ luckyEmployee.id }}</td>
                    <td>{{ luckyEmployee.firstName }}</td>
                    <td>{{ luckyEmployee.lastName }}</td>
                    <td>{{ luckyEmployee.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService'
    export default {
        name: '',
        data() {
            return {
                employees : [],
                luckyEmployee: []
            }
        },
        methods: {
            getEmployees() {
                EmployeeService.getEmployees().then((response) => {
                    this.employees = response.data;
                });
            },
            getEmployee() {
                EmployeeService.getEmployee().then((response) => {
                    this.luckyEmployee = response.data;
                });
            }
        },
        created() {
            this.getEmployees();
            this.getEmployee();
        }
    }
</script>
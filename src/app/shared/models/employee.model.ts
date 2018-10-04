import { Employee } from './employee.model';
import { Process } from './process.model';
export interface Employee {
    id: string
    name: string
    uname: string
    password: string
    customer_id: string
}

export interface EmployeeResource {
    employee: Employee
    employee_name: string
    processes: Process[]
    processesName: string[]
}
export interface Employee {
    id: string
    name: string
    uname: string
    password: string
    customer_id: string
}

export interface EmployeeResource {
    employee_id: string
    processes: string[]
}
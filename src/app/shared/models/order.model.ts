export interface Order {
    id: string
    name: string
    customer_id: string
    quantity: number
    deadline: number
    processes: string[]
    resources: Resource[]
}

export interface Resource {
    employee_id: string
    process_id: string[]
}


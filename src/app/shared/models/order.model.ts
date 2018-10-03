export interface Order {
    id: string
    name: string
    customer_id: string
    quantity: number
    deadline: number
    resources: Resource[]
}

export interface Resource {
    employee_id: string
    process_id: string[]
}


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

export interface OrderHistory {
    id: string
    order_id: string
    customer_id: string
    product_id: string
    employee_name: string
    process_id: string
    process_name: string
    ctime: number
}

export interface OrderTracking {
    id: string
    process_name: string
    count: number
}

// ProcessID   string `bson:"_id" json:"id"`
// 		ProcessName string `bson:"process_name" json:"process_name"`
// 		Count       int    `bson:"count" json:"count"`
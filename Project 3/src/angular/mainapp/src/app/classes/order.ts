import { OrderItem } from "./order-item"
export interface Order {
    orderProducts: OrderItem[]
    id: number,
    dateCreated: Date,
    status: string,
    userId: number,
    totalOrderPrice: number

}
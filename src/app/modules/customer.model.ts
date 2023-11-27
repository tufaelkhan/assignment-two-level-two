import { Schema, model, } from 'mongoose';
import { TCustomer, TOrders } from './customer/customer.interface';

const orderSchema = new Schema<TOrders>({
    productName: { type: String},
    price: { type: Number},
    quantity: { type: Number},
})

const customerSchema = new Schema<TCustomer>({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        firstName: {
            type: String, required: true
        },
        lastName: {
            type: String, required: true
        }
    },
    age: {
        type: Number, required: true
    },
    email: {
        type: String, required: true
    },
    isActive: ['active', 'block'],
    hobbies: [String],
    address: {
        street: { type: String, required: true},
        city: { type: String, required: true},
        country: { type: String, required: true},
    },
    orders: [orderSchema]
})

export const CustomerModel = model<TCustomer>('Customer', customerSchema)

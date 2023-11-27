import { Schema, model, } from 'mongoose';
import { TCustomer, TOrders } from './customer/customer.interface';

const orderSchema = new Schema<TOrders>({
    productName: { type: String, required: true},
    price: { type: Number, required: true},
    quantity: { type: Number, required: true},
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
        required: true,
        select: false
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
    isActive: {
        type: String,
        enum: ['active', 'block'],
        default: 'active'
    },
    hobbies: {
        type: [String],
        default: [],
    },
    address: {
        street: { type: String, required: true},
        city: { type: String, required: true},
        country: { type: String, required: true},
    },
    orders: {
        type: [orderSchema],
        default: []
    }
})

export const CustomerModel = model<TCustomer>('Customer', customerSchema)

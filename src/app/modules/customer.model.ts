import { Schema, model, } from 'mongoose';
import { TCustomer, TOrders } from './customer/customer.interface';
import bcrypt from 'bcrypt'
import config from '../config';

const orderSchema = new Schema<TOrders>({
    productName: { type: String, required: true},
    price: { type: Number, required: true},
    quantity: { type: Number, required: true},
})

const customerSchema = new Schema<TCustomer>({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
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
        type: Boolean,
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

customerSchema.pre('save', async function(next){
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));
    next()
})


export const CustomerModel = model<TCustomer>('Customer', customerSchema)

import * as Joi from 'joi';


const orderValidationSchema = Joi.object({
    productName: Joi.string().required().trim().max(30),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
})

export const customerValidationSchema = Joi.object({
    userId: Joi.required(),
    username: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    fullName: {
        firstName: Joi.string().required().trim(),
        lastName:Joi.string().required().trim(),
    },
    age: Joi.number().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    isActive: Joi.boolean(),
    hobbies:Joi.array().items(Joi.string()).default([]),
    address: {
        street: Joi.string().required().trim().max(30),
        city: Joi.string().required().trim().max(30),
        country: Joi.string().required().trim().max(30),
    },
    orders: Joi.array().items(orderValidationSchema).default([])
})



// const customerSchema = new Schema<TCustomer>({
//     userId: {
//         type: String,
//         required: true
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     fullName: {
//         firstName: {
//             type: String, required: true
//         },
//         lastName: {
//             type: String, required: true
//         }
//     },
//     age: {
//         type: Number, required: true
//     },
//     email: {
//         type: String, required: true
//     },
//     isActive: {
//         type: String,
//         enum: ['active', 'block'],
//         default: 'active'
//     },
//     hobbies: {
//         type: [String],
//         default: [],
//     },
//     address: {
//         street: { type: String, required: true},
//         city: { type: String, required: true},
//         country: { type: String, required: true},
//     },
//     orders: {
//         type: [orderValidationSchema],
//         default: []
//     }
// })

// const orderSchema = new Schema<TOrders>({
//     productName: { type: String, required: true},
//     price: { type: Number, required: true},
//     quantity: { type: Number, required: true},
// })
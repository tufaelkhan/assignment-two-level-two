import { CustomerModel } from "../customer.model";
import { TCustomer, TOrder } from "./customer.interface";


const createCustomerIntoDB = async(customer: TCustomer) => {
    const result = await CustomerModel.create(customer)
    // if(await result.isCustomerExists(customer.userId)){
    //     throw new Error('customer already created')
    // }
    return result;
}

const getAllCustomer = async() => {
    const result = await CustomerModel.find({},{username: true,fullName: true, age: true, email: true, address : true, _id: 0})
    return result
}

const getSingleCustomer = async(userId: string) => {
    const result = await CustomerModel.findOne({userId}, {__v:0})
    return result
}

const updateCustomer = async(userId: string, customer: TCustomer) =>{
    const result = await CustomerModel.findOneAndUpdate({userId},customer, {
        new: true,
        runValidators: true
    })
    return result
}

const deleteCustomer = async(userId: string) =>{
    const result = await CustomerModel.findOneAndDelete({userId})
    return result
}
const findCustomerAllOrders = async(userId: string) =>{
    const result = await CustomerModel.find({userId}, {orders: true, _id: 0})
    return result
}

const totalPriceFound = async(userId: string) =>{
    const result = await CustomerModel.aggregate([
        {$match: {userId: userId}},
        {$unwind: '$orders'},
        {
            $group: {
                _id: null,
                totalPrice: {$sum: {$multiply: ['$orders.quantity', '$orders.price']}}

            }
        }
    ])
    if(result.length > 0){
        return result[0].totalPrice || 0
    }
    return 0
}


const newOrders = async(userId: string, order: TOrder) =>{
    const result = await CustomerModel.updateOne(
        { userId },
        {
            $push: {
                orders: order,
            },
        }
    );
    return result
}



export const CustomerServices = {
    createCustomerIntoDB,
    getAllCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
    findCustomerAllOrders,
    totalPriceFound,
    newOrders
}
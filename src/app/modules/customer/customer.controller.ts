/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { CustomerServices } from "./customer.service";
import { customerValidationSchema } from "./customer.validation";


const createCustomer = async(req:Request, res:Response) =>{
    try{
        const customer = req.body;

    const {error } = customerValidationSchema.validate(customer)

    const result = await CustomerServices.createCustomerIntoDB(customer)

    if(error){
        res.status(404).json({
            success: true,
            message: 'something went wrong',
            error: error.details,
        })
    }

    res.status(200).json({
        success: true,
        message: 'customer created successfully',
        data: result
    })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'customer not created'
        })
    }
}


const getAllCustomer =async (req:Request, res:Response) => {
    try{
        const result = await CustomerServices.getAllCustomer()
        res.status(200).json({
        success: true,
        message: 'all customer found successfully',
        data: result
    })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'all customer not found'
        })
    }
}
const getSingleCustomer = async (req:Request, res:Response) => {
    try{
        const {userId} = req.params
        const result = await CustomerServices.getSingleCustomer(userId)
        res.status(200).json({
        success: true,
        message: 'single customer found successfully',
        data: result
    })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'single customer not found'
        })
    }
}
const updateCustomer = async (req:Request, res:Response) => {
    try{
        const customer = req.body
        const {userId} = req.params
        const result = await CustomerServices.updateCustomer(userId, customer)
        res.status(200).json({
        success: true,
        message: 'customer data updated successfully',
        data: result
    })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'customer data not updated'
        })
    }
}
const deleteCustomer = async (req:Request, res:Response) => {
    try{
        const {userId} = req.params
        await CustomerServices.deleteCustomer(userId)
        res.status(200).json({
        success: true,
        message: ' customer deleted successfully',
        data:  null
    })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'customer deleted successfully'
        })
    }
}
const findCustomerAllOrders = async (req:Request, res:Response) => {
    try{
        const {userId} = req.params
         const result = await CustomerServices.findCustomerAllOrders(userId)
        res.status(200).json({
        success: true,
        message: ' customer orders fetch successfully',
        data:  result
    })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'customer order not found'
        })
    }
}
const totalPriceFound = async (req:Request, res:Response) => {
    try{
        const {userId} = req.params
         const result = await CustomerServices.totalPriceFound(userId)
        res.status(200).json({
        success: true,
        message: ' customer orders fetch successfully',
        data:  result
    })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'customer order not found'
        })
    }
}

const newOrders = async (req:Request, res:Response) => {
    try{
        const exists = req.body
        const {userId} = req.params
         const result = await CustomerServices.newOrders(userId, exists)
        res.status(200).json({
        success: true,
        message: ' customer orders fetch successfully',
        data:  result
    })
    }catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'customer order not found'
        })
    }
}

export const CustomerController = {
    createCustomer,
    getAllCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
    findCustomerAllOrders,
    totalPriceFound,
    newOrders
}

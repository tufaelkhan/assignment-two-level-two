import express from 'express'
import { CustomerController } from './customer.controller'

const router = express.Router()

// call controller fn
router.post('/', CustomerController.createCustomer)
router.get('/', CustomerController.getAllCustomer)
router.get('/:userId', CustomerController.getSingleCustomer)
router.get('/:userId/orders', CustomerController.findCustomerAllOrders)
router.get('/:userId/orders/total-price', CustomerController.totalPriceFound)
router.patch('/:userId', CustomerController.updateCustomer)
router.delete('/:userId', CustomerController.deleteCustomer)
router.put('/:userId/orders', CustomerController.newOrders)

export const CustomerRoute = router

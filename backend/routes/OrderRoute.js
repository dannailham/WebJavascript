import express from "express";
import {getOrder, 
        getOrderById,
        createOrder,
        updateOrder,
        deleteOrder
        } from "../controller/OrderController.js";


const router = express.Router();

router.get('/orders', getOrder);
router.get('/orders/:id', getOrderById);
router.post('/orders', createOrder);
router.patch('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;
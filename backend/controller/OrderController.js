import Order from "../models/OrderModel.js";
import { Op } from "sequelize";

export const getOrder = async(req, res) =>{
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    const offset = limit * page;
    const totalRows = await Order.count({
        where:{
            [Op.or]: [{id_order:{
                [Op.like]: '%'+search+'%'
            }}, {project:{
                [Op.like]: '%'+search+'%'
            }}]
        }
    }); 
    const totalPage = Math.ceil(totalRows / limit);
    const result = await Order.findAll({
        where:{
            [Op.or]: [{id_order:{
                [Op.like]: '%'+search+'%'
            }}, {project:{
                [Op.like]: '%'+search+'%'
            }}]
        },
        offset: offset,
        limit: limit,
        order:[
            ['id_order', 'DESC']
        ]
    });
    res.json({
        result: result,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage
    });
}

export const getOrderById = async(req, res) =>{
    try{
        const response = await Order.findOne({
            where:{
                id_order: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createOrder = async(req, res) =>{
    try{
        await Order.create(req.body);
        res.status(201).json({msg: "Order Created"});
    } catch (error) {
        console.log(error.message);
    }
}


export const updateOrder = async(req, res) =>{
    try{
        await Order.update(req.body,{
            where:{
                id_order: req.params.id
            }
        });
        res.status(200).json({msg: "Order Updated"});
    } catch (error) {
        console.log(error.message);
    }
}


export const deleteOrder = async(req, res) =>{
    try{
        await Order.destroy({
            where:{
                id_order: req.params.id
            }
        });
        res.status(200).json({msg: "Order Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
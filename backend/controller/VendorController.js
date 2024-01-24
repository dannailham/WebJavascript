import Vendor from "../models/VendorModel.js";
import {Op} from "sequelize";

export const getVendors = async(req, res) =>{
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    const offset = limit * page;
    const totalRows = await Vendor.count({
        where:{
            [Op.or]: [{name:{
                [Op.like]: '%'+search+'%'
            }}, {email:{
                [Op.like]: '%'+search+'%'
            }}]
        }
    }); 
    const totalPage = Math.ceil(totalRows / limit);
    const result = await Vendor.findAll({
        where:{
            [Op.or]: [{name:{
                [Op.like]: '%'+search+'%'
            }}, {email:{
                [Op.like]: '%'+search+'%'
            }}]
        },
        offset: offset,
        limit: limit,
        order:[
            ['id_vendor', 'DESC']
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

export const getVendorById = async(req, res) =>{
    try{
        const response = await Vendor.findOne({
            where:{
                id_vendor: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createVendor = async(req, res) =>{
    try{
        await Vendor.create(req.body);
        res.status(201).json({msg: "Vendor Created"});
    } catch (error) {
        console.log(error.message);
    }
}



export const deleteVendor = async(req, res) =>{
    try{
        await Vendor.destroy({
            where:{
                id_vendor: req.params.id
            }
        });
        res.status(200).json({msg: "Vendor Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
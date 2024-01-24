import Products from "../models/ProductModel.js";
import { Op } from "sequelize";

export const getProducts = async(req, res) =>{
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    const offset = limit * page;
    const totalRows = await Products.count({
        where:{
            [Op.or]: [{id:{
                [Op.like]: '%'+search+'%'
            }}, {nama:{
                [Op.like]: '%'+search+'%'
            }}]
        }
    }); 
    const totalPage = Math.ceil(totalRows / limit);
    const result = await Products.findAll({
        where:{
            [Op.or]: [{id:{
                [Op.like]: '%'+search+'%'
            }}, {nama:{
                [Op.like]: '%'+search+'%'
            }}]
        },
        offset: offset,
        limit: limit,
        order:[
            ['id', 'DESC']
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

export const getProductById = async(req, res) =>{
    try{
        const response = await Products.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createProduct = async (req, res) => {
    try {
      // Sertakan vendorId dalam body permintaan
      const product = { ...req.body, vendorId: req.body.vendorId };
      await Products.create(product);
      res.status(201).json({ msg: "Product Created" });
    } catch (error) {
      console.log(error.message);
  }
  };


export const updateProduct = async(req, res) =>{
    try{
        await Products.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated"});
    } catch (error) {
        console.log(error.message);
    }
}


export const deleteProduct = async(req, res) =>{
    try{
        await Products.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}









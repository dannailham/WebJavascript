import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Products from "./ProductModel.js";

const{DataTypes} = Sequelize;

const Order = db.define('orders',{
    id_order: {type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,}, 
    customer: DataTypes.STRING,
    project: DataTypes.STRING,
    order_in: DataTypes.STRING,
    order_out: DataTypes.STRING,
    harga_order: DataTypes.INTEGER,
    barang: DataTypes.STRING,
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Products,
            key: 'id'
        } ,
    },
},{
    freezeTableName:true
})

export default Order;

(async()=>{
        await db.sync();
})();
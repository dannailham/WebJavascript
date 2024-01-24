import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Vendor from "./VendorModel.js";

const{DataTypes} = Sequelize;

const Products = db.define(
    "products",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nama: DataTypes.STRING,
      nama_barang: DataTypes.STRING,
      jenis: DataTypes.STRING,
      ukuran: DataTypes.STRING,
      berat: DataTypes.STRING,
      jumlah: DataTypes.INTEGER,
      harga: DataTypes.FLOAT,
      vendorId: {
        type: DataTypes.INTEGER,
        references: {
          model: Vendor,
          key: "id_vendor",
        },
      },
    },
    {
      freezeTableName: true,
  }
  );


export default Products;

(async()=>{
        await db.sync();
})();
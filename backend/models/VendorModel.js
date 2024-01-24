import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Vendor = db.define(
  "vendors",
  {
    id_vendor: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    person: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Vendor;

// (async () => {
//   await db.sync();
// })();

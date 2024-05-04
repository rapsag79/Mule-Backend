import { Sequelize } from "sequelize";

const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE_NAME } = process.env;

import UserModel from "../models/User.js";
import AdminModel from "../models/Admin.js";
import ClientModel from "../models/Client.js";
import DriverModel from "../models/Driver.js";
import FreigthModel from "../models/Freigth.js";
import VehicleModel from "../models/Vehicle.js";

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE_NAME}`,
  { logging: false }
);

UserModel(sequelize);
AdminModel(sequelize);
ClientModel(sequelize);
DriverModel(sequelize);
FreigthModel(sequelize);
VehicleModel(sequelize);

// Sincronización de modelos con la base de datos
(async () => {
  await sequelize.sync({ alter: true }); // Esto sincronizará los modelos con la base de datos, alterando la estructura si es necesario.
})();

const {User, Admin, Client, Driver, Freigth, Vehicle } = sequelize.models;

//relacion de los modelos: (One-to-One, One-to-Many, Many-to-Many)

export { User, Admin, Client, Driver, Freigth, Vehicle };

export default sequelize;

// Path: src/models/Admin.js
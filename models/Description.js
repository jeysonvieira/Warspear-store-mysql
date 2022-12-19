import { DataTypes } from "sequelize"
import {conn} from '../db/conn.js'
import { Char } from "./Char.js"



const Description = conn.define('Description', {
    Description : {
        type : DataTypes.STRING,
        allowNull : false
    },

    Price : {
        type : DataTypes.DECIMAL,
        allowNull : false
    }

})


Char.hasMany(Description)
Description.belongsTo(Char)


export {Description}
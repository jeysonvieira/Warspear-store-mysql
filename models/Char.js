import { DataTypes } from "sequelize"
import {conn} from '../db/conn.js'



const Char = conn.define('Char', {
    nick : {
        type : DataTypes.STRING,
        allowNull : false
    },

    class : {
        type : DataTypes.STRING,
        allowNull : false
    },

    lvl : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },

    dmg : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },

    defP : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },

    defM : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },

    hp : {
        type : DataTypes.DECIMAL,
        allowNull : false
    }
})



export {Char}
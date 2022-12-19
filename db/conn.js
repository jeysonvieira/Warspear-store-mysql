import {Sequelize} from "sequelize"


const conn = new Sequelize('warspeardb', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
})



export {conn}


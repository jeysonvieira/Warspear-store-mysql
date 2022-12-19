import express from 'express'
import {engine} from 'express-handlebars'
import {conn} from '../db/conn.js'
import { Char } from '../models/Char.js'
import { Description } from '../models/Description.js'



const app = express()

const servidor = "US-Sapphire"


app.engine('handlebars', engine({partialsDir : ['../views/partials']}))
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('./public'))


app.use(express.urlencoded({
    extended : true
}))




app.get('/', async (req, res) => {

    const tabela = await Char.findAll({raw : true})




    res.render('home', {tabela})
})




conn.sync().catch(
    app.listen(3000)
)
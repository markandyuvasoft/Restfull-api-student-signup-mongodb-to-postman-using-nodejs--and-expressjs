import express from 'express'
import * as url from 'url'
import * as path from 'path'
import mongoose from 'mongoose'
import db from './db/conn.js'
import indexrouter from './routes/index.js'
import bodyParser from 'body-parser'



const __dirname=url.fileURLToPath(new URL('.',import.meta.url))


const app=express()


app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



app.use("/",indexrouter)



app.set('view engine','ejs')
app.set('views','./views')

app.listen(3003)

console.log("http://localhost:3003")

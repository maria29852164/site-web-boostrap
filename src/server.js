import express from 'express'
import router from './routes/router'
import path from 'path'

//let public=path.join(__dirname,'public')


const app =express()


//views
//app.set('views',public)

app.set('port',process.env.PORT || 3000)
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

//middlewares


//router
app.use(router)




module.exports=app


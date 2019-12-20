import express from 'express'
import router from './routes/router'
import path from 'path'
import loader from 'morgan'
import morgan from 'morgan'

//let public=path.join(__dirname,'public')


const app =express()


//views
//app.set('views',public)

app.set('port',process.env.PORT || 3000)
//static files
app.use(express.static(path.join(__dirname,'public')))
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('env'))





//router
app.use(router)




module.exports=app


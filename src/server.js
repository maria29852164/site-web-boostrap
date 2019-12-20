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
// Bootstrap 4 y librerías necesarias
app.use( express.static(path.join(__dirname ,'..','node_modules/bootstrap/dist/css')));
app.use( express.static(path.join(__dirname , '..','node_modules/jquery/dist')));
app.use( express.static(path.join(__dirname ,'..','node_modules/popper.js/dist')));
app.use( express.static(path.join(__dirname ,'..' ,'node_modules/bootstrap/dist/js')));


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(loader('dev'))





//router
app.use(router)




module.exports=app


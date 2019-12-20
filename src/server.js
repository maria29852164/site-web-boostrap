import express from 'express'
import router from './routes/router'

const app =express()

app.set('port',process.env.PORT || 3000)

app.use(express.json())

//middlewares


//router
app.use(router)




module.exports=app


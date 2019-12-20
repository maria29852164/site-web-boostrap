import app from './server.js'
console.log(__dirname)

app.listen(app.get('port'),()=>{
    console.log(`Server at running in the port : ${app.get('port')}`)
})
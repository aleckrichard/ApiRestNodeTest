const express = require('express')
const morgan = require('morgan')
const app = express()

//Settings
app.set('port', process.env.PORT || 3000) // en caso exista un puerto en la nube sino el 3000
app.set('json spaces', 2) // Formatea el json con saltos de linea


//Middlewares
app.use(morgan('short'))  //Muestra las peticiones desde el navegador en la consola
app.use(express.urlencoded({extended: false})) //Solo recibe datos del front, no archivos
app.use(express.json())


//Routes
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies'))
app.use('/api/users',require('./routes/users'))

//Starting Server
app.listen(app.get('port'), () => {
    console.log(`Server run on Port ${app.get('port')}`)
})
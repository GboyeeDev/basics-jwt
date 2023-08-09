


require('dotenv').config()

const express = require('express')
const app = express()

const mainRouter = require('./routes/main') 
const notFoundMiddle = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


//middleware
app.use(express.json())

app.use('/api/v1', mainRouter)


app.use(express.static('./public'))
// for post route




app.use(notFoundMiddle)
app.use(errorHandlerMiddleware)


//route



const port = process.env.PORT || 5000

const start = async () => {
    try {
        app.listen(port, console.log(`Server listening to port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()


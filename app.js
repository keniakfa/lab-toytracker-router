import express from 'express'
import dotenv from 'dotenv/config'
import connectDb from './config/db.connection.js'
import toysRouter from './routes/toys.routes.js'
import cors from 'cors'


const app = express()
connectDb()

app.use(express.json())
app.use(cors())
app.use('/toys',toysRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the Toy Tracker API!')
})

app.listen(process.env.PORT, () => console.log('Server listening on port:', process.env.PORT))
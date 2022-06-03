import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()


app.listen(process.env.PORT, () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopolgy: true,
        })
        .then(console.log('connectod to db'))
        .catch((err) => console.log(err))
})
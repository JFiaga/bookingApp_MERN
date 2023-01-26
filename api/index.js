import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.route.js'
import hotelsRoute from './routes/hotels.route.js'
import usersRoute from './routes/users.route.js'
import roomsRoute from './routes/rooms.route.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

// const connect = async () => {
    //     try {
//         await mongoose.connect(process.env.mongo)
//         useNe
//     } catch (error) {
    //         throw error
    //     }
// }
mongoose.connect(process.env.MONGO, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log('connected to atlas')).catch(err => console.log(err))

app.get('/', (req, res)=> {
    res.send('hello first request')
})

mongoose.connection.on("disconnected", ()=> {
    console.log("mongodb is disconnected")
})

mongoose.connection.on("connected", ()=> {
    console.log('mongodb is conneceted')
})

// Middleware
app.use(cookieParser())
app.use(express.json())


app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/users', usersRoute)
app.use('/api/rooms', roomsRoute)



//customise error
app.use((err,req,res,next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        status:errorStatus,
        message:errorMessage,
        stack: err.stack
    })
})

app.listen(3001, ()=> {
    console.log('connected to the backend')
})
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


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


app.listen(3000, ()=> {
    console.log('connected to the backend')
})
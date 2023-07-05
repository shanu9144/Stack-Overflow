import  express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/',(req, res) => {
        res.send("This is a stack overflow clone API")
     })
app.use('/user', userRoutes )



const Port = process.env.Port || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.set('strictQuery', false);
mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(Port, () => {console.log('server running on port ${PORT}')}))
    .catch((err)=> console.log(err.message))


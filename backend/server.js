require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { logEvents, logger} = require('./middleware/logger')
const { default: mongoose } = require('mongoose')

const userRoutes = require('./routes/userRoute');
const protectedRoutes = require('./routes/protectedRoute');
const corsOptions = require('./config/corsOptions')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbCon')
const cookieParser = require('cookie-parser');

const app = express()



const PORT = process.env.PORT || 4000

// Middleware
app.use(logger) 
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());


connectDB()

// Routes
app.use('/api/users', userRoutes);
app.use('/api/protected', protectedRoutes);








app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('connected to MongoDB')
    
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 }
)


mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

const colors = require('colors');
const app = require('./app');
const config = require('./config/config');
const path = require('path');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorHandler');


//error handler
app.use(notFound);
app.use(errorHandler); 

// server configur
const HOST = config.app.host;
const PORT = config.app.port;



app.listen(PORT, HOST, async()=> {
    console.log(`Server is Running on  http://${HOST}:${PORT}`.bgCyan.white);
    await connectDB;
});
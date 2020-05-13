const mongoose  = require('mongoose')


mongoose.connect('mongodb://localhost/movies', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


//short connection to to mongoose connection object
const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to Mongo DB at ${db.host}:${db.port}`)
})

// you should see this connected in the terminal server
// Connected to Mongo DB at localhost:27017
// note: Connected we good!
const mongoose = require('mongoose')

// Add ES6 promise to mongoose
mongoose.Promise = global.Promise

// Connect to the database before test run
before(function(done){
    mongoose.connect('mongodb://localhost/testaroo', {useNewUrlParser: true})
    mongoose.connection.once('open', function () {
        console.log('Connection have been made')
        done()
    }).on('error', function(error){
        console.log('Connection error', error)
    })
})

// Drop(delete) the char collection before each test
beforeEach(function(done){
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done()
    })
})


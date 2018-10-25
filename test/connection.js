const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testaroo')

mongoose.connection.once('open', function () {
    console.log('Connection have been made')
}).on('error', function(error){
    console.log('Connection error', error)
})
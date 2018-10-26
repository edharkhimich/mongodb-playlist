const assert = require('assert')
const MarioChar = require('../models/mariochar')

//Describes tests
describe('Updating records', function(){

    var char

    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario'
        })

        char.save().then(function(){
            done()
        })
    })
    
    // Create tests

    it('Updates one record in the database', function(done){
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luidgi'}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === 'Luidgi')
                done()
            })
        })
    })
})
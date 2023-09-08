const mongoose = require('mongoose');
const { Schema } = mongoose

const MapSchema = new Schema({
   mapName: {
    type: String
   },
   timesPlayed: {
    type: [Number]
   },
   ctWon: {
    type: [Number]
   },
   ttWon: {
    type: [Number]
   }
        
})

const MapModel = mongoose.model('Map', MapSchema);
module.exports = MapModel
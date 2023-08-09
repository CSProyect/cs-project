const mongoose = require('mongoose');
const { Schema } = mongoose

const PlayerSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    personalStats: {
        type: Schema.Types.ObjectId,
        ref: 'PersonalStats'
    },
    mapStats: {
        type: Schema.Types.ObjectId,
        ref: 'MapStats'
    },
    assistStats: {
        type: Schema.Types.ObjectId,
        ref: 'AssistStats'
    }
        
})

const PlayerModel = mongoose.model('Player', PlayerSchema);
module.exports = PlayerModel
const mongoose = require('mongoose');
const { Schema } = mongoose

const AssistStatsSchema = new Schema({
   asist: {
    type: [boolean]
   },
   asistPercent: Number
        
})

const AssistStatsModel = mongoose.model('AssistStats', AssistStatsSchema);
module.exports = AssistStatsModel
const mongoose = require('mongoose')
const { Schema } = mongoose

const PersonalStatsSchema = new Schema({
        historicalKills: {
            type: [Number],
        },
        historicalDeaths: {
            type: [Number]
        },
        historicalTotal: {
            type: [Number]
        },
        currentKills: {
            type: [Number]
        },
        currentDeaths: {
            type: [Number]
        },
        currentTotal: {
            type: [Number]
        },
        historicalTeamEffec: {
            type: Number
        },
        teamEffect: {
            type: Number
        },
        historicalRank: {
            type: [Number]
        },
        currentRank: {
            type: [Number]
        },
        worstRank: {
            type: [Number]
        },
    
})

const PersonalStatsModel = mongoose.model('PersonalStats', PersonalStatsSchema);
module.exports = PersonalStatsModel
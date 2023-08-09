const mongoose = require('mongoose')
const { Schema } = mongoose

const MapStatsSchema = new Schema({
        playedMap: {
            type: [String]
        },
        mapsWon: {
            type: [String]
        },
        lostMaps: {
            type: [String]
        },
        tieMap:{
            type: [String]
        },
        historicalVictories: {
            type: [Number]
        },
        historicalDefeats: {
            type: [Number]
        },
        historicalDraws: {
            type: [Number]
        },
        currentVictories: {
            type: [Number]
        },
        currentLosses: {
            type: [Number]
        },
        currentTies: {
            type: [Number]
        },
        currentTotalMapsPlayed: {
            type: Number
        },
        historicalTotalMapsPlayed: {
            type: Number
        },
        currentTotalMapPoints: {
            type: Number
        },
        historicalTotalMapPoints: {
            type: Number
        },
    
})

const MapStatsModel = mongoose.model('MapStats', MapStatsSchema);
module.exports = MapStatsModel
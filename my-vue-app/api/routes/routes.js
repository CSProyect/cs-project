const { Router } = require('express');
const Player = require('../models/Player');
const PersonalStats = require('../models/PersonalStats');
const Map = require('../models/Map')
const router = Router();

router.post('/playersStoreWithStats', async (req, res) => {
  const { name, personalStats } = req.body;

  try {
    const newPersonalStats = await PersonalStats.create(personalStats);

    const newPlayer = await Player.create({
      name,
      personalStats: newPersonalStats._id,
    });

    console.log(newPlayer);
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get('/playerByName', async (req, res) => {
  const { name } = req.query;

  try {
    const foundPlayer = await Player.findOne({ name }).populate(
      'personalStats'
    );
    if (foundPlayer) {
      console.log(foundPlayer);
      res.status(200).json(foundPlayer);
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/map', async (req, res) => {
  const { mapName, timesPlayed, ctWon, ttWon } = req.body;

  try {
    

    const newMap = await Map.create({
      mapName,
      timesPlayed,
      ctWon,
      ttWon
    });

    console.log(newMap);
    res.status(201).json(newMap);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get('/mapByName', async (req, res) => {
  const { name } = req.query;

  try {
    const foundMap = await Map.findOne({ mapName : name })
    if (foundMap) {
      console.log(foundMap);
      res.status(200).json(foundMap);
    } else {
      res.status(404).json({ message: 'Map not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/allMaps', async (req, res) => {

  try {
    const foundMaps = await Map.find()
    if (foundMaps) {
      console.log(foundMaps);
      res.status(200).json(foundMaps);
    } else {
      res.status(404).json({ message: 'Map not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

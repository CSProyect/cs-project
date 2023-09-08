const { Router } = require('express');
const Player = require('../models/Player');
const PersonalStats = require('../models/PersonalStats');
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
    res.json(newPlayer);
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

module.exports = router;

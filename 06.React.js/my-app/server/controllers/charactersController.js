const Character = require('../models/Character');
const { mongoErrorHandler } = require('../utils/mongoErrorHandler');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (error) {
    return res.status(406).json({ message: mongoErrorHandler(error) });
  }
});

router.post('/', async (req, res) => {
  try {
    const character = await Character.create({ ...req.body });
    return res.status(200).json(character);
  } catch (error) {
    return res.status(406).json({ message: mongoErrorHandler(error) });
  }
});

router.put('/:characterId', async (req, res) => {
  try {
    const { characterId } = req.params;
    const characterBody = { ...req.body };

    Object.entries(characterBody).forEach((x) => {
      if (!x[1]) {
        throw 'All fields required!';
      }
    });

    await Character.findByIdAndUpdate(characterId, characterBody);
    const character = await Character.findById(characterId);

    return res.status(200).json(character);
  } catch (error) {
    return res.status(406).json({ message: mongoErrorHandler(error) });
  }
});

router.get('/:characterId', async (req, res) => {
  try {
    const { characterId } = req.params;
    const character = await Character.findById(characterId);

    return res.status(200).json(character);
  } catch (error) {
    return res.status(406).json({ message: mongoErrorHandler(error) });
  }
});

router.delete('/:characterId', async (req, res) => {
  try {
    const { characterId } = req.params;

    const character = await Character.findByIdAndDelete(characterId);
    console.log(character);
    return res.status(200).json(character);
  } catch (error) {
    return res.status(406).json({ message: mongoErrorHandler(error) });
  }
});

module.exports = router;

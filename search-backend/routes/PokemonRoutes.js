const express = require('express');
const router = express.Router()
const { Pokemon } = require('../schema/Schema')
const pokedex = require('../pokedex.json')

router.post('/create', async (req, res) => {
    console.log(req.body)
    const data = new Pokemon({
        pokedexId: req.body.pokedexId,
        name: req.body.name,
        imageURL: req.body.imageURL,
        type: req.body.type,
        base: req.body.base
    })
    try {
        console.log(data)
        await data.save();
        return res.status(200).send(data)
    }
    catch (error) {
        console.error(error);
        return res.status(400).send({ message: error.message })
    }
})



router.post('/create/multiple', async (_req, res) => {

    try {
        pokedex.forEach(async pokemon => {
            const data = new Pokemon({
                pokedexId: pokemon.pokedexId,
                name: pokemon.name,
                imageURL: pokemon.imageURL,
                type: pokemon.type,
                base: pokemon.base
            })
            console.log(data)
            await data.save();
        })
        res.status(200).json({message: "Completed"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/get/all', async (_req, res) => {
    try {
        const data = await Pokemon.find();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/get/:id', async (req, res) => {
    try {
        const data = await Pokemon.find({ pokedexId: req.params.id });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/get', async (req, res) => {
    try {
        const data = await Pokemon.find({ "name.english": req.query.name });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.patch('/update/:id', async (req, res) => {
    try {
        const id = { pokedexId: req.params.id};
        const updatedData = req.body;
        const options = { new: true };

        const result = await Pokemon.findOneAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Pokemon.findOneAndDelete({ id: id })
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
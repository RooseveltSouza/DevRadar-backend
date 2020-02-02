const axios = require('axios')
const Dev = require('../models/Dev')
const Parse = require('../utils/parseStringAsArray')

// index, show, store, update, destroy
module.exports = {
    async index(req, res) {
        const devs = await Dev.find()
    
        return res.send(devs)
    },

    async store(req, res) {
        const { github, techs, latitude, longitude } = req.body

        let dev = await Dev.findOne({ github })

        if(!dev) {
            const response = await axios.get(`https://api.github.com./users/${github}`)

            const { name = login, bio, avatar_url } = response.data
    
            const techsArray = Parse(techs)
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
    
            dev = await Dev.create({
                name,
                github,
                bio,
                avatar_url,
                techs: techsArray,
                location
            })

        }
        console.log(dev)
        return res.json(dev)

    },
    async destroy (req, res) {
        const id = req.params.id

        await Dev.findByIdAndDelete(id)

        res.status(200).send()
    }
}
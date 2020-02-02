const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const devSchema = new mongoose.Schema({
    name: String,
    github: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        indexes: '2dsphere'
    }
})

const Dev = mongoose.model('dev', devSchema)

module.exports = Dev
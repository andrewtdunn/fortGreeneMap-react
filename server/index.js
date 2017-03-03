const express = require('express')
const resorts = require('./locations.json')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const byName = name => resort =>
    name.toLowerCase() === resort.substr(0, name.length).toLowerCase()

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'))
    .get('/locations', (req, res) =>
        res.status(200).json(resorts)
    )
    .get('/locations/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    locations.filter(byName(req.params.name))
                ),
            delay
        )
    )

app.listen(port, () => console.log('Fort Greene Map app running on port ' + port + ' with a ' + delay/1000 + ' second delay'))

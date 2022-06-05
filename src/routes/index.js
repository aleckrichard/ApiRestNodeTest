const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.json({'title': 'Hello World!'})
})

router.get('/test', (req, res) => {
    const data = {"name": "Parker",
    "url": "http:localhost"}
    res.json(data)
})

module.exports = router
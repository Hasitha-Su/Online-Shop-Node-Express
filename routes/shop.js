const path = require('path')

const express  = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    // res.send("add-post")
    // res.sendFile('./views/shop.html')
    /** dirname gives this dir(routes dir) so have to out of this dir with ../ */
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
})

router.post('product', (req, res, next) => {
    res.redirect("post")
})


module.exports = router
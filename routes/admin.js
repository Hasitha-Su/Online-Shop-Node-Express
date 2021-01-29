const express  = require('express')

const rootDir = require('../util/path')

const path = require('path')

const router = express.Router()

// admin/add-product
router.get('/add-product', (req, res, next) => {
    // res.send("add-post-get")
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    //change root dir
    res.sendFile(path.join(rootDir, '../', 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    res.redirect('/')
})

router.post('product', (req, res, next) => {
    res.redirect("post")
})


module.exports = router
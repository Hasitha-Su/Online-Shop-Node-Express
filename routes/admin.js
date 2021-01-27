const express  = require('express')

const router = express.Router()

// admin/add-product
router.get('/add-product', (req, res, next) => {
    res.send("add-post-get")
})

router.post('/add-product', (req, res, next) => {
    res.redirect('/')
})

router.post('product', (req, res, next) => {
    res.redirect("post")
})


module.exports = router
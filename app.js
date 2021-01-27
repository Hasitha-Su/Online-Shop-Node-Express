const http = require('http')

const express = require('express')
const bodyparser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

/** registers a middleware 
 * before reaching other requests data will be para  sed
 */
app.use(bodyparser.urlencoded({ extended: false }))

/** 
 * calling methdo use defined by express
 * use alllows to add a new middleware function
 * accepts a array of req hanlders, but the easy way of using it is passing a func
 * this func will be executed for every incoming request 
 * 
 * you can rename any of the args
 *  
 * next is called at the end of middleware to go to next middleware
 * */

//out-sourced routes
/**  only routes start with admin will go in*/
app.use('/admin', adminRoutes)
app.use(shopRoutes)

//404
app.use((req, res, next) => {
    res.status(404).send("Page not found")
})

/**app is passe to start a server */
const server = http.createServer(app);

server.listen(3000)
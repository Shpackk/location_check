const express = require('express')
const app = express()
const ipRouter = require('./routes/ipCheckRoute')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(ipRouter)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
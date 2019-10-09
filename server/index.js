const express = require('express')

const app = new express()

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin/index')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
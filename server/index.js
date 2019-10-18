const express = require('express')

const app = new express()

// 设置全局变量
app.set('secret', 'ieny21ew6wf51')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))

require('./plugins/db')(app)
require('./routes/admin/index')(app)
require('./routes/web/index')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})
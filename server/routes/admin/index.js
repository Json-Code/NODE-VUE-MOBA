module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Catepory = require('../../model/Category')
    router.put('/categories/:id', async (req, res) => {
        const model = await Catepory.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/categories/:id', async (req, res) => {
        await Catepory.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    router.post('/categories', async (req, res) => {
        const model = await Catepory.create(req.body)
        res.send(model)
    })
    router.get('/categories', async (req, res) => {
        const items = await Catepory.find().populate('parent').limit(10)
        res.send(items)
    })
    router.get('/categories/:id', async (req, res) => {
        const model = await Catepory.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api/rest/:resource', router)
}
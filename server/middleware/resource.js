module.exports = opintions => {  
    return async (req, res, next) => {
        const ModelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../model/${ModelName}`)
        next()        
    }
}
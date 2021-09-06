const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('/', (req, res, next) => {
  Recipe.getRecipes()
  .then(resource => {
    res.status(200).json(resource)
  })
  .catch(next)
})

router.get('/:recipe_id', (req,res,next) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then(resource => {
      console.log('find something')
      res.status(200).json(resource)
    })
    .catch(next)
})



router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: 'something broke in recipe router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router
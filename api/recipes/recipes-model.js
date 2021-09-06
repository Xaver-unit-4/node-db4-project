const db = require('../../data/db-config')

const getRecipes = () => {
  return db('recipes')
}

const getRecipeById = (recipe_id) => {
  return db('recipes')
    .where({ recipe_id }).first()
}

// async function getRecipeById(recipe_id) {
//   const recipeRows = await db ('recipe')
//     .where('recipe_id', recipe_id)
//   return recipeRows
// }

module.exports = {getRecipes, getRecipeById}
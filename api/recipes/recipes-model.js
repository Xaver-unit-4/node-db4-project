function getRecipeById(recipe_id) {
  return Promise.resolve(`awesome recipe number ${recipe_id}`)
}

module.exports = {getRecipeById}
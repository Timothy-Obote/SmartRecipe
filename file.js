const userIngredients = ['chicken', 'onion', 'garlic'];

const recipes = [
  { name: 'Chicken Stir Fry', ingredients: ['chicken', 'onion', 'garlic', 'soy sauce'] },
  { name: 'Pasta Alfredo', ingredients: ['pasta', 'cream', 'cheese'] },
];

const matchingRecipes = recipes.filter(recipe =>
  recipe.ingredients.every(ingredient => userIngredients.includes(ingredient))
);

console.log('Matching Recipes:', matchingRecipes);

<!DOCTYPE html>
<html>
<head>
  <title>Smart Recipe</title>
</head>
<body>
  <h1>Smart Recipe Finder</h1>
  <input type="text" id="ingredientInput" placeholder="Enter ingredients (comma-separated)" />
  <button onclick="findRecipes()">Search</button>

  <div id="results"></div>

  <script>
    const recipeDB = [
      {
        name: "Garlic Chicken",
        ingredients: ["chicken", "garlic", "onion"]
      },
      {
        name: "Tomato Pasta",
        ingredients: ["pasta", "tomato", "basil"]
      },
      {
        name: "Avocado Toast",
        ingredients: ["bread", "avocado", "egg"]
      }
    ];

    function findRecipes() {
      const input = document.getElementById("ingredientInput").value.toLowerCase();
      const userIngredients = input.split(",").map(i => i.trim());

      const matches = recipeDB.filter(recipe =>
        recipe.ingredients.every(ing => userIngredients.includes(ing))
      );

      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      if (matches.length === 0) {
        resultsDiv.innerHTML = "<p>No exact matches found. Try different ingredients.</p>";
      } else {
        matches.forEach(recipe => {
          const div = document.createElement("div");
          div.innerHTML = `<h2>${recipe.name}</h2><p>Ingredients: ${recipe.ingredients.join(", ")}</p>`;
          resultsDiv.appendChild(div);
        });
      }
    }
  </script>
</body>
</html>

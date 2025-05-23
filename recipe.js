import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SmartRecipeApp() {
  const [mealPreference, setMealPreference] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    // Placeholder: Replace this with backend call
    const mockResponse = [
      {
        name: "Spaghetti Bolognese",
        ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Garlic", "Onion"],
      },
      {
        name: "Vegetable Stir Fry",
        ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Garlic"],
      },
    ];
    setRecipes(mockResponse);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Smart Recipe</h1>
        <p className="text-center text-gray-600 mb-4">
          Enter your meal preference and get suggested recipes with ingredients.
        </p>
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder="e.g. pasta, chicken, vegan..."
            value={mealPreference}
            onChange={(e) => setMealPreference(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <div className="space-y-4">
          {recipes.map((recipe, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
                <ul className="list-disc pl-5 text-gray-700">
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

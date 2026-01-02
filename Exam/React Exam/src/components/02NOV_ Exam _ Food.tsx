import { useEffect, useState } from "react";
import axios from "axios";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

const FoodData = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        const data = response.data.recipes;
        const lastTen = data.slice(-10);
        setRecipes(lastTen);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  if (loading) {
    return <h2>Loading Please Wait...</h2>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Here Are The Last 10 Food Recipes</h2>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            {recipe.id}) {recipe.name}
          </h3>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{ width: "250px", borderRadius: "8px" }}
          />

          <h4>Ingredients:</h4>
          <ol>
            {recipe.ingredients.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ol>

          <h4>Instructions:</h4>
          <ul>
            {recipe.instructions.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FoodData;

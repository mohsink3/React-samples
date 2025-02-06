import { useState, useEffect } from "react";

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];

}

function RecipeList() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const fetchRecipes = async () => {
        const response = await fetch("https://dummyjson.com/recipes");

        const data = await response.json();

        setRecipes(data.recipes);
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Recipe List</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        {recipe.name} - {recipe.ingredients}
                    </li>
                ))}

            </ul>
        </div>
    );
};
export default RecipeList;
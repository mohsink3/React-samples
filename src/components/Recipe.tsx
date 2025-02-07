import { useState, useEffect } from "react";

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];

}

<<<<<<< HEAD
function RecipeList(){
    const [recipes,setRecipes] = useState<Recipe[]>([]);
=======
function RecipeList() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
>>>>>>> a23abe9008d984fe4373320f50d828d25b06e393

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
import { useState,useEffect } from "react";

interface Recipe{
    id:number;
    title:string;
}

function RecipeList(){
    const [recipes,setRecipe] = useState<Recipe[]>([]);

    const fetchRecipe = async () =>{
        const response = await fetch("https://dummyjson.com/recipes");

        const data = await response.json();

        setRecipe(data);
    };

    useEffect(()=>{
        fetchRecipe();
    });

    return(
        <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recipe List</h2>
        <ul>
            {recipes.map((recipe)=>(
                <li key ={recipe.id}>
                    {recipe.title}
                </li>
            ))}

        </ul>
    </div>
    );
};
export default RecipeList;
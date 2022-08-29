import { useState } from "react";
import axios from "axios";


export const Ingredients = () => {

    const [ingredient, setIngredient] = useState("")
    const [recipes, setRecipes] = useState([])




    const newData = async () => {
        const response = await axios.get(
            `https://api.edamam.com/api/recipes/v2?app_id=e108185e&app_key=d1dcd17d85be68f7fd80ca52338c111b&type=public&q=${ingredient}`
        );

        console.log(response);

        setRecipes(response.data.hits)
    };



    return (
        <>
            <form>
                <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    placeholder="Your ingredients..." />
            </form>

            <button type="button" onClick={newData}>Add</button>

            <div className="List">
                <p>list of your ingredients</p>
                <ul>
                    {recipes.map(e => 
                    <li>
                        {e.recipe.label} <img src={e.recipe.image} />
                        <h3>{e.recipe.calories}</h3>
                    </li>)}
                </ul>
            </div>
        </>
    )
};




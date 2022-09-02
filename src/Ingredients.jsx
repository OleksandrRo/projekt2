import { useState } from "react";
import axios from "axios";


export const Ingredients = () => {

    const [ingredient, setIngredient] = useState("")
    const [recipes, setRecipes] = useState([])
    const [allList, setAllList] = useState([])
    const [diet, setDiet] = useState("")
    const [health, setHealth] = useState("")
    const [mealType, setMealType] = useState("")
    const [dishType, setDishType] = useState("")
    const [cookingTime, setCookingTime] = useState("")


    const addIngredient = () => {
        setAllList([...allList, ingredient])
        setIngredient("")
    };

    const newData = async () => {
        const response = await axios.get(
            `https://api.edamam.com/api/recipes/v2?app_id=e108185e&app_key=d1dcd17d85be68f7fd80ca52338c111b&type=public&q=${allList.join(", ")}${diet.length > 0 && "&diet=" + diet }${health.length > 0 && "&health=" + health }${mealType.length > 0 && "&mealType=" + mealType }${dishType.length > 0 && "&dishType=" + dishType }${time.length > 0 && "&time=" + cookingTime }`
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

            <button type="button" onClick={addIngredient}>Add</button>
            <br />
            <button type="button" onClick={newData}>sent reques</button>
            <div>
                <select name="diet" onChange={(e) => setDiet(e.target.value)}>
                    <option selected="" value="">select</option>
                    <option value="balanced">balanced</option>
                    <option value="high-fiber">high-fiber</option>
                    <option value="high-protein">high-protein</option>
                    <option value="low-carb">low-carb</option>
                    <option value="low-fat">low-fat</option>
                    <option value="low-sodium">low-sodium</option>
                </select>
                <br />
                <select name="health" onChange={(e) => setHealth(e.target.value)}>
                    <option selected="" value="">select</option>
                    <option value="alcohol-cocktail">alcohol-cocktail</option>
                    <option value="alcohol-free">alcohol-free</option>
                    <option value="celery-free">celery-free</option>
                    <option value="crustacean-free">crustacean-free</option>
                    <option value="dairy-free">dairy-free</option>
                    <option value="DASH">DASH</option>
                    <option value="egg-free">egg-free</option>
                    <option value="fish-free">fish-free</option>
                    <option value="fodmap-free">fodmap-free</option>
                    <option value="gluten-free">gluten-free</option>
                    <option value="immuno-supportive">immuno-supportive</option>
                    <option value="keto-friendly">keto-friendly</option>
                    <option value="kidney-friendly">kidney-friendly</option>
                    <option value="kosher">kosher</option>
                    <option value="low-fat-abs">low-fat-abs</option>
                    <option value="low-potassium">low-potassium</option>
                    <option value="low-sugar">low-sugar</option>
                    <option value="lupine-free">lupine-free</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="mollusk-free">mollusk-free</option>
                    <option value="mustard-free">mustard-free</option>
                    <option value="no-oil-added">no-oil-added</option>
                    <option value="paleo">paleo</option>
                    <option value="peanut-free">peanut-free</option>
                    <option value="pescatarian">pescatarian</option>
                    <option value="pork-free">pork-free</option>
                    <option value="red-meat-free">red-meat-free</option>
                    <option value="sesame-free">sesame-free</option>
                    <option value="shellfish-free">shellfish-free</option>
                    <option value="soy-free">soy-free</option>
                    <option value="sugar-conscious">sugar-conscious</option>
                    <option value="sulfite-free">sulfite-free</option>
                    <option value="dairy-free">dairy-free</option>
                    <option value="tree-nut-free">tree-nut-free</option>
                    <option value="vegan">vegan</option>
                    <option value="vegetarian">vegetarian</option>
                    <option value="wheat-free">wheat-free</option>

                </select>
                <br />
                <select name="mealType" onChange={(e) => setMealType(e.target.value)}>
                    <option selected="" value="">select</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Snack">Snack</option>
                    <option value="Teatime">Teatime</option>
                </select>
                <br />
                <select name="dishType" onChange={(e) => setDishType(e.target.value)}>
                    <option selected="" value="">select</option>
                    <option value="Biscuits and cookies">Biscuits and cookies</option>
                    <option value="Bread">Bread</option>
                    <option value="Cereals">Cereals</option>
                    <option value="Condiments and sauces">Condiments and sauces</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Main course">Main course</option>
                    <option value="Pancake">Pancake</option>
                    <option value="Preps">Preps</option>
                    <option value="Preserv">Preserv</option>
                    <option value="Salad">Salad</option>
                    <option value="Sandwiches">Sandwiches</option>
                    <option value="Side dish">Side dish</option>
                    <option value="Soup">Soup</option>
                    <option value="Starter">Starter</option>
                    <option value="Sweets">Sweets</option>
                                    
                </select>
            </div>

            <div className="List">
                <p>list of your ingredients</p>
                {allList.map(e => <span> {e} </span>)}
                <ul>
                    {recipes.map(e =>
                        <li>
                            <h3>{e.recipe.label} </h3>
                            <img src={e.recipe.image} />
                            <br />
                            {e.recipe.ingredientLines}
                            {e.recipe.cuisineType}
                        </li>)}
                </ul>
            </div>
        </>
    )
};




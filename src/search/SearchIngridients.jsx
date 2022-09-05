import { useState } from "react";
import axios from "axios";
import { DIET, HEALTH, MEALTYPE, DISHTYPE, COOKINGTIME } from "./Constans.js";
import { Choise } from "./Choise.mjs";


export const SearchIngredients = (props) => {

    const [ingredient, setIngredient] = useState("")
    const [recipes, setRecipes] = useState([])
    const [allList, setAllList] = useState([])
    const [diet, setDiet] = useState("")
    const [health, setHealth] = useState("")
    const [mealType, setMealType] = useState("")
    const [dishType, setDishType] = useState("")
    const [cookingTime, setCookingTime] = useState("")
    const [loading, setLoading] = useState(false)



    const addIngredient = () => {
        setAllList([...allList, ingredient])
        setIngredient("")
    };

    const newData = async () => {
        setLoading(true);
        const response = await axios.get(
            `https://api.edamam.com/api/recipes/v2?app_id=e108185e&app_key=d1dcd17d85be68f7fd80ca52338c111b&type=public&q=${allList.join(", ")}${diet.length > 0 ? "&diet=" + diet : ""}${health.length > 0 ? "&health=" + health : ""}${mealType.length > 0 ? "&mealType=" + mealType : ""}${dishType.length > 0 ? "&dishType=" + dishType : ""}${cookingTime.length > 0 ? "&time=" + cookingTime : ""}`
        );
        setLoading(false);
        console.log(response);

        setRecipes(response.data.hits)
        setAllList([])
    };






    return (
        <>
            <form>
                    <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    placeholder="Your ingredients..." />
                    <br />
                    <button type="button" onClick={addIngredient}>Add</button>
                    <br />
                    <Choise name="diet" changeValue={setDiet}
                        aray={DIET} />
                    <br />
                    <Choise name="health" changeValue={setHealth}
                        aray={HEALTH} />
                    <br />
                    <Choise name="mealType" changeValue={setMealType}
                        aray={MEALTYPE} />
                    <br />
                    <Choise name="dishType" changeValue={setDishType}
                        aray={DISHTYPE} />
                    <br />
                    <Choise name="cookingTime" changeValue={setCookingTime}
                        aray={COOKINGTIME} />

            </form>



            {allList.length > 0 && <button type="button" onClick={newData}>sent reques</button>}




            <div className="List">
                <p>list of your ingredients</p>
                {allList.map(e => <span> {e} </span>)}
                {loading ? <img src={props.img} /> : <ul>
                    {recipes.length === 0 ? <div>Not found</div> : recipes.map(e =>
                        <li>
                            <h3>{e.recipe.label} </h3>
                            <img src={e.recipe.image} />
                            <br />
                            {e.recipe.ingredientLines}
                            {e.recipe.cuisineType}
                        </li>)}
                </ul>}
            </div>
        </>
    )
};




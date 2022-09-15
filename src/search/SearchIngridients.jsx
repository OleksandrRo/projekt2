import { useState } from "react";
import axios from "axios";
import { Form } from "./Form.jsx";
import { Results } from "../result/Results.jsx";
import { SendReq } from "./Sendreq.jsx";
import { MainStyled } from "../App.styled.js";




export const SearchIngredients = (props) => {

    const [ingredient, setIngredient] = useState("")
    const [recipes, setRecipes] = useState([])
    const [allList, setAllList] = useState([])
    const [loading, setLoading] = useState(false)

    const addIngredient = () => {
        if (ingredient.trim().length > 0) {
            setAllList([...allList, ingredient])
            setIngredient("")
        }

    };

    const newData = async () => {
        setLoading(true);
        const response = await axios.get(
            `https://api.edamam.com/api/recipes/v2?app_id=e108185e&app_key=d1dcd17d85be68f7fd80ca52338c111b&type=public&q=${allList.join(", ")}`
        );
        setLoading(false);
        console.log(response);

        setRecipes(response.data.hits)
        setAllList([])
    };

    return (
        <MainStyled>
            <Form addIngredient={addIngredient} ingredient={ingredient} setIngredient={setIngredient} />
            <SendReq allList={allList} newData={newData} setAllList={setAllList} />
            <Results loading={loading} recipes={recipes} allList={allList} img={props.img} />
        </MainStyled>
    )
};




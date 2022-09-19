import { useState } from "react"
import { ListMenuStyled, ButtonFormStyled } from "../App.styled"
import { Choise } from "../filter/Choise"
import { DIET, HEALTH } from "../search/Constans"
import { ExceptionComponent } from "../filter/Exception"
import axios from "axios";


export const ListMenu = ({ setRecipes, allList, setLoading, }) => {
    const [diet, setDiet] = useState("")
    const [health, setHealth] = useState("")
    const [allException, setAllException] = useState([])
    const [exception, setException] = useState("")


    const ExIngredient = () => {
        if (exception.trim().length > 0) {
            setAllException([...allException, exception])
            setException("")
            setAllException([])

        }

        console.log(exception);
    };


    const filterData = async () => {
        setLoading(true);
        const response = await axios.get(
            `https://api.edamam.com/api/recipes/v2?app_id=e108185e&app_key=d1dcd17d85be68f7fd80ca52338c111b&type=public&q=${allList.join(", ")}&${diet.length > 0 && "diet=" + diet}&${health.length > 0 && "health=" + health}&${allException.lenght > 0 && "exception=" + exception}`
        );
        setLoading(false);
        console.log(response);

        setRecipes(response.data.hits)

    };

    return <ListMenuStyled>

        <ButtonFormStyled type="button" onClick={() => { filterData(); ExIngredient() }} >FILTER</ButtonFormStyled>
        <Choise name="diet" changeValue={setDiet}
            aray={DIET} />
        <Choise name="health" changeValue={setHealth}
            aray={HEALTH} />
        <ExceptionComponent setException={setException} exception={exception} />

    </ListMenuStyled>

}

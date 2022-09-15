import { useState } from "react"
import {ListMenuStyled} from "../App.styled"
import { Choise } from "../search/Choise"
import { DIET, HEALTH, MEALTYPE, DISHTYPE, COOKINGTIME } from "../search/Constans"
import { Checkbox } from "../search/Checkbox"

export const ListMenu = (props) =>{
    const [diet, setDiet] = useState("")
    const [health, setHealth] = useState("")
    const [mealType, setMealType] = useState("")
    const [dishType, setDishType] = useState("")
    const [cookingTime, setCookingTime] = useState("")

    return <ListMenuStyled>
            <h3>FILTER</h3>
            <Checkbox name="some filter" type="checkbox" />
            <Checkbox name="some filter" type="checkbox"/>
            <Checkbox name="some filter" type="checkbox"/>
            <Checkbox name="some filter" type="checkbox"/>
            <Choise name="diet" changeValue={setDiet}
                aray={DIET} />
            <Choise name="health" changeValue={setHealth}
                aray={HEALTH} />
            <Choise name="mealType" changeValue={setMealType}
                aray={MEALTYPE} />
            <Choise name="dishType" changeValue={setDishType}
                aray={DISHTYPE} />
            <Choise name="cookingTime" changeValue={setCookingTime}
                aray={COOKINGTIME} />
     </ListMenuStyled>
    
}
